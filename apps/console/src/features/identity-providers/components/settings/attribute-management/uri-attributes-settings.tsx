/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com).
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

import { TestableComponentInterface } from "@wso2is/core/models";
import { Code, Heading, Hint } from "@wso2is/react-components";
import find from "lodash-es/find";
import React, { FunctionComponent, ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Divider, DropdownProps, Form, Grid } from "semantic-ui-react";
import { DropdownOptionsInterface } from "../attribute-settings";

interface AdvanceAttributeSettingsPropsInterface extends TestableComponentInterface {
    dropDownOptions: DropdownOptionsInterface[];
    initialSubjectUri: string;
    initialRoleUri: string;
    /**
     * Controls whether role claim mapping should be rendered or not.
     * If you only want to get subject attribute then you should make
     * this `false`.
     */
    claimMappingOn: boolean;
    /**
     * Specifies if the IdP Attribute Mappings are available.
     */
    isMappingEmpty: boolean;
    updateRole: (roleUri: string) => void;
    updateSubject: (subjectUri: string) => void;
    roleError?: boolean;
    subjectError?: boolean;
    /**
     * Specifies if the component should only be read-only.
     */
    isReadOnly: boolean;
    /**
     * Is the IdP type SAML
     */
    isSaml: boolean;
}

export const UriAttributesSettings: FunctionComponent<AdvanceAttributeSettingsPropsInterface> = (
    props: AdvanceAttributeSettingsPropsInterface
): ReactElement => {
    const {
        dropDownOptions,
        initialSubjectUri,
        initialRoleUri,
        claimMappingOn,
        updateRole,
        updateSubject,
        roleError,
        subjectError,
        isReadOnly,
        isMappingEmpty,
        isSaml,
        ["data-testid"]: testId
    } = props;

    const { t } = useTranslation();

    const getValidatedInitialValue = (initialValue: string) => {
        return find(dropDownOptions, (option: DropdownOptionsInterface) => option?.value === initialValue) !== undefined
            ? initialValue
            : "";
    };

    return (
        <>
            <Grid.Row>
                <Grid.Column>
                    <Heading as="h4">
                        {t(
                            "idp:develop.features.authenticationProvider.forms.uriAttributeSettings." +
                                "subject.heading"
                        )}
                    </Heading>
                    <Form>
                        <Form.Select
                            fluid
                            options={dropDownOptions.concat({
                                key: "default_subject",
                                text: t(
                                    "idp:develop.features.authenticationProvider.forms." +
                                        "uriAttributeSettings.subject." +
                                        "placeHolder"
                                ),
                                value: ""
                            } as DropdownOptionsInterface)}
                            value={getValidatedInitialValue(initialSubjectUri)}
                            placeholder={t(
                                "idp:develop.features.authenticationProvider.forms." +
                                    "uriAttributeSettings.subject." +
                                    "placeHolder"
                            )}
                            onChange={(_event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
                                updateSubject(data.value.toString());
                            }}
                            search
                            fullTextSearch={false}
                            label={t(
                                "idp:develop.features.authenticationProvider.forms." +
                                    "uriAttributeSettings.subject.label"
                            )}
                            data-testid={`${testId}-form-element-subject`}
                            error={
                                subjectError && {
                                    content: t(
                                        "idp:develop.features.authenticationProvider" +
                                            ".forms.uriAttributeSettings.subject." +
                                            "validation.empty"
                                    ),
                                    pointing: "above"
                                }
                            }
                            readOnly={isReadOnly}
                            disabled={isMappingEmpty}
                        />
                    </Form>
                    <Hint>
                        {isSaml ? (
                            <Trans
                                i18nKey={
                                    "idp:console:develop.features.authenticationProvider.forms" +
                                    ".uriAttributeSettings.subject.hint"
                                }
                            >
                                The attribute that identifies the user at the enterprise identity provider. When
                                attributes are configured based on the authentication response of this IdP connection,
                                you can use one of them as the subject. Otherwise, the default{" "}
                                <Code>saml2:Subject</Code> in the SAML response is used as the subject attribute.
                            </Trans>
                        ) : (
                            <Trans
                                i18nKey={
                                    "idp:console:develop.features.idp.forms.uriAttributeSettings" + ".subject.hint"
                                }
                            >
                                Specifies the attribute that identifies the user at the Connection.
                            </Trans>
                        )}
                    </Hint>
                </Grid.Column>
            </Grid.Row>
            <Divider hidden />
            {claimMappingOn && (
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Heading as="h4">
                            {t(
                                "idp:develop.features.authenticationProvider.forms.uriAttributeSettings." +
                                    "group.heading"
                            )}
                        </Heading>
                        <Form>
                            <Form.Select
                                fluid
                                options={dropDownOptions.concat({
                                    key: "default_subject",
                                    text: t(
                                        "idp:develop.features.authenticationProvider" +
                                            ".forms.uriAttributeSettings.group.placeHolder"
                                    ),
                                    value: ""
                                } as DropdownOptionsInterface)}
                                value={getValidatedInitialValue(initialRoleUri)}
                                placeholder={t(
                                    "idp:develop.features.authenticationProvider" +
                                        ".forms.uriAttributeSettings.group.placeHolder"
                                )}
                                onChange={(_event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
                                    updateRole(data.value.toString());
                                }}
                                search
                                fullTextSearch={false}
                                label={t(
                                    "idp:develop.features.authenticationProvider.forms." +
                                        "forms.uriAttributeSettings.group.label"
                                )}
                                data-testid={`${testId}-form-element-role`}
                                error={
                                    roleError && {
                                        content: t(
                                            "idp:develop.features.authenticationProvider" +
                                                ".forms.uriAttributeSettings.group.validation.empty"
                                        ),
                                        pointing: "above"
                                    }
                                }
                                readOnly={isReadOnly}
                            />
                        </Form>
                        <Hint>
                            {t(
                                "idp:develop.features.authenticationProvider." + "forms.uriAttributeSettings.group.hint"
                            )}
                        </Hint>
                    </Grid.Column>
                </Grid.Row>
            )}
        </>
    );
};

/**
 * Default proptypes for the IDP uri attribute settings component.
 */
UriAttributesSettings.defaultProps = {
    "data-testid": "idp-edit-attribute-settings-uri-attribute-settings"
};
