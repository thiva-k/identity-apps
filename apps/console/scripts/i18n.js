const { execSync, exec } = require("child_process");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs-extra");

const log = console.log;


const META_FILE_NAME = "meta.{hash}.json";
const TRANSLATIONS_FOLDER_NAME = "translations";
const featureFolders = ["groups", "connections", "organizations", "identity-providers"]; // Add more feature folders as needed
const dist = path.join(__dirname, "..", "src", "features");
const BASE_COMPILE_COMMAND = "pnpm compile:i18n:";
const outputPath = path.join(__dirname, "..", "src", "features", "i18n");

// Delete existing js dist folders for each feature
featureFolders.forEach(feature => {
    const featureFolderDist = path.join(dist, feature, "i18n", "dist");
    if (fs.existsSync(featureFolderDist)) {
        log(`\nDeleting existing "dist" folder for feature: ${feature}`);
        fs.removeSync(featureFolderDist);
    }
});

// Delete existing i18n folder
if (fs.existsSync(path.join(__dirname, "..", "src", "features", "i18n"))) {
    log(`\nDeleting existing "i18n" folder`);
    fs.removeSync(path.join(__dirname, "..", "src", "features", "i18n"));
}

// Construct the full js compile command by concatenating the feature with the base command
featureFolders.forEach(feature => {
    const compileCommand = `${BASE_COMPILE_COMMAND}${feature}`;

    log(`\nCompiling i18n for feature: ${feature}`);
    execSync(compileCommand, { cwd: path.join(__dirname, "..") });
});

let metaFileContent = {};

featureFolders.forEach(feature => {
    const featureFolderDist = path.join(dist, feature, "i18n", "dist", "src");
    const translationsPath = path.join(featureFolderDist, TRANSLATIONS_FOLDER_NAME);

    if (!fs.existsSync(translationsPath)) {
        log(`\nWARNING - Could not locate the translations folder for the feature: ${feature}`);
        return;
    }

    createDirectory(outputPath, true);

    const translations = require(translationsPath);

    for (const value of Object.values(translations)) {
        const langDirPath = path.join(outputPath, value.meta.code);
        let resourcePaths = {};

        if (!value || !value.meta || !value.meta.code || !value.resources) {
            log(`\nWARNING - Could not find the relevant locale meta or resources for the language in ${feature}`);
            break;
        }

        createDirectory(langDirPath, true);

        for (const [objKey, objValue] of Object.entries(value.resources)) {
            const subFolderPath = path.join(langDirPath, objKey);
            createDirectory(subFolderPath, true);

            for (const [nsObjKey, nsObjValue] of Object.entries(objValue)) {
                const hash = crypto
                    .createHash("sha1")
                    .update(JSON.stringify(nsObjValue))
                    .digest("hex");
                const fileName = `${nsObjKey}.${hash.substr(0, 8)}.json`;
                const filePath = path.join(subFolderPath, fileName);

                createFile(filePath, JSON.stringify(nsObjValue, undefined, 4), null, true);

                resourcePaths = {
                    ...resourcePaths,
                    [nsObjKey]: path
                        .join(value.meta.code, objKey, fileName)
                        .split(path.sep)
                        .join(path.posix.sep)
                };
            }
        }

        metaFileContent[value.meta.code] = metaFileContent[value.meta.code] || {};
        metaFileContent[value.meta.code].code = value.meta.code;
        metaFileContent[value.meta.code].flag = value.meta.flag;
        metaFileContent[value.meta.code].name = value.meta.name;
        metaFileContent[value.meta.code].paths = metaFileContent[value.meta.code].paths || {}
        metaFileContent[value.meta.code].paths = { ...metaFileContent[value.meta.code].paths, ...resourcePaths };
        metaFileContent[value.meta.code].namespaces = metaFileContent[value.meta.code].namespaces || [];
        metaFileContent[value.meta.code].namespaces = [
            ...new Set([...metaFileContent[value.meta.code].namespaces, ...value.meta.namespaces])
        ];
       
    }
});

const hash = crypto
    .createHash("sha1")
    .update(JSON.stringify(metaFileContent))
    .digest("hex");

createFile(
    path.join(outputPath, META_FILE_NAME.replace("{hash}", hash.substr(0, 8))),
    JSON.stringify(metaFileContent, undefined, 4),
    null,
    true
);

log("\nCreated the locale meta file.");
log("\nSuccessfully generated the locale bundle.");
log("\nRunning cleanup task......");
log("\nClean up task finished successfully......");

function createDirectory(dirPath, checkIfExists) {
    if (!checkIfExists || !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function createFile(filePath, data, options, checkIfExists) {
    if (!checkIfExists || !fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, data, options);
    }
}
