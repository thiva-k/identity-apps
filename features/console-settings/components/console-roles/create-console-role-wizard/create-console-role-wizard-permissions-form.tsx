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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ChevronDownIcon } from "@oxygen-ui/react-icons";
import Accordion from "@oxygen-ui/react/Accordion";
import AccordionDetails from "@oxygen-ui/react/AccordionDetails";
import AccordionSummary from "@oxygen-ui/react/AccordionSummary";
import Checkbox from "@oxygen-ui/react/Checkbox";
import Paper from "@oxygen-ui/react/Paper";
import Typography from "@oxygen-ui/react/Typography";
import { IdentifiableComponentInterface, LegacyModeInterface } from "@wso2is/core/models";
import cloneDeep from "lodash-es/cloneDeep";
import get from "lodash-es/get";
import React, {
    ChangeEvent,
    FunctionComponent,
    MouseEvent,
    ReactElement,
    SyntheticEvent,
    useMemo,
    useState
} from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppState } from "../../../../core/store";
import { CreateRolePermissionInterface } from "../../../../roles/models/roles";
import useGetAPIResourceCollections from "../../../api/use-get-api-resource-collections";
import { ConsoleRolesOnboardingConstants } from "../../../constants/console-roles-onboarding-constants";
import {
    APIResourceCollectionInterface,
    APIResourceCollectionPermissionCategoryInterface,
    APIResourceCollectionPermissionScopeInterface,
    APIResourceCollectionResponseInterface,
    APIResourceCollectionTypes
} from "../../../models/console-roles";
import "./create-console-role-wizard-permissions-form.scss";

/**
 * Prop types for the text customization fields component.
 */
export interface CreateConsoleRoleWizardPermissionsFormProps extends IdentifiableComponentInterface {
    onPermissionsChange: (permissions: CreateRolePermissionInterface[]) => void;
}

interface PermissionScopeInterface {
    value: string;
}

interface SelectedPermissionCategoryInterface {
    read: boolean;
    write: boolean;
    permissions: PermissionScopeInterface[];
}

interface SelectedPermissionsInterface {
    tenant: {
        [key: string]: SelectedPermissionCategoryInterface;
    };
    organization: {
        [key: string]: SelectedPermissionCategoryInterface;
    };
}

/**
 * Text customization fields component.
 *
 * @param props - Props injected to the component.
 * @returns Text customization fields component.
 */
const CreateConsoleRoleWizardPermissionsForm: FunctionComponent<CreateConsoleRoleWizardPermissionsFormProps> = (
    props: CreateConsoleRoleWizardPermissionsFormProps
): ReactElement => {
    const { "data-componentid": componentId, onPermissionsChange } = props;

    const { t } = useTranslation();

    const legacyMode: LegacyModeInterface = useSelector((state: AppState) => state?.config?.ui?.legacyMode);

    const { data: tenantAPIResourceCollections } = useGetAPIResourceCollections(true, "type eq tenant", "apiResources");

    const { data: organizationAPIResourceCollections } = useGetAPIResourceCollections(
        true,
        "type eq organization",
        "apiResources"
    );

    const filteredTenantAPIResourceCollections: APIResourceCollectionResponseInterface = useMemo(() => {

        if (!tenantAPIResourceCollections) {
            return null;
        }

        const clonedTenantAPIResourceCollections: APIResourceCollectionResponseInterface =
            cloneDeep(tenantAPIResourceCollections);
        const filteringAPIResourceCollectionNames: string[] = [];

        if (legacyMode?.rolesV1) {
            filteringAPIResourceCollectionNames.push(
                ConsoleRolesOnboardingConstants.ROLE_API_RESOURCES_COLLECTION_NAME);
        } else {
            filteringAPIResourceCollectionNames.push(
                ConsoleRolesOnboardingConstants.ROLE_V1_API_RESOURCES_COLLECTION_NAME);
        }

        clonedTenantAPIResourceCollections.apiResourceCollections =
                clonedTenantAPIResourceCollections?.apiResourceCollections?.filter(
                    (item: APIResourceCollectionInterface) =>
                        !filteringAPIResourceCollectionNames.includes(item?.name)
                );

        return clonedTenantAPIResourceCollections;
    }, [ tenantAPIResourceCollections ]);

    const filteredOrganizationAPIResourceCollections: APIResourceCollectionResponseInterface = useMemo(() => {

        if (!organizationAPIResourceCollections) {
            return null;
        }

        const clonedOrganizationAPIResourceCollections: APIResourceCollectionResponseInterface =
            cloneDeep(organizationAPIResourceCollections);
        const filteringAPIResourceCollectionNames: string[] = [];

        if (legacyMode?.rolesV1) {
            filteringAPIResourceCollectionNames.push(
                ConsoleRolesOnboardingConstants.ORG_ROLE_API_RESOURCES_COLLECTION_NAME);
        } else {
            filteringAPIResourceCollectionNames.push(
                ConsoleRolesOnboardingConstants.ORG_ROLE_V1_API_RESOURCES_COLLECTION_NAME);
        }

        clonedOrganizationAPIResourceCollections.apiResourceCollections =
                clonedOrganizationAPIResourceCollections?.apiResourceCollections?.filter(
                    (item: APIResourceCollectionInterface) =>
                        !filteringAPIResourceCollectionNames.includes(item?.name)
                );

        return clonedOrganizationAPIResourceCollections;
    }, [ organizationAPIResourceCollections ]);

    const [ expanded, setExpanded ] = useState<string | false>(false);
    const [ selectedPermissions, setSelectedPermissions ] = useState<SelectedPermissionsInterface>({
        organization: {},
        tenant: {}
    });

    const handleChange = (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSelectAll = (e: ChangeEvent<HTMLInputElement>, type: APIResourceCollectionTypes) => {
        const _selectedPermissions: SelectedPermissionsInterface = cloneDeep(selectedPermissions);

        if (type === APIResourceCollectionTypes.TENANT) {
            if (e.target.checked) {
                _selectedPermissions.tenant = (
                    filteredTenantAPIResourceCollections?.apiResourceCollections || []
                ).reduce(
                    (
                        result: {
                            [key: string]: SelectedPermissionCategoryInterface;
                        },
                        collection: APIResourceCollectionInterface
                    ) => {
                        result[collection.id] = {
                            permissions: transformResourceCollectionToPermissions(collection.apiResources.read),
                            read: true,
                            write: false
                        };

                        return result;
                    },
                    {}
                );
            } else {
                _selectedPermissions.tenant = {};
            }
        } else {
            if (e.target.checked) {
                _selectedPermissions.organization = (
                    filteredOrganizationAPIResourceCollections?.apiResourceCollections || []
                ).reduce(
                    (
                        result: {
                            [key: string]: SelectedPermissionCategoryInterface;
                        },
                        collection: APIResourceCollectionInterface
                    ) => {
                        result[collection.id] = {
                            permissions: transformResourceCollectionToPermissions(collection.apiResources.read),
                            read: true,
                            write: false
                        };

                        return result;
                    },
                    {}
                );
            } else {
                _selectedPermissions.organization = {};
            }
        }

        setSelectedPermissions(_selectedPermissions);
        processPermissionsChange(_selectedPermissions);
    };

    const transformResourceCollectionToPermissions = (
        resource: APIResourceCollectionPermissionCategoryInterface[]
    ): PermissionScopeInterface[] => {
        return resource
            .map((resource: APIResourceCollectionPermissionCategoryInterface) =>
                resource.scopes.map((scope: APIResourceCollectionPermissionScopeInterface) => ({ value: scope.name }))
            )
            .reduce(
                (result: PermissionScopeInterface[], permissions: PermissionScopeInterface[]) =>
                    result.concat(permissions),
                []
            );
    };

    const processPermissionsChange = (permissions: SelectedPermissionsInterface): void => {
        const uniquePermissionsSet: Set<string> = new Set<string>();

        Object.keys(permissions).forEach((key: string) => {
            const typePermissions: SelectedPermissionsInterface = permissions[key];

            Object.keys(typePermissions).forEach((id: string) => {
                const resource: SelectedPermissionCategoryInterface = typePermissions[id];

                if (resource.permissions && resource.permissions.length > 0) {
                    resource.permissions.forEach((permission: PermissionScopeInterface) => {
                        uniquePermissionsSet.add(JSON.stringify(permission));
                    });
                }
            });
        });

        const flattenedPermissions: CreateRolePermissionInterface[] = Array.from(
            uniquePermissionsSet
        ).map((permissionString: string) => JSON.parse(permissionString));

        onPermissionsChange(flattenedPermissions);
    };

    const handleSelect = (
        e: ChangeEvent<HTMLInputElement>,
        collection: APIResourceCollectionInterface,
        type: APIResourceCollectionTypes
    ) => {
        const { id, apiResources } = collection;
        const _selectedPermissions: SelectedPermissionsInterface = cloneDeep(selectedPermissions);

        if (e.target.checked) {
            _selectedPermissions[type][id] = {
                permissions: transformResourceCollectionToPermissions(apiResources.read),
                read: true,
                write: false
            };
        } else {
            delete _selectedPermissions[type][id];
        }

        setSelectedPermissions(_selectedPermissions);
        processPermissionsChange(_selectedPermissions);
    };

    const handlePermissionLevelChange = (
        _: MouseEvent<HTMLElement>,
        collection: APIResourceCollectionInterface,
        value: string,
        type: APIResourceCollectionTypes
    ): void => {
        const { id, apiResources } = collection;
        const _selectedPermissions: SelectedPermissionsInterface = cloneDeep(selectedPermissions);

        _selectedPermissions[type][id] = {
            permissions: transformResourceCollectionToPermissions(apiResources[value]),
            read: value === "read",
            write: value === "write"
        };

        setSelectedPermissions(_selectedPermissions);
        processPermissionsChange(_selectedPermissions);
    };

    return (
        <div className="create-console-role-wizard-permissions-form" data-componentid={ componentId }>
            <div>
                <Accordion
                    elevation={ 0 }
                    expanded={ expanded === "tenant-permissions" }
                    onChange={ handleChange("tenant-permissions") }
                    className="tenant-permissions-accordion"
                >
                    <AccordionSummary
                        expandIcon={ <ChevronDownIcon /> }
                        aria-controls="tenant-permissions-content"
                        id="tenant-permissions-header"
                    >
                        <Checkbox
                            color="primary"
                            checked={
                                Object.keys(selectedPermissions.tenant).length ===
                                filteredTenantAPIResourceCollections?.apiResourceCollections?.length
                            }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                                handleSelectAll(e, APIResourceCollectionTypes.TENANT);
                            } }
                            inputProps={ {
                                "aria-label": "Select all tenant permissions"
                            } }
                        />
                        <Typography className="permissions-accordion-label">
                            { t("console:consoleSettings.roles.add.tenantPermissions.label") }
                        </Typography>
                        <Typography variant="body2">
                            { filteredTenantAPIResourceCollections?.apiResourceCollections?.length } Permissions
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={ Paper } elevation={ 0 }>
                            <Table className="permissions-table" size="small" aria-label="tenant permissions table">
                                <TableBody>
                                    { filteredTenantAPIResourceCollections?.apiResourceCollections?.map(
                                        (collection: APIResourceCollectionInterface) => (
                                            <TableRow key={ collection.id } className="permissions-table-data-row">
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={ Object.keys(selectedPermissions.tenant).includes(
                                                            collection.id
                                                        ) }
                                                        onChange={ (e: ChangeEvent<HTMLInputElement>) =>
                                                            handleSelect(
                                                                e,
                                                                collection,
                                                                APIResourceCollectionTypes.TENANT
                                                            )
                                                        }
                                                        inputProps={ {
                                                            "aria-label": `Select ${collection.displayName} permission`
                                                        } }
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    { collection.displayName }
                                                </TableCell>
                                                <TableCell align="right">
                                                    <ToggleButtonGroup
                                                        value={
                                                            Object.keys(selectedPermissions.tenant).includes(
                                                                collection.id
                                                            )
                                                                ? get(selectedPermissions.tenant, collection.id)?.write
                                                                    ? "write"
                                                                    : "read"
                                                                : null
                                                        }
                                                        exclusive
                                                        onChange={ (e: MouseEvent<HTMLElement>, value: string) => {
                                                            // If no value is selected and exclusive is true
                                                            // the value is null. Purpose of this if block is
                                                            // to prevent the submit in the case of null value.
                                                            if (!value) {
                                                                return;
                                                            }

                                                            handlePermissionLevelChange(
                                                                e,
                                                                collection,
                                                                value,
                                                                APIResourceCollectionTypes.TENANT
                                                            );
                                                        } }
                                                        aria-label="text alignment"
                                                        size="small"
                                                    >
                                                        <ToggleButton value="read" aria-label="left aligned">
                                                            { t("console:consoleSettings.roles.permissionLevels.view") }
                                                        </ToggleButton>
                                                        <ToggleButton value="write" aria-label="right aligned">
                                                            { t("console:consoleSettings.roles.permissionLevels.edit") }
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    ) }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion
                    elevation={ 0 }
                    expanded={ expanded === "organization-permissions" }
                    onChange={ handleChange("organization-permissions") }
                    className="organization-permissions-accordion"
                >
                    <AccordionSummary
                        expandIcon={ <ChevronDownIcon /> }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Checkbox
                            color="primary"
                            defaultChecked={ false }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => {
                                handleSelectAll(e, APIResourceCollectionTypes.ORGANIZATION);
                            } }
                            inputProps={ {
                                "aria-label": "Select all organization permissions"
                            } }
                        />
                        <Typography className="permissions-accordion-label">
                            { t("console:consoleSettings.roles.add.organizationPermissions.label") }
                        </Typography>
                        <Typography variant="body2">
                            { filteredOrganizationAPIResourceCollections?.apiResourceCollections?.length } Permissions
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={ Paper } elevation={ 0 }>
                            <Table
                                className="permissions-table"
                                size="small"
                                aria-label="organization permissions table"
                            >
                                <TableBody>
                                    { filteredOrganizationAPIResourceCollections?.apiResourceCollections?.map(
                                        (collection: APIResourceCollectionInterface) => (
                                            <TableRow key={ collection.id } className="permissions-table-data-row">
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={
                                                            Object
                                                                .keys(selectedPermissions.organization)
                                                                .includes(collection.id)
                                                        }
                                                        onChange={ (e: ChangeEvent<HTMLInputElement>) =>
                                                            handleSelect(
                                                                e,
                                                                collection,
                                                                APIResourceCollectionTypes.ORGANIZATION
                                                            )
                                                        }
                                                        inputProps={ {
                                                            "aria-label": `Select ${collection.displayName} permission`
                                                        } }
                                                    />
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    { collection.displayName }
                                                </TableCell>
                                                <TableCell align="right">
                                                    <ToggleButtonGroup
                                                        value={
                                                            Object.keys(selectedPermissions.organization).includes(
                                                                collection.id
                                                            )
                                                                ? get(
                                                                    selectedPermissions.organization, collection.id
                                                                )?.write
                                                                    ? "write"
                                                                    : "read"
                                                                : null
                                                        }
                                                        exclusive
                                                        onChange={ (e: MouseEvent<HTMLElement>, value: string) => {
                                                            handlePermissionLevelChange(
                                                                e,
                                                                collection,
                                                                value,
                                                                APIResourceCollectionTypes.ORGANIZATION
                                                            );
                                                        } }
                                                        aria-label="text alignment"
                                                        size="small"
                                                    >
                                                        <ToggleButton value="read" aria-label="left aligned">
                                                            { t("console:consoleSettings.roles.permissionLevels.view") }
                                                        </ToggleButton>
                                                        <ToggleButton value="write" aria-label="right aligned">
                                                            { t("console:consoleSettings.roles.permissionLevels.edit") }
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    ) }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

/**
 * Default props for the component.
 */
CreateConsoleRoleWizardPermissionsForm.defaultProps = {
    "data-componentid": "create-console-role-wizard-basic-info-form"
};

export default CreateConsoleRoleWizardPermissionsForm;
