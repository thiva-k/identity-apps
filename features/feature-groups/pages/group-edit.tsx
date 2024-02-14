/**
 * Copyright (c) 2020-2023, WSO2 LLC. (https://www.wso2.com).
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
import { AppConstants } from "@wso2is/feature-constants.common/constants";
import { getGroupById } from "@wso2is/feature-groups.common/api";
import { GroupsInterface } from "@wso2is/feature-groups.common/models/groups";
import {history} from "@wso2is/feature-helpers.common/helpers"
import {FeatureConfigInterface} from "@wso2is/feature-models.common/models";
import {AppState} from "@wso2is/feature-store.common/store";
import { TabPageLayout } from "@wso2is/react-components";
import { AxiosResponse } from "axios";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { EditGroup } from "../components";
import GroupManagementProvider from "../providers/group-management-provider";

const GroupEditPage: FunctionComponent<any> = (): ReactElement => {

    const { t } = useTranslation();

    const featureConfig: FeatureConfigInterface = useSelector((state: AppState) => state.config.ui.features);

    const [ roleId, setGroupId ] = useState<string>(undefined);
    const [ group, setGroup ] = useState<GroupsInterface>();
    const [ isGroupDetailsRequestLoading, setIsGroupDetailsRequestLoading ] = useState<boolean>(false);

    /**
     * Get Group data from URL id
     */
    useEffect(() => {
        const path: string[] = history.location.pathname.split("/");
        const roleId: string = path[ path.length - 1 ];

        setGroupId(roleId);
        getGroupDetails(roleId);
    }, []);

    const getGroupDetails = (roleId: string ): void => {
        setIsGroupDetailsRequestLoading(true);

        getGroupById(roleId)
            .then((response: AxiosResponse<GroupsInterface>) => {
                if (response.status === 200) {
                    setGroup(response.data);
                }
            }).catch(() => {
            // TODO: handle error
            })
            .finally(() => {
                setIsGroupDetailsRequestLoading(false);
            });
    };

    const onGroupUpdate = (): void => {
        getGroupDetails(roleId);
    };

    const handleBackButtonClick = () => {
        history.push(AppConstants.getPaths().get("GROUPS"));
    };

    return (
        <GroupManagementProvider>
            <TabPageLayout
                isLoading={ isGroupDetailsRequestLoading }
                title={
                    group && group.displayName ?
                        group.displayName :
                        t("console:manage.pages.rolesEdit.title")
                }
                pageTitle={ t("console:manage.pages.rolesEdit.title") }
                backButton={ {
                    onClick: handleBackButtonClick,
                    text: t("console:manage.pages.rolesEdit.backButton", { type: "groups" })
                } }
                titleTextAlign="left"
                bottomMargin={ false }
            >
                <EditGroup
                    isLoading={ isGroupDetailsRequestLoading }
                    group={ group }
                    groupId={ roleId }
                    onGroupUpdate={ onGroupUpdate }
                    featureConfig={ featureConfig }
                />
            </TabPageLayout>
        </GroupManagementProvider>
    );
};

/**
 * A default export was added to support React.lazy.
 * TODO: Change this to a named export once react starts supporting named exports for code splitting.
 * @see {@link https://reactjs.org/docs/code-splitting.html#reactlazy}
 */
export default GroupEditPage;