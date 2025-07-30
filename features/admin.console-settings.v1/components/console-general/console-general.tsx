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

import FormControlLabel from "@oxygen-ui/react/FormControlLabel";
import Switch from "@oxygen-ui/react/Switch";
import { PaletteIcon } from "@oxygen-ui/react-icons";
import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { history } from "@wso2is/admin.core.v1/helpers/history";
import { AppConstants } from "@wso2is/admin.core.v1/constants/app-constants";
import { AppState } from "@wso2is/admin.core.v1/store";
import { addAlert } from "@wso2is/core/store";
import { AlertInterface, AlertLevels } from "@wso2is/core/models";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { EmphasizedSegment, Heading, Hint, Link } from "@wso2is/react-components";
import useGetBrandingPreferenceResolve from "@wso2is/common.branding.v1/api/use-get-branding-preference-resolve";
import { updateBrandingPreference } from "@wso2is/admin.branding.v1/api/branding-preferences";
import { 
    BrandingPreferenceInterface, 
    BrandingPreferenceAPIResponseInterface
} from "@wso2is/common.branding.v1/models/branding-preferences";
import { merge, cloneDeep } from "lodash-es";

interface ConsoleGeneralProps extends IdentifiableComponentInterface {
    brandingFeatureFlagsConfig?: any;
    testId?: string;
    appId?: string;
}

const ConsoleGeneral: FunctionComponent<ConsoleGeneralProps> = (
    {
        testId = "console-general-branding-link",
        appId,
        ["data-componentid"]: componentId = "console-general"
    }
): ReactElement => {
    const { t } = useTranslation();
    const dispatch: Dispatch<any> = useDispatch();

    // Get current branding preference from API
    const tenantDomain: string = useSelector((state: AppState) => state.auth.tenantDomain);
    const { data: themePreference, mutate } = useGetBrandingPreferenceResolve(
        tenantDomain,
        !!tenantDomain
    );

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    // Get current toggle state from API data
    const isBrandingEnabled = themePreference?.preference?.configs?.isConsoleBrandingEnabled || false;
    const isBrandingConfigured = !!themePreference?.preference;

    /**
     * Handle toggle change - persist to API and refresh branding
     */
    const handleToggleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;
        setIsLoading(true);

        try {
            // Create updated preference with ONLY console branding flag changed
            const updatedPreference: BrandingPreferenceInterface = merge(
                cloneDeep(themePreference?.preference || {}),
                {
                    configs: {
                        ...themePreference?.preference?.configs,
                        isConsoleBrandingEnabled: newValue
                    }
                }
            ) as BrandingPreferenceInterface;

            // Update via API
            const response: BrandingPreferenceAPIResponseInterface = await updateBrandingPreference(
                isBrandingConfigured,
                tenantDomain,
                updatedPreference
            );

            // Refresh the branding preference data to reflect changes immediately
            mutate();

            dispatch(addAlert<AlertInterface>({
                description: `Console branding has been ${newValue ? 'enabled' : 'disabled'}.`,
                level: AlertLevels.SUCCESS,
                message: "Console branding updated successfully"
            }));

        } catch (error) {
            dispatch(addAlert<AlertInterface>({
                description: "An error occurred while updating console branding.",
                level: AlertLevels.ERROR,
                message: "Console branding update failed"
            }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <EmphasizedSegment padded="very" data-componentid={ componentId }>
            <Heading as="h4">
                Console Branding
            </Heading>
            
            <FormControlLabel
                control={
                    <Switch
                        checked={ isBrandingEnabled }
                        onChange={ handleToggleChange }
                        disabled={ isLoading }
                        color="primary"
                    />
                }
                label={ 
                    isBrandingEnabled
                        ? "Console branding is enabled"
                        : "Console branding is disabled"
                }
            />
            
            { isBrandingEnabled && (
                <>
                    <PaletteIcon fill="#ff7300" /> &nbsp;
                    <Link
                        className="console-branding-link"
                        data-componentid={ `${testId}-console-branding-link` }
                        onClick={ () => {
                            history.push({
                                pathname: AppConstants.getPaths().get("BRANDING"),
                            });
                        } }
                    >
                        Go to Console Branding
                    </Link>
                    <Hint>
                        This will take you to the Console Branding page where you can customize user interfaces of the application.
                    </Hint>
                </>
            ) }
        </EmphasizedSegment>
    );
};

export default ConsoleGeneral; 