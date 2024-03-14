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

import { IdentityAppsError } from "@wso2is/core/errors";
import { AlertLevels, IdentifiableComponentInterface, TestableComponentInterface } from "@wso2is/core/models";
import { addAlert } from "@wso2is/core/store";
import {
    DocumentationLink,
    GenericIcon,
    Heading,
    LinkButton,
    PrimaryButton,
    useDocumentation,
    useWizardAlert
} from "@wso2is/react-components";
import { ContentLoader } from "@wso2is/react-components/src/components/loader/content-loader";
import isEmpty from "lodash-es/isEmpty";
import React, { FunctionComponent, ReactElement, Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Grid } from "semantic-ui-react";
import { HyprAuthenticationProviderCreateWizardContent } from "./hypr-authentication-provider-create-wizard-content";
import { identityProviderConfig } from "../../../../../extensions/configs";
import { EventPublisher, ModalWithSidePanel } from "../../../../../features/core";
import { TierLimitReachErrorModal } from "../../../../core/components/tier-limit-reach-error-modal";
import { createIdentityProvider } from "../../../api";
import { getIdPIcons } from "../../../configs/ui";
import { IdentityProviderManagementConstants } from "../../../constants";
import { GenericIdentityProviderCreateWizardPropsInterface, IdentityProviderInterface } from "../../../models";

/**
 * Proptypes for the Hypr Authentication Provider Create Wizard.
 */
interface HyprAuthenticationProviderCreateWizardPropsInterface
    extends TestableComponentInterface,
        GenericIdentityProviderCreateWizardPropsInterface,
        IdentifiableComponentInterface {}

/**
 * Proptypes for the Hypr Authentication Wizard Form values.
 */
export interface HyprAuthenticationProviderCreateWizardFormValuesInterface {
    /**
     * Hypr Authenticator name
     */
    name: string;
    /**
     * Hypr Authenticator app ID
     */
    appId: string;
    /**
     * Hypr Authenticator API token
     */
    apiToken: string;
    /**
     * Hypr Authenticator base URL
     */
    baseUrl: string;
}

/**
 * Hypr Authentication Provider Create Wizard Component.
 *
 * @param props - Props injected to the component.
 *
 * @returns React Element
 */
export const HyprAuthenticationProviderCreateWizard: FunctionComponent<HyprAuthenticationProviderCreateWizardPropsInterface> = (
    props: HyprAuthenticationProviderCreateWizardPropsInterface
): ReactElement => {
    const {
        onWizardClose,
        onIDPCreate,
        currentStep,
        title,
        subTitle,
        template,
        ["data-testid"]: testId,
        ["data-componentid"]: componentId
    } = props;

    const dispatch: Dispatch<any> = useDispatch();
    const { t } = useTranslation();
    const { getLink } = useDocumentation();
    const [alert, setAlert, alertComponent] = useWizardAlert();
    const [currentWizardStep, setCurrentWizardStep] = useState<number>(currentStep);
    const [wizStep, setWizStep] = useState<number>(0);
    const [totalStep, setTotalStep] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [openLimitReachedModal, setOpenLimitReachedModal] = useState<boolean>(false);
    const eventPublisher: EventPublisher = EventPublisher.getInstance();

    /**
     * Track wizard steps from wizard component.
     */
    useEffect(() => {
        setCurrentWizardStep(wizStep + 1);
    }, [wizStep]);

    /**
     * Called when modal close event is triggered.
     */
    const handleWizardClose = (): void => {
        // Trigger the close method from props.
        onWizardClose();
    };

    /**
     * Close the limit reached modal.
     */
    const handleLimitReachedModalClose = (): void => {
        setOpenLimitReachedModal(false);
        handleWizardClose();
    };

    /**
     * Callback triggered when the form is submitted.
     *
     * @param values - Form values.
     */
    const onSubmitWizard = (values: HyprAuthenticationProviderCreateWizardFormValuesInterface): void => {
        const identityProvider: IdentityProviderInterface = { ...template.idp };

        identityProvider.name = values.name.toString();
        identityProvider.templateId = template.templateId;
        identityProvider.description = template.description;

        identityProvider.federatedAuthenticators.authenticators[0].properties = [
            {
                key: "appId",
                value: values.appId.toString()
            },
            {
                key: "apiToken",
                value: values.apiToken.toString()
            },
            {
                key: "baseUrl",
                value: values.baseUrl.toString()
            }
        ];

        identityProvider.image = "assets/images/logos/hypr.svg";

        createNewIdentityProvider(identityProvider);
    };

    /**
     * Creates a new identity provider.
     *
     * @param identityProvider - Identity provider object.
     */
    const createNewIdentityProvider = (identityProvider: IdentityProviderInterface): void => {
        setIsSubmitting(true);
        createIdentityProvider(identityProvider)
            .then((response: any) => {
                eventPublisher.publish("connections-finish-adding-connection", {
                    type: componentId
                });

                dispatch(
                    addAlert({
                        description: t(
                            "idp:develop.features.authenticationProvider.notifications.addIDP." + "success.description"
                        ),
                        level: AlertLevels.SUCCESS,
                        message: t(
                            "idp:develop.features.authenticationProvider.notifications.addIDP." + "success.message"
                        )
                    })
                );

                // The created resource's id is sent as a location header.
                // If that's available, navigate to the edit page.
                if (!isEmpty(response.headers.location)) {
                    const location: any = response.headers.location;
                    const createdIdpID: any = location.substring(location.lastIndexOf("/") + 1);

                    onIDPCreate(createdIdpID);

                    return;
                }

                // Since the location header is not present, trigger callback without the id.
                onIDPCreate();
            })
            .catch((error: any) => {
                const identityAppsError: IdentityAppsError = identityProviderConfig.useNewConnectionsView
                    ? IdentityProviderManagementConstants.ERROR_CREATE_LIMIT_REACHED
                    : IdentityProviderManagementConstants.ERROR_CREATE_LIMIT_REACHED_IDP;

                if (error.response.status === 403 && error?.response?.data?.code === identityAppsError.getErrorCode()) {
                    setOpenLimitReachedModal(true);

                    return;
                }

                if (error.response && error.response.data && error.response.data.description) {
                    setAlert({
                        description: t(
                            "idp:develop.features.authenticationProvider.notifications." + "addIDP.error.description",
                            { description: error.response.data.description }
                        ),
                        level: AlertLevels.ERROR,
                        message: t(
                            "idp:develop.features.authenticationProvider.notifications." + "addIDP.error.message"
                        )
                    });

                    return;
                }

                setAlert({
                    description: t(
                        "idp:develop.features.authenticationProvider.notifications.addIDP." + "genericError.description"
                    ),
                    level: AlertLevels.ERROR,
                    message: t(
                        "idp:develop.features.authenticationProvider.notifications.addIDP." + "genericError.message"
                    )
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    /**
     * Resolve the step wizard actions.
     *
     * @returns React Element
     */
    const resolveStepActions = (): ReactElement => {
        return (
            <Grid>
                <Grid.Row column={1}>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <LinkButton
                            floated="left"
                            onClick={handleWizardClose}
                            data-testid={`${testId}-modal-cancel-button`}
                        >
                            {t("idp:cancel")}
                        </LinkButton>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        {currentWizardStep !== totalStep ? (
                            <PrimaryButton
                                floated="right"
                                onClick={() => {
                                    submitForm();
                                }}
                                data-testid={`${testId}-modal-finish-button`}
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {t("idp:develop.features.authenticationProvider.wizards.buttons.next")}
                            </PrimaryButton>
                        ) : (
                            <>
                                <PrimaryButton
                                    floated="right"
                                    onClick={() => {
                                        submitForm();
                                    }}
                                    data-testid={`${testId}-modal-finish-button`}
                                    loading={isSubmitting}
                                    disabled={isSubmitting}
                                >
                                    {t("idp:develop.features.authenticationProvider.wizards.buttons.finish")}
                                </PrimaryButton>
                            </>
                        )}
                        {currentWizardStep > 1 && (
                            <LinkButton
                                floated="right"
                                onClick={() => {
                                    triggerPreviousForm();
                                }}
                                data-testid={`${testId}-modal-previous-button`}
                            >
                                {t("idp:develop.features.authenticationProvider.wizards.buttons.previous")}
                            </LinkButton>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    };

    /**
     * Renders the help panel containing wizard help.
     *
     * @returns React Element
     */
    const renderHelpPanel = (): ReactElement => {
        // Return null when `showHelpPanel` is false or `wizardHelp` is not defined in `selectedTemplate` object.
        if (!template?.content?.wizardHelp || currentWizardStep === 0) {
            return null;
        }

        const { wizardHelp: WizardHelp } = template?.content;

        return (
            <ModalWithSidePanel.SidePanel>
                <ModalWithSidePanel.Header className="wizard-header help-panel-header muted">
                    <div className="help-panel-header-text">
                        {t("idp:develop.features.authenticationProvider" + ".templates.microsoft.wizardHelp.heading")}
                    </div>
                </ModalWithSidePanel.Header>
                <ModalWithSidePanel.Content>
                    <Suspense fallback={<ContentLoader />}>
                        <WizardHelp />
                    </Suspense>
                </ModalWithSidePanel.Content>
            </ModalWithSidePanel.SidePanel>
        );
    };

    /**
     * Closure to submit form.
     */
    let submitForm: () => void;

    /**
     * Closure to trigger previous form.
     */
    let triggerPreviousForm: () => void;

    return (
        <>
            {openLimitReachedModal && (
                <TierLimitReachErrorModal
                    actionLabel={t(
                        "idp:develop.features.idp.notifications." + "tierLimitReachedError.emptyPlaceholder.action"
                    )}
                    handleModalClose={handleLimitReachedModalClose}
                    header={t("idp:develop.features.idp.notifications.tierLimitReachedError.heading")}
                    description={t(
                        "idp:develop.features.idp.notifications." + "tierLimitReachedError.emptyPlaceholder.subtitles"
                    )}
                    message={t(
                        "idp:develop.features.idp.notifications." + "tierLimitReachedError.emptyPlaceholder.title"
                    )}
                    openModal={openLimitReachedModal}
                />
            )}
            <ModalWithSidePanel
                open={!openLimitReachedModal}
                className="wizard identity-provider-create-wizard"
                dimmer="blurring"
                onClose={handleWizardClose}
                closeOnDimmerClick={false}
                closeOnEscape
                data-testid={`${testId}-modal`}
            >
                <ModalWithSidePanel.MainPanel>
                    <ModalWithSidePanel.Header className="wizard-header" data-testid={`${testId}-modal-header`}>
                        <div className="display-flex">
                            <GenericIcon
                                icon={getIdPIcons().hypr}
                                size="mini"
                                transparent
                                spaced="right"
                                data-testid={`${testId}-image`}
                            />
                            <div className="ml-1">
                                {title}
                                {subTitle && (
                                    <Heading as="h6">
                                        {subTitle}
                                        <DocumentationLink
                                            link={getLink("develop.connections.newConnection.hypr.learnMore")}
                                        >
                                            {t("idp:learnMore")}
                                        </DocumentationLink>
                                    </Heading>
                                )}
                            </div>
                        </div>
                    </ModalWithSidePanel.Header>
                    <ModalWithSidePanel.Content className="content-container" data-testid={`${testId}-modal-content`}>
                        {alert && alertComponent}
                        <HyprAuthenticationProviderCreateWizardContent
                            onSubmit={onSubmitWizard}
                            triggerSubmission={(submitFunctionCb: () => void) => {
                                submitForm = submitFunctionCb;
                            }}
                            triggerPrevious={(previousFunctionCb: () => void) => {
                                triggerPreviousForm = previousFunctionCb;
                            }}
                            changePageNumber={(step: number) => setWizStep(step)}
                            setTotalPage={(pageNumber: number) => setTotalStep(pageNumber)}
                            template={template}
                        />
                    </ModalWithSidePanel.Content>
                    <ModalWithSidePanel.Actions data-testid={`${testId}-modal-actions`}>
                        {resolveStepActions()}
                    </ModalWithSidePanel.Actions>
                </ModalWithSidePanel.MainPanel>
                {renderHelpPanel()}
            </ModalWithSidePanel>
        </>
    );
};

/**
 * Default props for the HYPR Authentication Provider Create Wizard.
 */
HyprAuthenticationProviderCreateWizard.defaultProps = {
    currentStep: 1,
    "data-componentid": "hypr-idp",
    "data-testid": "hypr-idp-create-wizard"
};
