/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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
import { AccessControlConstants, Show } from "@wso2is/access-control";
import { AlertLevels, TestableComponentInterface } from "@wso2is/core/models";
import { addAlert } from "@wso2is/core/store";
import {
    ConfirmationModal,
    ContentLoader,
    EmphasizedSegment,
    EmptyPlaceholder,
    Heading,
    PrimaryButton,
    SegmentedAccordionTitleActionInterface
} from "@wso2is/react-components";
import { AxiosError } from "axios";
import React, { FormEvent, FunctionComponent, MouseEvent, ReactElement, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AccordionTitleProps, CheckboxProps, Divider, Grid, Icon, Segment } from "semantic-ui-react";
import { OutboundProvisioningRoles } from "./outbound-provisioning";
import { AuthenticatorAccordion, getEmptyPlaceholderIllustrations } from "../../../core";
import { RootOnlyComponent } from "../../../organizations/components";
import {
    getOutboundProvisioningConnector,
    getOutboundProvisioningConnectorMetadata,
    updateOutboundProvisioningConnector,
    updateOutboundProvisioningConnectors
} from "../../api";
import {
    AuthenticatorSettingsFormModes,
    FederatedAuthenticatorInterface,
    IdentityProviderInterface,
    OutboundProvisioningConnectorInterface,
    OutboundProvisioningConnectorMetaInterface,
    OutboundProvisioningConnectorWithMetaInterface,
    OutboundProvisioningConnectorsInterface
} from "../../models";
import { OutboundProvisioningConnectorFormFactory } from "../forms";
import {
    handleGetOutboundProvisioningConnectorMetadataError,
    handleUpdateOutboundProvisioningConnectorError
} from "../utils";
import { OutboundProvisioningConnectorCreateWizard } from "../wizards/outbound-provisioning-connector-create-wizard";

/**
 * Proptypes for the provisioning settings component.
 */
interface ProvisioningSettingsPropsInterface extends TestableComponentInterface {
    /**
     * Currently editing idp.
     */
    identityProvider: IdentityProviderInterface;

    /**
     * Outbound connector details of the IDP
     */
    outboundConnectors: OutboundProvisioningConnectorsInterface;
    /**
     * Is the idp info request loading.
     */
    isLoading?: boolean;
    /**
     * Callback to update the idp details.
     */
    onUpdate: (id: string) => void;
    /**
     * Specifies if the component should only be read-only.
     */
    isReadOnly: boolean;
    /**
     * Loading Component.
     */
    loader: () => ReactElement;
}

/**
 * Identity Provider provisioning settings component.
 *
 * @param props - Props injected to the component.
 * @returns Outbound provisioning settings component.
 */
export const OutboundProvisioningSettings: FunctionComponent<ProvisioningSettingsPropsInterface> = (
    props: ProvisioningSettingsPropsInterface
): ReactElement => {
    const { identityProvider, outboundConnectors, isLoading, onUpdate, isReadOnly, ["data-testid"]: testId } = props;

    const dispatch: Dispatch = useDispatch();
    const { t } = useTranslation();

    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState<boolean>(false);
    const [showWizard, setShowWizard] = useState<boolean>(false);
    const [availableConnectors, setAvailableConnectors] = useState<OutboundProvisioningConnectorWithMetaInterface[]>(
        []
    );
    const [deletingConnector, setDeletingConnector] = useState<OutboundProvisioningConnectorWithMetaInterface>(
        undefined
    );
    const [accordionActiveIndexes, setAccordionActiveIndexes] = useState<number[]>([]);

    /**
     * Fetch available connectors for the identity provider.
     */
    useEffect(() => {
        setAvailableConnectors([]);
        fetchConnectors().then((response: OutboundProvisioningConnectorWithMetaInterface[]) => {
            setAvailableConnectors(response);
        });
    }, [identityProvider]);

    /**
     * Fetch data and metadata of a given connector id and return a promise.
     *
     * @param connectorId - ID of the connector.
     */
    const fetchConnector = (connectorId: string) => {
        return new Promise((resolve: (value: unknown) => void) => {
            getOutboundProvisioningConnector(identityProvider.id, connectorId)
                .then((data: OutboundProvisioningConnectorInterface) => {
                    getOutboundProvisioningConnectorMetadata(connectorId)
                        .then((meta: OutboundProvisioningConnectorMetaInterface) => {
                            resolve({
                                data: data,
                                id: connectorId,
                                meta: meta
                            });
                        })
                        .catch((error: AxiosError) => {
                            handleGetOutboundProvisioningConnectorMetadataError(error);
                        });
                })
                .catch((error: AxiosError) => {
                    if (error.response && error.response.data && error.response.data.description) {
                        dispatch(
                            addAlert({
                                description: t(
                                    "idp:develop.features.authenticationProvider.notifications." +
                                        "getOutboundProvisioningConnector.error.description",
                                    { description: error.response.data.description }
                                ),
                                level: AlertLevels.ERROR,
                                message: t(
                                    "idp:develop.features.authenticationProvider.notifications." +
                                        "getOutboundProvisioningConnector.error.message"
                                )
                            })
                        );

                        return;
                    }

                    dispatch(
                        addAlert({
                            description: t(
                                "idp:develop.features.authenticationProvider.notifications." +
                                    "getOutboundProvisioningConnector.genericError.description"
                            ),
                            level: AlertLevels.ERROR,
                            message: t(
                                "idp:develop.features.authenticationProvider.notifications." +
                                    "getOutboundProvisioningConnector.genericError.message"
                            )
                        })
                    );
                });
        });
    };

    /**
     * Asynchronous function to Loop through outbound provisioning connectors, fetch data and metadata and
     * return an array of available connectors.
     *
     * @returns An array of available connectors.
     */
    async function fetchConnectors() {
        const connectors: OutboundProvisioningConnectorWithMetaInterface[] = [];

        for (const connector of identityProvider.provisioning.outboundConnectors.connectors) {
            connectors.push(await fetchConnector(connector.connectorId));
        }

        return connectors;
    }

    /**
     * Handles the connector config form submit action.
     *
     * @param values - Form values.
     */
    const handleConnectorConfigFormSubmit = (values: OutboundProvisioningConnectorInterface): void => {
        updateOutboundProvisioningConnector(identityProvider.id, values)
            .then(() => {
                dispatch(
                    addAlert({
                        description: t(
                            "idp:develop.features.authenticationProvider." +
                                "notifications.updateOutboundProvisioningConnector." +
                                "success.description"
                        ),
                        level: AlertLevels.SUCCESS,
                        message: t(
                            "idp:develop.features.authenticationProvider." +
                                "notifications.updateOutboundProvisioningConnector." +
                                "success.message"
                        )
                    })
                );

                onUpdate(identityProvider.id);
            })
            .catch((error: AxiosError) => {
                handleUpdateOutboundProvisioningConnectorError(error);
            });
    };

    /**
     * Handles the outbound provisioning connector deletion.
     */
    const handleDeleteConnector = (deletingConnector: OutboundProvisioningConnectorWithMetaInterface): void => {
        const EMPTY_STRING: string = "";
        const connectorList: FederatedAuthenticatorInterface[] = [];

        availableConnectors.map((connector: OutboundProvisioningConnectorWithMetaInterface) => {
            if (connector.id !== deletingConnector.id) {
                connectorList.push(connector.data);
            }
        });

        const data: {
            connectors: FederatedAuthenticatorInterface[];
            defaultConnectorId: string;
        } = {
            connectors: connectorList,
            defaultConnectorId: EMPTY_STRING
        };

        updateOutboundProvisioningConnectors(data, identityProvider.id)
            .then(() => {
                dispatch(
                    addAlert({
                        description: t(
                            "idp:develop.features.authenticationProvider.notifications." +
                                "updateOutboundProvisioningConnectors" +
                                ".success.description"
                        ),
                        level: AlertLevels.SUCCESS,
                        message: t(
                            "idp:develop.features.authenticationProvider." +
                                "notifications.updateOutboundProvisioningConnectors" +
                                ".success.message"
                        )
                    })
                );

                onUpdate(identityProvider.id);
            })
            .catch((error: AxiosError) => {
                if (error.response && error.response.data && error.response.data.description) {
                    dispatch(
                        addAlert({
                            description: error.response.data.description,
                            level: AlertLevels.ERROR,
                            message: t(
                                "idp:develop.features.authenticationProvider.notifications." +
                                    "updateOutboundProvisioningConnectors" +
                                    ".error.message"
                            )
                        })
                    );

                    return;
                }

                dispatch(
                    addAlert({
                        description: t(
                            "idp:develop.features.authenticationProvider.notifications." +
                                "updateOutboundProvisioningConnectors" +
                                ".genericError.description"
                        ),
                        level: AlertLevels.ERROR,
                        message: t(
                            "idp:develop.features.authenticationProvider." +
                                "notifications.updateOutboundProvisioningConnectors" +
                                ".genericError.message"
                        )
                    })
                );
            });

        setDeletingConnector(undefined);
        setShowDeleteConfirmationModal(false);
    };

    /**
     * Handles connector delete button on click action.
     *
     * @param e - Click event.
     * @param id - Id of the connector.
     */
    const handleAuthenticatorDeleteOnClick = (e: React.MouseEvent<HTMLDivElement>, id: string): void => {
        if (!id) {
            return;
        }

        const deletingConnector: OutboundProvisioningConnectorWithMetaInterface = availableConnectors.find(
            (connector: OutboundProvisioningConnectorWithMetaInterface) => connector.id == id
        );

        if (!deletingConnector) {
            return;
        }

        setDeletingConnector(deletingConnector);
        setShowDeleteConfirmationModal(true);
    };

    /**
     * Handles connector enable toggle.
     *
     * @param e - Event.
     * @param data - Checkbox data.
     * @param id - Id of the connector.
     */
    const handleConnectorEnableToggle = (e: FormEvent<HTMLInputElement>, data: CheckboxProps, id: string): void => {
        const connector: FederatedAuthenticatorInterface = availableConnectors.find(
            (connector: OutboundProvisioningConnectorWithMetaInterface) => connector.id === id
        ).data;

        connector.isEnabled = data.checked;
        handleConnectorConfigFormSubmit(connector);
    };

    const createAccordionActions = (
        connector: OutboundProvisioningConnectorWithMetaInterface
    ): SegmentedAccordionTitleActionInterface[] => {
        return [
            // Toggle Switch which enables/disables the connector state.
            {
                defaultChecked: connector.data?.isEnabled,
                label: t(
                    connector.data?.isEnabled
                        ? "idp:develop.features.authenticationProvider.forms.outboundConnectorAccordion.enable.0"
                        : "idp:develop.features.authenticationProvider.forms.outboundConnectorAccordion.enable.1"
                ),
                onChange: handleConnectorEnableToggle,
                type: "toggle"
            }
        ];
    };

    /**
     * Handles accordion title click.
     *
     * @param e - Click event.
     * @param data - Clicked title.
     */
    const handleAccordionOnClick = (e: MouseEvent<HTMLDivElement>, data: AccordionTitleProps): void => {
        if (!data) {
            return;
        }

        const newIndexes: number[] = [...accordionActiveIndexes];

        if (newIndexes.includes(data.accordionIndex)) {
            const removingIndex: number = newIndexes.indexOf(data.accordionIndex);

            newIndexes.splice(removingIndex, 1);
        } else {
            newIndexes.push(data.accordionIndex);
        }

        setAccordionActiveIndexes(newIndexes);
    };

    return (
        <EmphasizedSegment>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Heading as="h4">OutBound Provisioning Connectors</Heading>
                </Grid.Column>
            </Grid.Row>

            {outboundConnectors.connectors.length > 0 ? (
                !isLoading ? (
                    <div className="default-provisioning-connector-section">
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Show when={AccessControlConstants.IDP_EDIT}>
                                        <PrimaryButton
                                            floated="right"
                                            onClick={() => setShowWizard(true)}
                                            data-testid={`${testId}-add-connector-button`}
                                        >
                                            <Icon name="add" />
                                            {t("idp:develop.features.authenticationProvider." + "buttons.addConnector")}
                                        </PrimaryButton>
                                    </Show>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    {availableConnectors.map(
                                        (connector: OutboundProvisioningConnectorWithMetaInterface, index: number) => {
                                            return (
                                                <AuthenticatorAccordion
                                                    key={index}
                                                    globalActions={[
                                                        {
                                                            disabled: connector.data?.isEnabled,
                                                            icon: "trash alternate",
                                                            onClick: handleAuthenticatorDeleteOnClick,
                                                            type: "icon"
                                                        }
                                                    ]}
                                                    authenticators={[
                                                        {
                                                            actions: createAccordionActions(connector),
                                                            content: (
                                                                <OutboundProvisioningConnectorFormFactory
                                                                    mode={AuthenticatorSettingsFormModes.EDIT}
                                                                    metadata={connector.meta}
                                                                    initialValues={connector.data}
                                                                    onSubmit={handleConnectorConfigFormSubmit}
                                                                    type={connector.meta?.name}
                                                                    data-testid={`${testId}-${connector.meta?.name}-content`}
                                                                    isReadOnly={isReadOnly}
                                                                />
                                                            ),
                                                            id: connector?.id,
                                                            title: connector?.meta?.displayName
                                                        }
                                                    ]}
                                                    data-testid={`${testId}-accordion`}
                                                    accordionActiveIndexes={accordionActiveIndexes}
                                                    accordionIndex={index}
                                                    handleAccordionOnClick={handleAccordionOnClick}
                                                />
                                            );
                                        }
                                    )}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                ) : (
                    <ContentLoader />
                )
            ) : (
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Divider hidden />
                            <Segment>
                                <EmptyPlaceholder
                                    title={t(
                                        "idp:develop.features.authenticationProvider." +
                                            "placeHolders.emptyConnectorList." +
                                            "title"
                                    )}
                                    image={getEmptyPlaceholderIllustrations().emptyList}
                                    subtitle={[
                                        t(
                                            "idp:develop.features.authenticationProvider." +
                                                "placeHolders.emptyConnectorList." +
                                                "subtitles.0"
                                        ),
                                        t(
                                            "idp:develop.features.authenticationProvider." +
                                                "placeHolders.emptyConnectorList." +
                                                "subtitles.1"
                                        )
                                    ]}
                                    imageSize="tiny"
                                    action={
                                        <Show when={AccessControlConstants.IDP_EDIT}>
                                            <PrimaryButton
                                                onClick={() => setShowWizard(true)}
                                                data-testid={`${testId}-add-connector-button`}
                                            >
                                                <Icon name="add" />
                                                {t(
                                                    "idp:develop.features.authenticationProvider." +
                                                        "buttons.addConnector"
                                                )}
                                            </PrimaryButton>
                                        </Show>
                                    }
                                    data-testid={`${testId}-empty-placeholder`}
                                />
                            </Segment>
                            <Divider hidden />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
            {deletingConnector && (
                <ConfirmationModal
                    onClose={(): void => setShowDeleteConfirmationModal(false)}
                    type="negative"
                    open={showDeleteConfirmationModal}
                    assertion={deletingConnector?.meta.name}
                    assertionHint={
                        <p>
                            <Trans
                                i18nKey={
                                    "idp:develop.features.authenticationProvider." +
                                    "confirmations.deleteConnector.assertionHint"
                                }
                                tOptions={{ name: deletingConnector?.meta.name }}
                            >
                                Please type <strong>{deletingConnector?.meta.name}</strong> to confirm.
                            </Trans>
                        </p>
                    }
                    assertionType="input"
                    primaryAction={t("idp:confirm")}
                    secondaryAction={t("idp:cancel")}
                    onSecondaryActionClick={(): void => setShowDeleteConfirmationModal(false)}
                    onPrimaryActionClick={(): void => handleDeleteConnector(deletingConnector)}
                    data-testid={`${testId}-authenticator-delete-confirmation`}
                    closeOnDimmerClick={false}
                >
                    <ConfirmationModal.Header data-testid={`${testId}-authenticator-delete-confirmation`}>
                        {t("idp:develop.features.authenticationProvider.confirmations." + "deleteConnector.header")}
                    </ConfirmationModal.Header>
                    <ConfirmationModal.Message
                        attached
                        negative
                        data-testid={`${testId}-authenticator-delete-confirmation`}
                    >
                        {t("idp:develop.features.authenticationProvider.confirmations." + "deleteConnector.message")}
                    </ConfirmationModal.Message>
                    <ConfirmationModal.Content data-testid={`${testId}-authenticator-delete-confirmation`}>
                        {t("idp:develop.features.authenticationProvider.confirmations." + "deleteConnector.content")}
                    </ConfirmationModal.Content>
                </ConfirmationModal>
            )}
            {showWizard && (
                <OutboundProvisioningConnectorCreateWizard
                    closeWizard={() => setShowWizard(false)}
                    updateIdentityProvider={onUpdate}
                    identityProvider={identityProvider}
                    onUpdate={onUpdate}
                    data-testid={`${testId}-connector-create-wizard`}
                />
            )}

            {identityProvider?.roles && !isLoading ? (
                <RootOnlyComponent>
                    <OutboundProvisioningRoles
                        idpRoles={identityProvider?.roles}
                        idpId={identityProvider?.id}
                        data-testid={`${testId}-roles`}
                        isReadOnly={isReadOnly}
                        onUpdate={onUpdate}
                    />
                </RootOnlyComponent>
            ) : (
                <ContentLoader />
            )}
        </EmphasizedSegment>
    );
};

/**
 * Default proptypes for the IDP outbound provisioning settings component.
 */
OutboundProvisioningSettings.defaultProps = {
    "data-testid": "idp-edit-outbound-provisioning-settings"
};
