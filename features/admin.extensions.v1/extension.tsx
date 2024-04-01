/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import { EmptyPlaceholder, ErrorBoundary  } from "@wso2is/react-components";
import React, { ReactElement, Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Placeholder } from "semantic-ui-react";
import { ExtensionsManager } from "./extensions-manager";
import { AppUtils, getEmptyPlaceholderIllustrations } from "../admin-core-v1";

/**
 * Extension Interface.
 *
 */
interface ExtensionInterface {
    section: "feedback-button" | "tenant-dropdown";
    type: "component";
}

/**
 * Extended Component.
 *
 * @param props - Props injected to the component.
 * @returns component placeholder.
 */
export const ComponentPlaceholder = (props: ExtensionInterface): ReactElement => {

    const { section, type } = props;

    const { t } = useTranslation();

    const [ Component, setComponent ] = useState<JSX.Element|any>(null);

    const fragment: any = ExtensionsManager.getConfig()?.sections[ type + "s" ]?.[ section ];

    useEffect(() => {

        if (Component || !fragment) {
            return;
        }

        setComponent(lazy(() => import(`${fragment}`)));
    }, [ fragment ]);

    return (
        <ErrorBoundary
            onChunkLoadError={ AppUtils.onChunkLoadError }
            fallback={ (
                <EmptyPlaceholder
                    image={ getEmptyPlaceholderIllustrations().genericError }
                    imageSize="tiny"
                    subtitle={ [
                        t("console:common.placeholders.genericError.subtitles.0"),
                        t("console:common.placeholders.genericError.subtitles.1")
                    ] }
                    title={ t("console:common.placeholders.genericError.title") }
                />
            ) }
        >
            <Suspense
                fallback={ (
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                ) }>
                {
                    Component && <Component />
                }
            </Suspense>
        </ErrorBoundary>
    );
};
