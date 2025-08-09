/**
 * Copyright (c) 2023-2024, WSO2 LLC. (https://www.wso2.com).
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

import { AppState } from "@wso2is/admin.core.v1/store";
import { BrandingPreferenceInterface } from "@wso2is/common.branding.v1/models";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import parse from "html-react-parser";
import Mustache from "mustache";
import React, { FunctionComponent, ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import useBrandingPreference from "../../hooks/use-branding-preference";
import { BrandingPreferenceMeta } from "../../meta/branding-preference-meta";

/**
 * Prop-types for the console screen skeleton component.
 */
interface ConsoleScreenSkeletonInterface extends IdentifiableComponentInterface {
    content: string;
    /**
     * Branding preferences object.
     */
    brandingPreference: BrandingPreferenceInterface;
}

/**
 * Console skeleton.
 *
 * @param props - Props injected to the component.
 * @returns Console skeleton as a react component.
 */
export const ConsoleScreenSkeleton: FunctionComponent<ConsoleScreenSkeletonInterface> = (
    props: ConsoleScreenSkeletonInterface
): ReactElement => {
    const { brandingPreference, content, ["data-componentid"]: componentId } = props;

    const systemTheme: string = useSelector((state: AppState) => state.config?.ui?.theme?.name);

    const consoleLogoImage = useMemo(() => {
        return brandingPreference.theme[brandingPreference.theme.activeTheme].images?.logo?.imgURL ??
            BrandingPreferenceMeta.getBrandingPreferenceInternalFallbacks(systemTheme).theme[
                brandingPreference.theme.activeTheme
            ].images?.logo?.imgURL;
    }, [brandingPreference, systemTheme]);

    const consoleLogoTitle = useMemo(() => {
        return brandingPreference.theme[brandingPreference.theme.activeTheme].images?.logo?.title ?? "Console";
    }, [brandingPreference]);

    const welcomeMessage = useMemo(() => {
        return "Welcome to Console";
    }, []);

    return (
        <div className="console-screen-skeleton" data-testid={componentId} style={{ pointerEvents: "none" }}>
            {parse(
                Mustache.render(content, {
                    logoImage: consoleLogoImage,
                    logoTitle: consoleLogoTitle,
                    welcomeMessage: welcomeMessage
                })
            )}
        </div>
    );
};

/**
 * Default props for the component.
 */
ConsoleScreenSkeleton.defaultProps = {
    "data-componentid": "console-screen-skeleton"
}; 