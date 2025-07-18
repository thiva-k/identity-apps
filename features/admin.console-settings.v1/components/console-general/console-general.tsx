/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { history } from "@wso2is/admin.core.v1/helpers/history";
import { AppConstants } from "@wso2is/admin.core.v1/constants/app-constants";
import FeatureFlagLabel from "@wso2is/admin.feature-gate.v1/components/feature-flag-label";
import FeatureFlagConstants from "@wso2is/admin.feature-gate.v1/constants/feature-flag-constants";
import { PaletteIcon } from "@oxygen-ui/react-icons";
import Link from "@oxygen-ui/react/Link";
import { Heading, Hint } from "@wso2is/react-components";

interface ConsoleGeneralProps {
    brandingFeatureFlagsConfig?: any;
    testId?: string;
    appId?: string;
}

const ConsoleGeneral: FunctionComponent<ConsoleGeneralProps> = (
    {
        testId = "console-general-branding-link",
        appId
    }
): ReactElement => {
    const { t } = useTranslation();

    const [ isBrandingEnabled, setIsBrandingEnabled ] = React.useState<boolean>(false);

    return (
        <div className="horizontal-card" style={{ display: "flex", alignItems: "center", padding: "1.5rem", border: "1px solid #e0e0e0", borderRadius: "8px", background: "#fff", marginBottom: "1.5rem" }}>
            <div style={{ marginRight: "1.5rem", display: "flex", alignItems: "center" }}>
                <PaletteIcon fill="#ff7300"/>
            </div>
            <div>
                <Heading as="h4" style={{ marginBottom: "0.5rem" }}>
                    { t("applications:forms.generalDetails.sections.branding.title") }
                </Heading>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 500 }}>
                        <input
                            type="checkbox"
                            checked={ isBrandingEnabled }
                            onChange={ (e) => setIsBrandingEnabled(e.target.checked) }
                            style={{ accentColor: "#ff7300", width: "18px", height: "18px" }}
                            data-componentid={ `${testId}-enable-console-branding-toggle` }
                        />
                        { "Enable Console Branding" }
                    </label>
                </div>
                { isBrandingEnabled && (
                    <>
                        <Link
                            className="application-branding-link"
                            color="primary"
                            data-componentid={ `${testId}-application-branding-link` }
                            onClick={ () => {
                                history.push({
                                    pathname: AppConstants.getPaths().get("BRANDING"),
                                });
                            } }
                            style={{ fontWeight: 500, fontSize: "1.1rem" }}
                        > 
                            { "Go to Console Branding"}
                        </Link>
                        <div style={{ marginTop: "0.5rem" }}>
                            <Hint>{"This will take you to the Console Branding page where you can customize user interfaces of the application such as the colors, fonts."}</Hint>
                        </div>
                    </>
                ) }
            </div>
        </div>
    );
    
};

export default ConsoleGeneral;