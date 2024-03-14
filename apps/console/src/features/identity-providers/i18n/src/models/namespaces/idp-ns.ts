/**
 * Copyright (c) 2021-2024, WSO2 LLC. (https://www.wso2.com).
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDPNS {
    console: {
        applicationRoles: {
            assign: string;
            assignGroupWizard: {
                heading: string;
                subHeading: string;
            };
            authenticatorGroups: {
                goToConnections: string;
                groupsList: {
                    assignGroups: string;
                    notifications: {
                        fetchAssignedGroups: {
                            error?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                            genericError?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                            success?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                        };
                        updateAssignedGroups: {
                            error?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                            genericError?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                            success?: {
                                message: string;
                                description: string;
                                genericMessage?: string;
                            };
                        };
                    };
                };
                hint: string;
                placeholder: {
                    title: string;
                    subTitle: {
                        0: string;
                        1: string;
                    };
                };
            };
            connectorGroups: {
                placeholder: {
                    title: string;
                    subTitle: {
                        0: string;
                        1: string;
                    };
                };
            };
            heading: string;
            subHeading: string;
            roleGroups: {
                assignGroup: string;
                searchGroup: string;
                placeholder: {
                    title: string;
                    subTitle: {
                        0: string;
                        1: string;
                    };
                };
                notifications: {
                    addGroups: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                    fetchGroups: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                };
                confirmation: {
                    deleteRole: {
                        message: string;
                        content: string;
                    };
                };
            };
            roleList: {
                placeholder: {
                    title: string;
                    subTitle: {
                        0: string;
                        1: string;
                    };
                };
            };
            roleMapping: {
                heading: string;
                subHeading: string;
                notifications: {
                    sharedApplication: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                    updateRole: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                };
            };
            roles: {
                heading: string;
                subHeading: string;
                goBackToRoles: string;
                orgRoles: {
                    heading: string;
                    subHeading: string;
                };
            };
            searchApplication: string;
        };
        identityProviderGroups: {
            claimConfigs: {
                groupAttributeLabel: string;
                groupAttributeHint: string;
                groupAttributePlaceholder: string;
                groupAttributeMessage1: string;
                groupAttributeMessage2: string;
                groupAttributeMessageOIDC: string;
                groupAttributeMessageSAML: string;
                notifications: {
                    fetchConfigs: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                };
            };
            createGroupWizard: {
                groupNameLabel: string;
                groupNamePlaceHolder: string;
                groupNameHint: string;
                subHeading: string;
                notifications: {
                    createIdentityProviderGroup: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                    duplicateGroupError: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                };
            };
            groupsList: {
                confirmation: {
                    deleteGroup: {
                        message: string;
                        content: string;
                    };
                };
                newGroup: string;
                noGroupsAvailable: string;
                notifications: {
                    fetchGroups: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                    deleteGroup: {
                        error?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        genericError?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                        success?: {
                            message: string;
                            description: string;
                            genericMessage?: string;
                        };
                    };
                };
                searchByName: string;
            };
        };
    };
    develop: {
        emailProviders: {
            configureEmailTemplates: string;
            heading: string;
            subHeading: string;
            description: string;
            note: string;
            info: string;
            updateButton: string;
            sendTestMailButton: string;
            goBack: string;
            confirmationModal: {
                header: string;
                message: string;
                content: string;
                assertionHint: string;
            };
            dangerZoneGroup: {
                header: string;
                revertConfig: {
                    heading: string;
                    subHeading: string;
                    actionTitle: string;
                };
            };
            form: {
                smtpServerHost: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                smtpPort: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                fromAddress: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                replyToAddress: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                userName: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                password: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                displayName: {
                    label: string;
                    placeholder: string;
                    hint: string;
                };
                validations: {
                    required: string;
                    portInvalid: string;
                    emailInvalid: string;
                };
            };
            notifications: {
                getConfiguration: {
                    error: {
                        description: string;
                        message: string;
                    };
                };
                deleteConfiguration: {
                    success: {
                        description: string;
                        message: string;
                    };
                    error: {
                        description: string;
                        message: string;
                    };
                };
                updateConfiguration: {
                    success: {
                        description: string;
                        message: string;
                    };
                    error: {
                        description: string;
                        message: string;
                    };
                };
            };
        };
        features: {
            applications: {
                addWizard: {
                    steps: {
                        generalSettings: {
                            heading: string;
                        };
                        protocolConfig: {
                            heading: string;
                        };
                        protocolSelection: {
                            heading: string;
                        };
                        summary: {
                            heading: string;
                            sections: {
                                accessURL: {
                                    heading: string;
                                };
                                applicationQualifier: {
                                    heading: string;
                                };
                                assertionURLs: {
                                    heading: string;
                                };
                                audience: {
                                    heading: string;
                                };
                                callbackURLs: {
                                    heading: string;
                                };
                                certificateAlias: {
                                    heading: string;
                                };
                                discoverable: {
                                    heading: string;
                                };
                                grantType: {
                                    heading: string;
                                };
                                issuer: {
                                    heading: string;
                                };
                                metaFile: {
                                    heading: string;
                                };
                                metadataURL: {
                                    heading: string;
                                };
                                public: {
                                    heading: string;
                                };
                                realm: {
                                    heading: string;
                                };
                                renewRefreshToken: {
                                    heading: string;
                                };
                                replyTo: {
                                    heading: string;
                                };
                            };
                        };
                    };
                };
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: string;
                            };
                            filterCondition: {
                                placeholder: string;
                            };
                            filterValue: {
                                placeholder: string;
                            };
                        };
                    };
                    placeholder: string;
                };
                confirmations: {
                    addSocialLogin: {
                        content: string;
                        header: string;
                        subHeader: string;
                    };
                    changeProtocol: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteApplication: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteChoreoApplication: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteOutboundProvisioningIDP: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteProtocol: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    handlerAuthenticatorAddition: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    backupCodeAuthenticatorDelete: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    lowOIDCExpiryTimes: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    regenerateSecret: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    reactivateSPA: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    reactivateOIDC: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    removeApplicationUserAttribute: {
                        content: string;
                        header: string;
                        subHeader: string;
                    };
                    removeApplicationUserAttributeMapping: {
                        content: string;
                        header: string;
                        subHeader: string;
                    };
                    revokeApplication: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    clientSecretHashDisclaimer: {
                        modal: {
                            header: string;
                            message: string;
                            content: string;
                            assertionHint: string;
                        };
                        forms: {
                            clientIdSecretForm: {
                                clientId: {
                                    hide: string;
                                    show: string;
                                    label: string;
                                    placeholder: string;
                                    validations: {
                                        empty: string;
                                    };
                                };
                                clientSecret: {
                                    hide: string;
                                    show: string;
                                    label: string;
                                    placeholder: string;
                                    validations: {
                                        empty: string;
                                    };
                                };
                            };
                        };
                    };
                    certificateDelete: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    } & Record<string, string>;
                };
                dangerZoneGroup: {
                    header: string;
                    deleteApplication: {
                        actionTitle: string;
                        header: string;
                        subheader: string;
                    };
                };
                edit: {
                    sections: {
                        access: {
                            addProtocolWizard: {
                                heading: string;
                                subHeading: string;
                                steps: {
                                    protocolSelection: {
                                        manualSetup: {
                                            emptyPlaceholder: {
                                                title: string;
                                                subtitles: string;
                                            };
                                            heading: string;
                                            subHeading: string;
                                        };
                                        quickSetup: {
                                            emptyPlaceholder: {
                                                title: string;
                                                subtitles: string;
                                            };
                                            heading: string;
                                            subHeading: string;
                                        };
                                    };
                                };
                            };
                            tabName: string;
                            protocolLanding: {
                                heading: string;
                                subHeading: string;
                            };
                        };
                        advanced: {
                            tabName: string;
                        };
                        attributes: {
                            forms: {
                                fields: {
                                    dynamic: {
                                        localRole: {
                                            label: string;
                                            validations: {
                                                empty: string;
                                            };
                                        };
                                        applicationRole: {
                                            label: string;
                                            validations: {
                                                empty: string;
                                                duplicate: string;
                                            };
                                        };
                                    };
                                };
                            };
                            selection: {
                                addWizard: {
                                    header: string;
                                    subHeading: string;
                                    steps: {
                                        select: {
                                            transfer: {
                                                searchPlaceholders: {
                                                    attribute: string;
                                                    role: string;
                                                };
                                                headers: {
                                                    attribute: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                heading: string;
                                scopelessAttributes: {
                                    description: string;
                                    displayName: string;
                                    name: string;
                                    hint: string;
                                };
                                selectedScopesComponentHint: string;
                                howToUseScopesHint: string;
                                attributeComponentHint: string;
                                attributeComponentHintAlt: string;
                                description: string;
                                mandatoryAttributeHint: string;
                                mappingTable: {
                                    actions: {
                                        enable: string;
                                    };
                                    columns: {
                                        appAttribute: string;
                                        attribute: string;
                                        mandatory: string;
                                        requested: string;
                                    };
                                    mappedAtributeHint: string;
                                    mappingRevert: {
                                        confirmationHeading: string;
                                        confirmationMessage: string;
                                        confirmationContent: string;
                                        confirmPrimaryAction: string;
                                        confirmSecondaryAction: string;
                                    };
                                    listItem: {
                                        actions: {
                                            makeMandatory: string;
                                            makeRequested: string;
                                            makeScopeRequested: string;
                                            removeMandatory: string;
                                            removeRequested: string;
                                            removeScopeRequested: string;
                                            subjectDisabledSelection: string;
                                        };
                                        faultyAttributeMapping: string;
                                        faultyAttributeMappingHint: string;
                                        fields: {
                                            claim: {
                                                label: string;
                                                placeholder: string;
                                            };
                                        };
                                    };
                                    searchPlaceholder: string;
                                };
                                selectAll: string;
                            };
                            attributeMappingChange: {
                                error: {
                                    message: string;
                                    description: string;
                                };
                            };
                            emptySearchResults: {
                                subtitles: {
                                    0: string;
                                    1: string;
                                };
                                title: string;
                            };
                            roleMapping: {
                                heading: string;
                            };
                            tabName: string;
                        };
                        info: {
                            oidcHeading: string;
                            oidcSubHeading: string;
                            samlHeading: string;
                            samlSubHeading: string;
                            wsFedHeading: string;
                            wsFedSubHeading: string;
                            tabName: string;
                        };
                        general: {
                            tabName: string;
                        };
                        protocol: {
                            title: string;
                            subtitle: string;
                            button: string;
                        };
                        provisioning: {
                            tabName: string;
                            inbound: {
                                heading: string;
                                subHeading: string;
                            };
                            outbound: {
                                actions: {
                                    addIdp: string;
                                };
                                addIdpWizard: {
                                    heading: string;
                                    subHeading: string;
                                    steps: {
                                        details: string;
                                    };
                                    errors: {
                                        noProvisioningConnector: string;
                                    };
                                };
                                heading: string;
                                subHeading: string;
                            };
                        };
                        signOnMethod: {
                            tabName: string;
                            sections: {
                                authenticationFlow: {
                                    heading: string;
                                    sections: {
                                        scriptBased: {
                                            accordion: {
                                                title: {
                                                    description: string;
                                                    heading: string;
                                                };
                                            };
                                            conditionalAuthTour: {
                                                steps: {
                                                    0: {
                                                        heading: string;
                                                        content: {
                                                            0: string;
                                                            1: string;
                                                        };
                                                    };
                                                    1: {
                                                        heading: string;
                                                        content: {
                                                            0: string;
                                                        };
                                                    };
                                                    2: {
                                                        heading: string;
                                                        content: {
                                                            0: string;
                                                        };
                                                    };
                                                };
                                            };
                                            heading: string;
                                            hint: string;
                                            editor: {
                                                apiDocumentation: string;
                                                changeConfirmation: {
                                                    content: string;
                                                    heading: string;
                                                    message: string;
                                                };
                                                goToApiDocumentation: string;
                                                resetConfirmation: {
                                                    content: string;
                                                    heading: string;
                                                    message: string;
                                                };
                                                templates: {
                                                    heading: string;
                                                    darkMode: string;
                                                };
                                            };
                                            secretsList: {
                                                create: string;
                                                emptyPlaceholder: string;
                                                search: string;
                                                tooltips: {
                                                    keyIcon: string;
                                                    plusIcon: string;
                                                };
                                            };
                                        };
                                        stepBased: {
                                            actions: {
                                                addAuthentication: string;
                                                addNewStep: string;
                                                addStep: string;
                                                selectAuthenticator: string;
                                            };
                                            addAuthenticatorModal: {
                                                description: string;
                                                heading: string;
                                                content: Record<string, unknown>;
                                                primaryButton: string;
                                                secondaryButton: string;
                                            };
                                            heading: string;
                                            hint: string;
                                            forms: {
                                                fields: {
                                                    attributesFrom: {
                                                        label: string;
                                                        placeholder: string;
                                                    };
                                                    subjectIdentifierFrom: {
                                                        label: string;
                                                        placeholder: string;
                                                    };
                                                    enableBackupCodes: {
                                                        label: string;
                                                    };
                                                };
                                            };
                                            secondFactorDisabled: string;
                                            secondFactorDisabledDueToProxyMode: string;
                                            secondFactorDisabledInFirstStep: string;
                                            backupCodesDisabled: string;
                                            backupCodesDisabledInFirstStep: string;
                                            authenticatorDisabled: string;
                                            firstFactorDisabled: string;
                                            federatedSMSOTPConflictNote: {
                                                multipleIdps: string;
                                                singleIdp: string;
                                            };
                                            sessionExecutorDisabledInFirstStep: string;
                                            sessionExecutorDisabledInMultiOptionStep: string;
                                        };
                                    };
                                };
                                customization: {
                                    heading: string;
                                    revertToDefaultButton: {
                                        hint: string;
                                        label: string;
                                    };
                                };
                                landing: {
                                    defaultConfig: {
                                        description: {
                                            0: string;
                                            1: string;
                                        };
                                        heading: string;
                                    };
                                    flowBuilder: {
                                        addMissingSocialAuthenticatorModal: {
                                            description: string;
                                            heading: string;
                                            content: Record<string, unknown>;
                                            primaryButton: string;
                                            secondaryButton: string;
                                        };
                                        duplicateSocialAuthenticatorSelectionModal: {
                                            description: string;
                                            heading: string;
                                            content: Record<string, unknown>;
                                            primaryButton: string;
                                            secondaryButton: string;
                                        };
                                        heading: string;
                                        headings: {
                                            default: string;
                                            socialLogin: string;
                                            multiFactorLogin: string;
                                            passwordlessLogin: string;
                                        };
                                        types: {
                                            apple: {
                                                description: string;
                                                heading: string;
                                            };
                                            defaultConfig: {
                                                description: string;
                                                heading: string;
                                            };
                                            facebook: {
                                                description: string;
                                                heading: string;
                                            };
                                            github: {
                                                description: string;
                                                heading: string;
                                            };
                                            google: {
                                                description: string;
                                                heading: string;
                                            };
                                            idf: {
                                                tooltipText: string;
                                            };
                                            totp: {
                                                description: string;
                                                heading: string;
                                            };
                                            usernameless: {
                                                description: string;
                                                heading: string;
                                                info: string;
                                            };
                                            passkey: {
                                                description: string;
                                                heading: string;
                                                info: {
                                                    progressiveEnrollmentEnabled: string;
                                                    passkeyAsFirstStepWhenprogressiveEnrollmentEnabled: string;
                                                    passkeyIsNotFirstStepWhenprogressiveEnrollmentEnabled: string;
                                                    progressiveEnrollmentEnabledCheckbox: string;
                                                    progressiveEnrollmentDisabled: string;
                                                };
                                            };
                                            magicLink: {
                                                description: string;
                                                heading: string;
                                            };
                                            microsoft: {
                                                description: string;
                                                heading: string;
                                            };
                                            emailOTP: {
                                                description: string;
                                                heading: string;
                                            };
                                            smsOTP: {
                                                description: string;
                                                heading: string;
                                            };
                                            emailOTPFirstFactor: {
                                                description: string;
                                                heading: string;
                                            };
                                        };
                                    };
                                };
                                requestPathAuthenticators: {
                                    title: string;
                                    subTitle: string;
                                    notifications: {
                                        getRequestPathAuthenticators: {
                                            error: {
                                                message: string;
                                                description: string;
                                            };
                                            genericError: {
                                                message: string;
                                                description: string;
                                            };
                                            success: {
                                                message: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                                templateDescription: {
                                    popupContent: string;
                                    description: {
                                        prerequisites: string;
                                        parameters: string;
                                        description: string;
                                        defaultSteps: string;
                                        helpReference: string;
                                        code: string;
                                    };
                                };
                            };
                        };
                        sharedAccess: {
                            subTitle: string;
                            tabName: string;
                        };
                        shareApplication: {
                            heading: string;
                            shareApplication: string;
                            addSharingNotification: {
                                genericError: {
                                    message: string;
                                    description: string;
                                };
                                success: {
                                    message: string;
                                    description: string;
                                };
                            };
                            stopSharingNotification: {
                                genericError: {
                                    message: string;
                                    description: string;
                                };
                                success: {
                                    message: string;
                                    description: string;
                                };
                            };
                            getSharedOrganizations: {
                                genericError: {
                                    message: string;
                                    description: string;
                                };
                            };
                            stopAllSharingNotification: {
                                genericError: {
                                    message: string;
                                    description: string;
                                };
                                success: {
                                    message: string;
                                    description: string;
                                };
                            };
                            switchToSelectiveShareFromSharingWithAllSuborgsWarning: string;
                        };
                        apiAuthorization: {
                            m2mPolicyMessage: string;
                        };
                        roles: {
                            createApplicationRoleWizard: {
                                title: string;
                                subTitle: string;
                                button: string;
                            };
                        };
                    };
                };
                forms: {
                    advancedAttributeSettings: {
                        sections: {
                            linkedAccounts: {
                                errorAlert: {
                                    message: string;
                                    description: string;
                                };
                                heading: string;
                                descriptionFederated: string;
                                fields: {
                                    validateLocalAccount: {
                                        hint: string;
                                        label: string;
                                    };
                                    mandateLocalAccount: {
                                        hint: string;
                                        label: string;
                                    };
                                };
                            };
                            subject: {
                                fields: {
                                    alternateSubjectAttribute: {
                                        hint: string;
                                        label: string;
                                    };
                                    subjectAttribute: {
                                        hintOIDC: string;
                                        hintSAML: string;
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    subjectIncludeTenantDomain: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    subjectIncludeUserDomain: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    subjectUseMappedLocalSubject: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    subjectType: {
                                        public: {
                                            label: string;
                                            hint: string;
                                        };
                                        pairwise: {
                                            label: string;
                                            hint: string;
                                        };
                                        label: string;
                                    };
                                    sectorIdentifierURI: {
                                        multipleCallbackError: string;
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            invalid: string;
                                            required: string;
                                        };
                                    };
                                };
                                heading: string;
                            };
                            role: {
                                heading: string;
                                fields: {
                                    roleAttribute: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    role: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    advancedConfig: {
                        fields: {
                            enableAuthorization: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            returnAuthenticatedIdpList: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            saas: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            skipConsentLogin: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            skipConsentLogout: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                        };
                        sections: {
                            applicationNativeAuthentication: {
                                heading: string;
                                alerts: {
                                    clientAttestation: string;
                                };
                                fields: {
                                    enableAPIBasedAuthentication: {
                                        hint: string;
                                        label: string;
                                    };
                                    enableClientAttestation: {
                                        hint: string;
                                        label: string;
                                    };
                                    android: {
                                        heading: string;
                                        fields: {
                                            androidPackageName: {
                                                hint: string;
                                                label: string;
                                                placeholder: string;
                                                validations: {
                                                    empty: string;
                                                };
                                            };
                                            androidAttestationServiceCredentials: {
                                                hint: string;
                                                label: string;
                                                placeholder: string;
                                                validations: {
                                                    empty: string;
                                                };
                                            };
                                        };
                                    };
                                    apple: {
                                        heading: string;
                                        fields: {
                                            appleAppId: {
                                                hint: string;
                                                label: string;
                                                placeholder: string;
                                            };
                                        };
                                    };
                                };
                            };
                            certificate: {
                                heading: string;
                                hint: {
                                    customOidc: string;
                                    customPassiveSTS: string;
                                    customSaml: string;
                                };
                                fields: {
                                    jwksValue: {
                                        description: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    pemValue: {
                                        description: string;
                                        actions: {
                                            view: string;
                                        };
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    type: {
                                        children: {
                                            jwks: {
                                                label: string;
                                            };
                                            pem: {
                                                label: string;
                                            };
                                        };
                                        label: string;
                                    };
                                };
                                invalidOperationModal: {
                                    header: string;
                                    message: string;
                                };
                            };
                        };
                    };
                    generalDetails: {
                        fields: {
                            name: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    duplicate: string;
                                    reserved: string;
                                };
                            };
                            description: {
                                label: string;
                                placeholder: string;
                            };
                            imageUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    invalid: string;
                                };
                            };
                            discoverable: {
                                hint: string;
                                label: string;
                            };
                            accessUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            isSharingEnabled: {
                                hint: string;
                                label: string;
                            };
                            isManagementApp: {
                                hint: string;
                                label: string;
                            };
                            isFapiApp: {
                                hint: string;
                                label: string;
                            };
                        };
                        managementAppBanner: string;
                    };
                    inboundCustom: {
                        fields: {
                            checkbox: {
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            dropdown: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            generic: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            password: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                        };
                    };
                    inboundOIDC: {
                        description: string;
                        documentation: string;
                        fields: {
                            allowedOrigins: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            callBackUrls: {
                                info: string;
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                    required: string;
                                };
                            };
                            clientID: {
                                label: string;
                            };
                            clientSecret: {
                                hashedDisclaimer: string;
                                hideSecret: string;
                                message: string;
                                showSecret: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            grant: {
                                children: {
                                    client_credential: {
                                        hint: string;
                                        label: string;
                                    };
                                    implicit: {
                                        hint: string;
                                        label: string;
                                    };
                                    password: {
                                        hint: string;
                                        label: string;
                                    };
                                };
                                validation: {
                                    refreshToken: string;
                                };
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            public: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                        };
                        mobileApp: {
                            discoverableHint: string;
                            mobileAppPlaceholder: string;
                        };
                        dropdowns: {
                            selectOption: string;
                        };
                        sections: {
                            accessToken: {
                                heading: string;
                                hint: string;
                                fields: {
                                    bindingType: {
                                        children: {
                                            ssoBinding: {
                                                label: string;
                                            };
                                        };
                                        description: string;
                                        label: string;
                                        valueDescriptions: {
                                            cookie: string;
                                            none: string;
                                            sso_session: string;
                                        };
                                    };
                                    expiry: {
                                        labelForSPA: string;
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    applicationTokenExpiry: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    type: {
                                        label: string;
                                        valueDescriptions: {
                                            default: string;
                                            jwt: string;
                                        };
                                    };
                                    revokeToken: {
                                        hint: string;
                                        label: string;
                                    };
                                    validateBinding: {
                                        hint: string;
                                        label: string;
                                    };
                                    audience: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            duplicate: string;
                                            invalid: string;
                                        };
                                    };
                                };
                            };
                            idToken: {
                                heading: string;
                                fields: {
                                    expiry: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    algorithm: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    audience: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            duplicate: string;
                                            invalid: string;
                                        };
                                    };
                                    encryption: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    signing: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                    method: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            logoutURLs: {
                                heading: string;
                                fields: {
                                    back: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    front: {
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                };
                            };
                            pkce: {
                                description: string;
                                heading: string;
                                hint: string;
                                fields: {
                                    pkce: {
                                        children: {
                                            mandatory: {
                                                label: string;
                                            };
                                            plainAlg: {
                                                label: string;
                                            };
                                        };
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            clientAuthentication: {
                                heading: string;
                                fields: {
                                    authenticationMethod: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                    signingAlgorithm: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                    subjectDN: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                };
                            };
                            pushedAuthorization: {
                                heading: string;
                                fields: {
                                    requirePushAuthorizationRequest: {
                                        hint: string;
                                        label: string;
                                    };
                                };
                            };
                            requestObject: {
                                heading: string;
                                fields: {
                                    requestObjectSigningAlg: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                    requestObjectEncryptionAlgorithm: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                    requestObjectEncryptionMethod: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                    };
                                };
                            };
                            refreshToken: {
                                heading: string;
                                fields: {
                                    expiry: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    renew: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            requestObjectSignature: {
                                heading: string;
                                description: string;
                                fields: {
                                    signatureValidation: {
                                        label: string;
                                    };
                                };
                            };
                            scopeValidators: {
                                heading: string;
                                fields: {
                                    validator: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            certificates: {
                                disabledPopup: string;
                            };
                        };
                        messages: {
                            revokeDisclaimer: {
                                heading: string;
                                content: string;
                            };
                            customInvalidMessage: string;
                        };
                    };
                    inboundSAML: {
                        description: string;
                        documentation: string;
                        fields: {
                            assertionURLs: {
                                info: string;
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                    required: string;
                                };
                            };
                            defaultAssertionURL: {
                                hint: string;
                                label: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            idpEntityIdAlias: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            issuer: {
                                errorMessage: string;
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            metaURL: {
                                errorMessage: string;
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            mode: {
                                children: {
                                    manualConfig: {
                                        label: string;
                                    };
                                    metadataFile: {
                                        label: string;
                                    };
                                    metadataURL: {
                                        label: string;
                                    };
                                };
                                hint: string;
                                label: string;
                            };
                            qualifier: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                        };
                        sections: {
                            assertion: {
                                heading: string;
                                fields: {
                                    audience: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            invalid: string;
                                        };
                                    };
                                    nameIdFormat: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    recipients: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            invalid: string;
                                        };
                                    };
                                };
                            };
                            attributeProfile: {
                                heading: string;
                                fields: {
                                    enable: {
                                        hint: string;
                                        label: string;
                                    };
                                    includeAttributesInResponse: {
                                        hint: string;
                                        label: string;
                                    };
                                    serviceIndex: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            encryption: {
                                heading: string;
                                fields: {
                                    assertionEncryption: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    assertionEncryptionAlgorithm: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    keyEncryptionAlgorithm: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            idpInitiatedSLO: {
                                heading: string;
                                fields: {
                                    enable: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    returnToURLs: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            invalid: string;
                                        };
                                    };
                                };
                            };
                            responseSigning: {
                                heading: string;
                                fields: {
                                    digestAlgorithm: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    responseSigning: {
                                        hint: string;
                                        label: string;
                                    };
                                    signingAlgorithm: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            requestProfile: {
                                heading: string;
                                fields: {
                                    enable: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            requestValidation: {
                                heading: string;
                                fields: {
                                    signatureValidation: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    signatureValidationCertAlias: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            sloProfile: {
                                heading: string;
                                fields: {
                                    enable: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    logoutMethod: {
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    requestURL: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                    responseURL: {
                                        hint: string;
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                            invalid: string;
                                        };
                                    };
                                };
                            };
                            ssoProfile: {
                                heading: string;
                                fields: {
                                    artifactBinding: {
                                        hint: string;
                                        label: string;
                                    };
                                    bindings: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                    idpInitiatedSSO: {
                                        hint: string;
                                        label: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            certificates: {
                                disabledPopup: string;
                                certificateRemoveConfirmation: {
                                    header: string;
                                    content: string;
                                };
                            };
                        };
                    };
                    inboundSTS: {
                        fields: {
                            realm: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            replyTo: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            replyToLogout: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                        };
                    };
                    inboundWSTrust: {
                        fields: {
                            audience: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            certificateAlias: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                        };
                    };
                    outboundProvisioning: {
                        fields: {
                            blocking: {
                                hint: string;
                                label: string;
                            };
                            connector: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            idp: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            jit: {
                                hint: string;
                                label: string;
                            };
                            rules: {
                                hint: string;
                                label: string;
                            };
                        };
                    };
                    provisioningConfig: {
                        fields: {
                            proxyMode: {
                                hint: string;
                                label: string;
                            };
                            userstoreDomain: {
                                hint: string;
                                label: string;
                            };
                        };
                    };
                    spaProtocolSettingsWizard: {
                        fields: {
                            callBackUrls: {
                                label: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            name: {
                                label: string;
                                validations: {
                                    invalid: string;
                                };
                            };
                            urlDeepLinkError: string;
                        };
                    };
                };
                helpPanel: {
                    tabs: {
                        configs: {
                            content: {
                                subTitle: string;
                                title: string;
                            };
                            heading: string;
                        };
                        docs: {
                            content: null;
                            heading: string;
                        };
                        samples: {
                            content: {
                                sample: {
                                    configurations: {
                                        btn: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    downloadSample: {
                                        btn: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    goBack: string;
                                    subTitle: string;
                                    title: string;
                                };
                                technology: {
                                    subTitle: string;
                                    title: string;
                                };
                            };
                            heading: string;
                        };
                        sdks: {
                            content: {
                                sdk: {
                                    goBack: string;
                                    subTitle: string;
                                    title: string;
                                };
                            };
                            heading: string;
                        };
                        start: {
                            content: {
                                endpoints: {
                                    subTitle: string;
                                    title: string;
                                };
                                oidcConfigurations: {
                                    labels: {
                                        authorize: string;
                                        dynamicClientRegistration: string;
                                        endSession: string;
                                        introspection: string;
                                        issuer: string;
                                        jwks: string;
                                        keystore: string;
                                        openIdServer: string;
                                        pushedAuthorizationRequest: string;
                                        revoke: string;
                                        sessionIframe: string;
                                        token: string;
                                        userInfo: string;
                                        webFinger: string;
                                        wellKnown: string;
                                    };
                                };
                                samlConfigurations: {
                                    buttons: {
                                        certificate: string;
                                        metadata: string;
                                    };
                                    labels: {
                                        certificate: string;
                                        issuer: string;
                                        metadata: string;
                                        slo: string;
                                        sso: string;
                                        destinationURL: string;
                                        artifactResolutionUrl: string;
                                    };
                                };
                                trySample: {
                                    btn: string;
                                    subTitle: string;
                                    title: string;
                                };
                                useSDK: {
                                    btns: {
                                        withSDK: string;
                                        withoutSDK: string;
                                    };
                                    subTitle: string;
                                    title: string;
                                };
                                wsFedConfigurations: {
                                    labels: {
                                        passiveSTSUrl: string;
                                    };
                                };
                            };
                            heading: string;
                        };
                    };
                };
                list: {
                    columns: {
                        actions: string;
                        name: string;
                        inboundKey: string;
                    };
                    actions: {
                        add: string;
                        predefined: string;
                        custom: string;
                    };
                    labels: {
                        fragment: string;
                    };
                };
                myaccount: {
                    title: string;
                    description: string;
                    popup: string;
                    enable: {
                        0: string;
                        1: string;
                    };
                    Confirmation: {
                        enableConfirmation: {
                            content: string;
                            heading: string;
                            message: string;
                        };
                        disableConfirmation: {
                            content: string;
                            heading: string;
                            message: string;
                        };
                    };
                    notifications: {
                        error: {
                            description: string;
                            message: string;
                        };
                        genericError: {
                            description: string;
                            message: string;
                        };
                        success: {
                            description: string;
                            message: string;
                        };
                    };
                    fetchMyAccountStatus: {
                        error: {
                            description: string;
                            message: string;
                        };
                        genericError: {
                            description: string;
                            message: string;
                        };
                    };
                };
                notifications: {
                    addApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    apiLimitReachedError: {
                        error: {
                            message: string;
                            description: string;
                        };
                    };
                    authenticationStepMin: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    authenticationStepDeleteErrorDueToSecondFactors: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    authenticationStepDeleteErrorDueToAppShared: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteOptionErrorDueToSecondFactorsOnRight: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteProtocolConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    duplicateAuthenticationStep: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    emptyAuthenticationStep: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchAllowedCORSOrigins: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchMyAccountApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchApplications: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchCustomInboundProtocols: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchInboundProtocols: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchProtocolMeta: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchSAMLIDPConfigs: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchOIDCIDPConfigs: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchTemplate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchTemplates: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getInboundProtocolConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    regenerateSecret: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    revokeApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    tierLimitReachedError: {
                        emptyPlaceholder: {
                            action: string;
                            title: string;
                            subtitles: string;
                        };
                        heading: string;
                    };
                    updateAdvancedConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateApplication: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateAuthenticationFlow: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateClaimConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateInboundProtocolConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateInboundProvisioningConfig: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateOutboundProvisioning: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    updateProtocol: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchOIDCServiceEndpoints: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    secondFactorAuthenticatorToFirstStep: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    firstFactorAuthenticatorToSecondStep: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    conditionalScriptLoopingError: {
                        message: string;
                        description: string;
                    };
                    deleteCertificateSuccess: {
                        message: string;
                        description: string;
                    };
                    deleteCertificateGenericError: {
                        message: string;
                        description: string;
                    };
                    updateOnlyIdentifierFirstError: {
                        message: string;
                        description: string;
                    };
                    updateIdentifierFirstInFirstStepError: {
                        message: string;
                        description: string;
                    };
                };
                popups: {
                    appStatus: {
                        active: {
                            content: string;
                            header: string;
                            subHeader: string;
                        };
                        notConfigured: {
                            content: string;
                            header: string;
                            subHeader: string;
                        };
                        revoked: {
                            content: string;
                            header: string;
                            subHeader: string;
                        };
                    };
                };
                placeholders: {
                    emptyAttributesList: {
                        action: string;
                        title: string;
                        subtitles: string;
                    };
                    emptyAuthenticatorStep: {
                        title: string;
                        subtitles: {
                            0: string;
                        };
                    };
                    emptyAuthenticatorsList: {
                        title: string;
                        subtitles: string;
                    };
                    emptyOutboundProvisioningIDPs: {
                        action: string;
                        title: string;
                        subtitles: string;
                    };
                    emptyList: {
                        action: string;
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                    emptyProtocolList: {
                        action: string;
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                };
                resident: {
                    provisioning: {
                        outbound: {
                            actions: {
                                addIdp: string;
                            };
                            addIdpWizard: {
                                heading: string;
                                subHeading: string;
                                steps: {
                                    details: string;
                                };
                            };
                            emptyPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: string;
                            };
                            form: {
                                fields: {
                                    connection: {
                                        label: string;
                                        placeholder: string;
                                        validations: {
                                            empty: string;
                                        };
                                    };
                                };
                            };
                            heading: string;
                            subHeading: string;
                            notifications: {
                                create: {
                                    error: {
                                        message: string;
                                        description: string;
                                    };
                                    genericError: {
                                        message: string;
                                        description: string;
                                    };
                                    success: {
                                        message: string;
                                        description: string;
                                    };
                                };
                                delete: {
                                    genericError: {
                                        message: string;
                                        description: string;
                                    };
                                    success: {
                                        message: string;
                                        description: string;
                                    };
                                };
                                fetch: {
                                    genericError: {
                                        message: string;
                                        description: string;
                                    };
                                };
                                update: {
                                    genericError: {
                                        message: string;
                                        description: string;
                                    };
                                    success: {
                                        message: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                templates: {
                    manualSetup: {
                        heading: string;
                        subHeading: string;
                    };
                    quickSetup: {
                        heading: string;
                        subHeading: string;
                    };
                };
                wizards: {
                    minimalAppCreationWizard: {
                        help: {
                            heading: string;
                            subHeading: string;
                            template: {
                                common: {
                                    authorizedRedirectURLs: {
                                        example: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    heading: {
                                        example: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    protocol: {
                                        subTitle: string;
                                        title: string;
                                    };
                                };
                                label: string;
                                samlWeb: {
                                    assertionResponseURLs: {
                                        example: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    issuer: {
                                        example: string;
                                        subTitle: string;
                                        title: string;
                                    };
                                    metaFile: {
                                        subTitle: string;
                                        title: string;
                                    };
                                    metaURL: {
                                        subTitle: string;
                                        title: string;
                                    };
                                };
                            };
                        };
                    };
                    applicationCertificateWizard: {
                        heading: string;
                        subHeading: string;
                        emptyPlaceHolder: {
                            title: string;
                            description1: string;
                            description2: string;
                        };
                    };
                };
            };
            authenticationProvider: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: string;
                            };
                            filterCondition: {
                                placeholder: string;
                            };
                            filterValue: {
                                placeholder: string;
                            };
                        };
                    };
                    placeholder: string;
                };
                buttons: {
                    addIDP: string;
                    addAuthenticator: string;
                    addConnector: string;
                    addAttribute: string;
                    addCertificate: string;
                };
                confirmations: {
                    deleteIDP: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteIDPWithConnectedApps: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteAuthenticator: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteConnector: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                    deleteCertificate: {
                        header: string;
                        message: string;
                        content: string;
                        assertionHint: string;
                    };
                };
                dangerZoneGroup: {
                    header: string;
                    disableIDP: {
                        actionTitle: string;
                        header: string;
                        subheader: string;
                        subheader2: string;
                    };
                    deleteIDP: {
                        actionTitle: string;
                        header: string;
                        subheader: string;
                    };
                };
                edit: {
                    common: {
                        settings: {
                            tabName: string;
                        };
                    };
                    emailOTP: {
                        emailTemplate: {
                            tabName: string;
                        };
                    };
                    smsOTP: {
                        smsProvider: {
                            tabName: string;
                        };
                    };
                };
                forms: {
                    advancedConfigs: {
                        federationHub: {
                            hint: string;
                            label: string;
                        };
                        homeRealmIdentifier: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        alias: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        certificateType: {
                            label: string;
                            hint: string;
                            certificatePEM: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            certificateJWKS: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                        };
                    };
                    attributeSettings: {
                        attributeMapping: {
                            attributeColumnHeader: string;
                            attributeMapColumnHeader: string;
                            attributeMapInputPlaceholderPrefix: string;
                            componentHeading: string;
                            hint: string;
                        };
                        attributeProvisioning: {
                            attributeColumnHeader: {
                                0: string;
                                1: string;
                            };
                            attributeMapColumnHeader: string;
                            attributeMapInputPlaceholderPrefix: string;
                            componentHeading: string;
                            hint: string;
                        };
                        attributeListItem: {
                            validation: {
                                empty: string;
                            };
                        };
                        attributeSelection: {
                            searchAttributes: {
                                placeHolder: string;
                            };
                        };
                    };
                    authenticatorAccordion: {
                        default: {
                            0: string;
                            1: string;
                        };
                        enable: {
                            0: string;
                            1: string;
                        };
                    };
                    authenticatorSettings: {
                        apple: {
                            additionalQueryParameters: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            callbackUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            keyId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            privateKey: {
                                hint: string;
                                label: string;
                                placeholder: string;

                                validations: {
                                    required: string;
                                };
                            };
                            secretValidityPeriod: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            scopes: {
                                heading: string;
                                hint: string;
                                list: {
                                    email: {
                                        description: string;
                                    };
                                    name: {
                                        description: string;
                                    };
                                };
                            };
                            teamId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                        };
                        emailOTP: {
                            enableBackupCodes: {
                                hint: string;
                                label: string;
                                validations: {
                                    required: string;
                                };
                            };
                            expiryTime: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    invalid: string;
                                    range: string;
                                    required: string;
                                };
                                unit: string;
                            };
                            tokenLength: {
                                hint: string;
                                label: string;
                                unit: {
                                    digits: string;
                                    characters: string;
                                };
                                placeholder: string;
                                validations: {
                                    invalid: string;
                                    range: {
                                        digits: string;
                                        characters: string;
                                    };
                                    required: string;
                                };
                            };
                            useAlphanumericChars: {
                                hint: string;
                                label: string;
                                validations: {
                                    required: string;
                                };
                            };
                        };
                        smsOTP: {
                            hint: string;
                            expiryTime: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    invalid: string;
                                    range: string;
                                    required: string;
                                };
                                unit: string;
                            };
                            tokenLength: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    invalid: string;
                                    range: {
                                        digits: string;
                                        characters: string;
                                    };
                                    required: string;
                                };
                                unit: {
                                    digits: string;
                                    characters: string;
                                };
                            };
                            useNumericChars: {
                                hint: string;
                                label: string;
                                validations: {
                                    required: string;
                                };
                            };
                            allowedResendAttemptCount: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                    invalid: string;
                                    range: string;
                                };
                            };
                        };
                        fido2: {
                            allowProgressiveEnrollment: {
                                hint: string;
                                label: string;
                            };
                            allowUsernamelessAuthentication: {
                                hint: string;
                                label: string;
                            };
                        };
                        facebook: {
                            callbackUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientSecret: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            scopes: {
                                heading: string;
                                hint: string;
                                list: {
                                    email: {
                                        description: string;
                                    };
                                    profile: {
                                        description: string;
                                    };
                                };
                            };
                            userInfo: {
                                heading: string;
                                hint: string;
                                placeholder: string;
                                list: {
                                    ageRange: {
                                        description: string;
                                    };
                                    email: {
                                        description: string;
                                    };
                                    firstName: {
                                        description: string;
                                    };
                                    gender: {
                                        description: string;
                                    };
                                    id: {
                                        description: string;
                                    };
                                    lastName: {
                                        description: string;
                                    };
                                    link: {
                                        description: string;
                                    };
                                    name: {
                                        description: string;
                                    };
                                };
                            };
                        };
                        github: {
                            callbackUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientId: {
                                hint: string;
                                label: string;
                                placeholder: string;

                                validations: {
                                    required: string;
                                };
                            };
                            clientSecret: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            scopes: {
                                heading: string;
                                hint: string;
                                list: {
                                    email: {
                                        description: string;
                                    };
                                    profile: {
                                        description: string;
                                    };
                                };
                            };
                        };
                        google: {
                            callbackUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientSecret: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            enableGoogleOneTap: {
                                hint: string;
                                label: string;
                                placeholder: string;
                            };
                            AdditionalQueryParameters: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                                validations: {
                                    required: string;
                                };
                            };
                            scopes: {
                                heading: string;
                                hint: string;
                                list: {
                                    email: {
                                        description: string;
                                    };
                                    openid: {
                                        description: string;
                                    };
                                    profile: {
                                        description: string;
                                    };
                                };
                            };
                        };
                        microsoft: {
                            callbackUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            clientSecret: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            commonAuthQueryParams: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                                validations: {
                                    required: string;
                                };
                            };
                            scopes: {
                                ariaLabel: string;
                                heading: string;
                                hint: string;
                                label: string;
                                list: {
                                    email: {
                                        description: string;
                                    };
                                    openid: {
                                        description: string;
                                    };
                                    profile: {
                                        description: string;
                                    };
                                };
                                placeholder: string;
                            };
                        };
                        hypr: {
                            appId: {
                                hint: string;
                                label: string;
                                placeholder: string;

                                validations: {
                                    required: string;
                                };
                            };
                            apiToken: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                            baseUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    required: string;
                                };
                            };
                        };
                        saml: {
                            AuthRedirectUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            SPEntityId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            SSOUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            IdPEntityId: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            NameIDType: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            RequestMethod: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            IsSLORequestAccepted: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            IsLogoutEnabled: {
                                hint: string;
                                label: string;

                                ariaLabel: string;
                            };
                            LogoutReqUrl: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            IsAuthnRespSigned: {
                                hint: string;
                                label: string;

                                ariaLabel: string;
                            };
                            IsLogoutReqSigned: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            ISAuthnReqSigned: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            SignatureAlgorithm: {
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            DigestAlgorithm: {
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            IncludeProtocolBinding: {
                                hint: string;
                                label: string;

                                ariaLabel: string;
                            };
                            IsUserIdInClaims: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            commonAuthQueryParams: {
                                label: string;
                                ariaLabel: string;
                            };

                            isAssertionSigned: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            includeCert: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            includeNameIDPolicy: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            isEnableAssertionEncryption: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };

                            authenticationContextClass: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            customAuthenticationContextClass: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                            attributeConsumingServiceIndex: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };

                            isArtifactBindingEnabled: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            artifactResolveEndpointUrl: {
                                placeholder: string;
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            isArtifactResolveReqSigned: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            isArtifactResponseSigned: {
                                hint: string;
                                label: string;
                                ariaLabel: string;
                            };
                            authContextComparisonLevel: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                ariaLabel: string;
                            };
                        };
                    };
                    outboundConnectorAccordion: {
                        default: {
                            0: string;
                            1: string;
                        };
                        enable: {
                            0: string;
                            1: string;
                        };
                    };
                    common: {
                        requiredErrorMessage: string;
                        invalidURLErrorMessage: string;
                        invalidQueryParamErrorMessage: string;
                        invalidScopesErrorMessage: string;
                        customProperties: string;
                    };
                    generalDetails: {
                        name: {
                            hint: string;
                            label: string;
                            placeholder: string;
                            validations: {
                                empty: string;
                                duplicate: string;
                                required: string;
                                maxLengthReached: string;
                            };
                        };
                        issuer: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        alias: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        description: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        image: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                    };
                    jitProvisioning: {
                        enableJITProvisioning: {
                            hint: string;
                            label: string;
                            disabledMessageContent: string;
                            disabledMessageHeader: string;
                        };
                        provisioningUserStoreDomain: {
                            hint: string;
                            label: string;
                        };
                        provisioningScheme: {
                            hint: string;
                            label: string;
                            children: {
                                0: string;
                                1: string;
                                2: string;
                                3: string;
                            };
                        };
                        associateLocalUser: {
                            hint: string;
                            label: string;
                        };
                    };
                    roleMapping: {
                        heading: string;
                        keyName: string;
                        valueName: string;
                        validation: {
                            keyRequiredMessage: string;
                            valueRequiredErrorMessage: string;
                            duplicateKeyErrorMsg: string;
                        };
                        hint: string;
                    };
                    uriAttributeSettings: {
                        subject: {
                            heading: string;
                            hint: string;
                            placeHolder: string;
                            label: string;
                            validation: {
                                empty: string;
                            };
                        };
                        group: {
                            heading: string;
                            hint: string;
                            mappedRolesAbsentMessage: string;
                            mappedRolesPresentMessage: string;
                            messageOIDC: string;
                            messageSAML: string;
                            placeHolder: string;
                            roleMappingDisabledMessage: string;
                            label: string;
                            validation: {
                                empty: string;
                            };
                        };
                    };
                    outboundProvisioningRoles: {
                        heading: string;
                        hint: string;
                        placeHolder: string;
                        label: string;
                        popup: {
                            content: string;
                        };
                    };
                    certificateSection: {
                        certificateEditSwitch: {
                            jwks: string;
                            pem: string;
                        };
                        noCertificateAlert: string;
                    };
                };
                helpPanel: {
                    tabs: {
                        samples: {
                            content: {
                                docs: {
                                    goBack: string;
                                    hint: string;
                                    title: string;
                                };
                            };
                            heading: string;
                        };
                    };
                };
                templates: {
                    manualSetup: {
                        heading: string;
                        subHeading: string;
                    };
                    quickSetup: {
                        heading: string;
                        subHeading: string;
                    };
                    apple: {
                        wizardHelp: {
                            clientId: {
                                description: string;
                                heading: string;
                            };
                            heading: string;
                            keyId: {
                                description: string;
                                heading: string;
                            };
                            name: {
                                connectionDescription: string;
                                idpDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                configureAppleSignIn: string;
                                configureReturnURL: string;
                                configureWebDomain: string;
                                getCredentials: string;
                                heading: string;
                            };
                            privateKey: {
                                description: string;
                                heading: string;
                            };
                            subHeading: string;
                            teamId: {
                                description: string;
                                heading: string;
                            };
                        };
                    };
                    expert: {
                        wizardHelp: {
                            heading: string;
                            description: {
                                connectionDescription: string;
                                heading: string;
                                idpDescription: string;
                            };
                            name: {
                                connectionDescription: string;
                                heading: string;
                                idpDescription: string;
                            };
                            subHeading: string;
                        };
                    };
                    facebook: {
                        wizardHelp: {
                            clientId: {
                                description: string;
                                heading: string;
                            };
                            clientSecret: {
                                description: string;
                                heading: string;
                            };
                            heading: string;
                            name: {
                                idpDescription: string;
                                connectionDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                configureOAuthApps: string;
                                configureRedirectURL: string;
                                configureSiteURL: string;
                                getCredentials: string;
                                heading: string;
                            };
                            subHeading: string;
                        };
                    };
                    github: {
                        wizardHelp: {
                            heading: string;
                            subHeading: string;
                            clientId: {
                                description: string;
                                heading: string;
                            };
                            clientSecret: {
                                description: string;
                                heading: string;
                            };
                            name: {
                                idpDescription: string;
                                connectionDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                configureOAuthApps: string;
                                configureHomePageURL: string;
                                configureRedirectURL: string;
                                heading: string;
                                getCredentials: string;
                            };
                        };
                    };
                    google: {
                        wizardHelp: {
                            clientId: {
                                description: string;
                                heading: string;
                            };
                            clientSecret: {
                                description: string;
                                heading: string;
                            };
                            heading: string;
                            name: {
                                idpDescription: string;
                                connectionDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                configureOAuthApps: string;
                                configureRedirectURL: string;
                                getCredentials: string;
                                heading: string;
                            };
                            subHeading: string;
                        };
                    };
                    organizationIDP: {
                        wizardHelp: {
                            name: {
                                description: string;
                                heading: string;
                            };
                            description: {
                                description: string;
                                heading: string;
                                example: string;
                            };
                        };
                    };
                    microsoft: {
                        wizardHelp: {
                            clientId: {
                                description: string;
                                heading: string;
                            };
                            clientSecret: {
                                description: string;
                                heading: string;
                            };
                            heading: string;
                            name: {
                                idpDescription: string;
                                connectionDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                configureOAuthApps: string;
                                configureRedirectURL: string;
                                getCredentials: string;
                                heading: string;
                            };
                            subHeading: string;
                        };
                    };
                    hypr: {
                        wizardHelp: {
                            apiToken: {
                                description: string;
                                heading: string;
                            };
                            appId: {
                                description: string;
                                heading: string;
                            };
                            baseUrl: {
                                description: string;
                                heading: string;
                            };
                            heading: string;
                            name: {
                                idpDescription: string;
                                connectionDescription: string;
                                heading: string;
                            };
                            preRequisites: {
                                rpDescription: string;
                                tokenDescription: string;
                                heading: string;
                            };
                        };
                    };
                    enterprise: {
                        addWizard: {
                            title: string;
                            subtitle: string;
                        };
                        saml: {
                            preRequisites: {
                                configureIdp: string;
                                configureRedirectURL: string;
                                heading: string;
                                hint: string;
                            };
                        };
                        validation: {
                            name: string;
                            invalidName: string;
                        };
                    };
                    trustedTokenIssuer: {
                        addWizard: {
                            title: string;
                            subtitle: string;
                        };
                        forms: {
                            steps: {
                                general: string;
                                certificate: string;
                            };
                            name: {
                                label: string;
                                placeholder: string;
                            };
                            issuer: {
                                label: string;
                                placeholder: string;
                                hint: string;
                                validation: {
                                    notValid: string;
                                };
                            };
                            alias: {
                                label: string;
                                placeholder: string;
                                hint: string;
                                validation: {
                                    notValid: string;
                                };
                            };
                            certificateType: {
                                label: string;
                                requiredCertificate: string;
                            };
                            jwksUrl: {
                                optionLabel: string;
                                placeholder: string;
                                label: string;
                                hint: string;
                                validation: {
                                    notValid: string;
                                };
                            };
                            pem: {
                                optionLabel: string;
                                hint: string;
                                uploadCertificateButtonLabel: string;
                                dropzoneText: string;
                                pasteAreaPlaceholderText: string;
                            };
                        };
                    };
                };
                list: {
                    actions: string;
                    name: string;
                };
                modals: {
                    addAuthenticator: {
                        title: string;
                        subTitle: string;
                    };
                    addCertificate: {
                        title: string;
                        subTitle: string;
                    };
                    addProvisioningConnector: {
                        title: string;
                        subTitle: string;
                    };
                    attributeSelection: {
                        title: string;
                        subTitle: string;
                        content: {
                            searchPlaceholder: string;
                        };
                    };
                };
                notifications: {
                    addFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    addIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    changeCertType: {
                        pem: {
                            description: string;
                            message: string;
                        };
                        jwks: {
                            description: string;
                            message: string;
                        };
                    };
                    deleteCertificate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteIDPWithConnectedApps: {
                        error: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteConnection: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    disableAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    disableIDPWithConnectedApps: {
                        error: {
                            message: string;
                            description: string;
                        };
                    };
                    disableOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    duplicateCertificateUpload: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPTemplate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPTemplateList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticatorsList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticatorMetadata: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getConnectionDetails: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnectorsList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnectorMetadata: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getAllLocalClaims: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getRolesList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    submitAttributeSettings: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteDefaultAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                        success: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                    };
                    deleteDefaultConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                        success: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                    };
                    updateAttributes: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateClaimsConfigs: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateFederatedAuthenticators: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateEmailOTPAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateSMSOTPAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateGenericAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDPCertificate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDPRoleMappings: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateJITProvisioning: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateOutboundProvisioningConnectors: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    apiLimitReachedError: {
                        error: {
                            description: string;
                            message: string;
                        };
                    };
                };
                popups: {
                    appStatus: {
                        enabled: {
                            content: string;
                            header: string;
                            subHeader: string;
                        };
                        disabled: {
                            content: string;
                            header: string;
                            subHeader: string;
                        };
                    };
                };
                placeHolders: {
                    emptyCertificateList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    emptyIDPList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                    emptyIDPSearchResults: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    emptyAuthenticatorList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                    emptyConnectionTypeList: {
                        subtitles: {
                            0: string;
                            1: string;
                        };
                        title: string;
                    };
                    emptyConnectorList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    noAttributes: {
                        title: string;
                        subtitles: {
                            0: string;
                        };
                    };
                };
                wizards: {
                    addAuthenticator: {
                        header: string;
                        steps: {
                            authenticatorSelection: {
                                title: string;
                                quickSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                                manualSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                            };
                            authenticatorConfiguration: {
                                title: string;
                            };
                            authenticatorSettings: {
                                emptyPlaceholder: {
                                    subtitles: [string, string];
                                    title: string;
                                };
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    addIDP: {
                        header: string;
                        steps: {
                            generalSettings: {
                                title: string;
                            };
                            authenticatorConfiguration: {
                                title: string;
                            };
                            provisioningConfiguration: {
                                title: string;
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    addProvisioningConnector: {
                        header: string;
                        steps: {
                            connectorSelection: {
                                title: string;
                                defaultSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                            };
                            connectorConfiguration: {
                                title: string;
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    buttons: {
                        next: string;
                        finish: string;
                        previous: string;
                    };
                };
            };
            idp: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: string;
                            };
                            filterCondition: {
                                placeholder: string;
                            };
                            filterValue: {
                                placeholder: string;
                            };
                        };
                    };
                    placeholder: string;
                };
                buttons: {
                    addIDP: string;
                    addAuthenticator: string;
                    addConnector: string;
                    addAttribute: string;
                    addCertificate: string;
                };
                confirmations: {
                    deleteIDP: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                    deleteIDPWithConnectedApps: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                    deleteAuthenticator: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                    deleteConnector: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                };
                connectedApps: {
                    action: string;
                    header: string;
                    subHeader: string;
                    placeholders: {
                        search: string;
                        emptyList: string;
                    };
                    applicationEdit: {
                        back: string;
                    };
                    genericError: {
                        description: string;
                        message: string;
                    };
                };
                dangerZoneGroup: {
                    header: string;
                    disableIDP: {
                        actionTitle: string;
                        header: string;
                        subheader: string;
                        subheader2: string;
                    };
                    deleteIDP: {
                        actionTitle: string;
                        header: string;
                        subheader: string;
                    };
                };
                forms: {
                    advancedConfigs: {
                        federationHub: {
                            hint: string;
                            label: string;
                        };
                        homeRealmIdentifier: {
                            hint: string;
                            label: string;
                        };
                        alias: {
                            hint: string;
                            label: string;
                        };
                        certificateType: {
                            label: string;
                            hint: string;
                            certificatePEM: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            certificateJWKS: {
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                    invalid: string;
                                };
                            };
                        };
                        implicitAssociation: {
                            enable: {
                                label: string;
                                hint: string;
                            };
                            primaryAttribute: {
                                label: string;
                                hint: string;
                            };
                            secondaryAttribute: {
                                label: string;
                                hint: string;
                            };
                            warning: string;
                        };
                    };
                    attributeSettings: {
                        attributeMapping: {
                            attributeColumnHeader: string;
                            attributeMapColumnHeader: string;
                            attributeMapInputPlaceholderPrefix: string;
                            componentHeading: string;
                            hint: string;
                            placeHolder: {
                                title: string;
                                subtitle: string;
                                action: string;
                            };
                            attributeMapTable: {
                                mappedAttributeColumnHeader: string;
                                externalAttributeColumnHeader: string;
                            };
                            heading: string;
                            subheading: string;
                            search: {
                                placeHolder: string;
                            };
                            attributeDropdown: {
                                label: string;
                                placeHolder: string;
                                noResultsMessage: string;
                            };
                            externalAttributeInput: {
                                label: string;
                                placeHolder: string;
                                existingErrorMessage: string;
                            };
                            addAttributeButtonLabel: string;
                            modal: {
                                header: string;
                                placeholder: {
                                    title: string;
                                    subtitle: string;
                                };
                            };
                        };
                        attributeProvisioning: {
                            attributeColumnHeader: {
                                0: string;
                                1: string;
                            };
                            attributeMapColumnHeader: string;
                            attributeMapInputPlaceholderPrefix: string;
                            componentHeading: string;
                            hint: string;
                        };
                        attributeListItem: {
                            validation: {
                                empty: string;
                            };
                        };
                        attributeSelection: {
                            searchAttributes: {
                                placeHolder: string;
                            };
                        };
                    };
                    authenticatorAccordion: {
                        default: {
                            0: string;
                            1: string;
                        };
                        enable: {
                            0: string;
                            1: string;
                        };
                    };
                    outboundConnectorAccordion: {
                        default: {
                            0: string;
                            1: string;
                        };
                        enable: {
                            0: string;
                            1: string;
                        };
                    };
                    common: {
                        requiredErrorMessage: string;
                        invalidURLErrorMessage: string;
                        invalidQueryParamErrorMessage: string;
                        customProperties: string;
                        internetResolvableErrorMessage: string;
                    };
                    generalDetails: {
                        name: {
                            hint: string;
                            label: string;
                            placeholder: string;
                            validations: {
                                empty: string;
                                duplicate: string;
                                maxLengthReached: string;
                            };
                        };
                        description: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        image: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                    };
                    jitProvisioning: {
                        enableJITProvisioning: {
                            disabledMessageContent:
                                | string
                                | {
                                      1: string;
                                      2: string;
                                  };
                            hint: string;
                            label: string;
                            disabledMessageHeader: string;
                        };
                        provisioningUserStoreDomain: {
                            hint: string;
                            label: string;
                        };
                        provisioningScheme: {
                            hint: string;
                            label: string;
                            children: {
                                0: string;
                                1: string;
                                2: string;
                                3: string;
                            };
                        };
                    };
                    roleMapping: {
                        heading: string;
                        keyName: string;
                        valueName: string;
                        validation: {
                            keyRequiredMessage: string;
                            valueRequiredErrorMessage: string;
                            duplicateKeyErrorMsg: string;
                        };
                        hint: string;
                    };
                    uriAttributeSettings: {
                        subject: {
                            heading: string;
                            hint: string;
                            placeHolder: string;
                            label: string;
                            validation: {
                                empty: string;
                            };
                        };
                        role: {
                            heading: string;
                            hint: string;
                            placeHolder: string;
                            label: string;
                            validation: {
                                empty: string;
                            };
                        };
                    };
                    outboundProvisioningRoles: {
                        heading: string;
                        hint: string;
                        placeHolder: string;
                        label: string;
                        popup: {
                            content: string;
                        };
                    };
                    outboundProvisioningTitle: string;
                };
                helpPanel: {
                    tabs: {
                        samples: {
                            content: {
                                docs: {
                                    goBack: string;
                                    hint: string;
                                    title: string;
                                };
                            };
                            heading: string;
                        };
                    };
                };
                templates: {
                    manualSetup: {
                        heading: string;
                        subHeading: string;
                    };
                    quickSetup: {
                        heading: string;
                        subHeading: string;
                    };
                };
                list: {
                    actions: string;
                    name: string;
                };
                modals: {
                    addAuthenticator: {
                        title: string;
                        subTitle: string;
                    };
                    addCertificate: {
                        title: string;
                        subTitle: string;
                    };
                    addProvisioningConnector: {
                        title: string;
                        subTitle: string;
                    };
                    attributeSelection: {
                        title: string;
                        subTitle: string;
                        content: {
                            searchPlaceholder: string;
                        };
                    };
                };
                notifications: {
                    addFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    addIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    apiLimitReachedError: {
                        error: {
                            message: string;
                            description: string;
                        };
                    };
                    changeCertType: {
                        pem: {
                            description: string;
                            message: string;
                        };
                        jwks: {
                            description: string;
                            message: string;
                        };
                    };
                    deleteCertificate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    disableAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    disableOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    duplicateCertificateUpload: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPTemplate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getIDPTemplateList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticatorsList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getFederatedAuthenticatorMetadata: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnectorsList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getOutboundProvisioningConnectorMetadata: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getAllLocalClaims: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getRolesList: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    submitAttributeSettings: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    tierLimitReachedError: {
                        emptyPlaceholder: {
                            action: string;
                            title: string;
                            subtitles: string;
                        };
                        heading: string;
                    };
                    deleteDefaultAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                        success: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                    };
                    deleteDefaultConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                        success: {
                            message: string;
                            description: string;
                            genericMessage: string;
                        };
                    };
                    updateClaimsConfigs: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateFederatedAuthenticator: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateFederatedAuthenticators: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDP: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDPCertificate: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateIDPRoleMappings: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateJITProvisioning: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateOutboundProvisioningConnectors: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    updateOutboundProvisioningConnector: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                };
                placeHolders: {
                    emptyCertificateList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    emptyIDPList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                    emptyIDPSearchResults: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    emptyAuthenticatorList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                            2: string;
                        };
                    };
                    emptyConnectorList: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    noAttributes: {
                        title: string;
                        subtitles: {
                            0: string;
                        };
                    };
                };
                wizards: {
                    addAuthenticator: {
                        header: string;
                        steps: {
                            authenticatorSelection: {
                                title: string;
                                quickSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                                manualSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                            };
                            authenticatorConfiguration: {
                                title: string;
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    addIDP: {
                        header: string;
                        steps: {
                            generalSettings: {
                                title: string;
                            };
                            authenticatorConfiguration: {
                                title: string;
                            };
                            provisioningConfiguration: {
                                title: string;
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    addProvisioningConnector: {
                        header: string;
                        steps: {
                            connectorSelection: {
                                title: string;
                                defaultSetup: {
                                    title: string;
                                    subTitle: string;
                                };
                            };
                            connectorConfiguration: {
                                title: string;
                            };
                            summary: {
                                title: string;
                            };
                        };
                    };
                    buttons: {
                        next: string;
                        finish: string;
                        previous: string;
                    };
                };
            };
        };
        pages: {
            applicationTemplate: {
                backButton: string;
                title: string;
                subTitle: string;
            };
            applications: {
                title: string;
                subTitle: string;
                alternateSubTitle: string;
            };
            applicationsEdit: {
                backButton: string;
                title: string;
                subTitle: string;
            };
            authenticationProvider: {
                title: string;
                subTitle: string;
            };
            authenticationProviderTemplate: {
                title: string;
                subTitle: string;
                backButton: string;
                disabledHint: {
                    apple: string;
                };
                search: {
                    placeholder: string;
                };
                supportServices: {
                    authenticationDisplayName: string;
                    provisioningDisplayName: string;
                };
            };
            idp: {
                title: string;
                subTitle: string;
            };
            idpTemplate: {
                title: string;
                subTitle: string;
                backButton: string;
                supportServices: {
                    authenticationDisplayName: string;
                    provisioningDisplayName: string;
                };
            };
            idvp: {
                title: string;
                subTitle: string;
            };
            idvpTemplate: {
                title: string;
                subTitle: string;
                backButton: string;
                search: {
                    placeholder: string;
                };
            };
            overview: {
                title: string;
                subTitle: string;
            };
        };
        placeholders: {
            emptySearchResult: {
                action: string;
                title: string;
                subtitles: {
                    0: string;
                    1: string;
                };
            };
            underConstruction: {
                action: string;
                title: string;
                subtitles: {
                    0: string;
                    1: string;
                };
            };
        };
    };
    manage: {
        features: {
            users: {
                addUserType: {
                    createUser: {
                        title: string;
                        description: string;
                    };
                    inviteParentUser: {
                        title: string;
                        description: string;
                    };
                };
                consumerUsers: {
                    fields: {
                        username: {
                            label: string;
                            placeholder: string;
                            validations: {
                                empty: string;
                                invalid: string;
                                invalidCharacters: string;
                                regExViolation: string;
                            };
                        };
                    };
                };
                guestUsers: {
                    fields: {
                        username: {
                            label: string;
                            placeholder: string;
                            validations: {
                                empty: string;
                                invalid: string;
                                invalidCharacters: string;
                                regExViolation: string;
                            };
                        };
                    };
                };
                confirmations: {
                    terminateAllSessions: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                    terminateSession: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                    addMultipleUser: {
                        assertionHint: string;
                        header: string;
                        message: string;
                        content: string;
                    };
                };
                editUser: {
                    tab: {
                        menuItems: {
                            0: string;
                            1: string;
                            2: string;
                            3: string;
                        };
                    };
                    placeholders: {
                        undefinedUser: {
                            action: string;
                            title: string;
                            subtitles: string;
                        };
                    };
                };
                userSessions: {
                    components: {
                        sessionDetails: {
                            actions: {
                                terminateAllSessions: string;
                                terminateSession: string;
                            };
                            labels: {
                                browser: string;
                                deviceModel: string;
                                ip: string;
                                lastAccessed: string;
                                loggedInAs: string;
                                loginTime: string;
                                os: string;
                                recentActivity: string;
                                activeApplication: string;
                            };
                        };
                    };
                    dangerZones: {
                        terminate: {
                            actionTitle: string;
                            header: string;
                            subheader: string;
                        };
                    };
                    notifications: {
                        getUserSessions: {
                            error: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        terminateAllUserSessions: {
                            error: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        terminateUserSession: {
                            error: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        getAdminUser: {
                            error: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                        };
                    };
                    placeholders: {
                        emptyListPlaceholder: {
                            title: string;
                            subtitles: string;
                        };
                    };
                };
                advancedSearch: {
                    form: {
                        dropdown: {
                            filterAttributeOptions: {
                                username: string;
                                email: string;
                            };
                        };
                        inputs: {
                            filterAttribute: {
                                placeholder: string;
                            };
                            filterCondition: {
                                placeholder: string;
                            };
                            filterValue: {
                                placeholder: string;
                            };
                        };
                    };
                    placeholder: string;
                };
                all: {
                    heading: string;
                    subHeading: string;
                };
                buttons: {
                    addNewUserBtn: string;
                    assignUserRoleBtn: string;
                    metaColumnBtn: string;
                };
                addUserDropDown: {
                    addNewUser: string;
                    bulkImport: string;
                };
                forms: {
                    validation: {
                        formatError: string;
                        dateFormatError: string;
                        mobileFormatError: string;
                        futureDateError: string;
                    };
                };
                list: {
                    columns: {
                        actions: string;
                        name: string;
                    };
                };
                notifications: {
                    addUser: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    addUserPendingApproval: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    bulkImportUser: {
                        validation: {
                            emptyRowError: {
                                message: string;
                                description: string;
                            };
                            columnMismatchError: {
                                message: string;
                                description: string;
                            };
                            emptyHeaderError: {
                                message: string;
                                description: string;
                            };
                            missingRequiredHeaderError: {
                                message: string;
                                description: string;
                            };
                            blockedHeaderError: {
                                message: string;
                                description: string;
                            };
                            duplicateHeaderError: {
                                message: string;
                                description: string;
                            };
                            invalidHeaderError: {
                                message: string;
                                description: string;
                            };
                            emptyDataField: {
                                message: string;
                                description: string;
                            };
                            invalidRole: {
                                message: string;
                                description: string;
                            };
                            invalidGroup: {
                                message: string;
                                description: string;
                            };
                        };
                        submit: {
                            error: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        timeOut: {
                            message: string;
                            description: string;
                        };
                    };
                    deleteUser: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchUsers: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    getAdminRole: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    revokeAdmin: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                };
                placeholders: {
                    emptyList: {
                        action: string;
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                    userstoreError: {
                        title: string;
                        subtitles: {
                            0: string;
                            1: string;
                        };
                    };
                };
                usersList: {
                    list: {
                        emptyResultPlaceholder: {
                            addButton: string;
                            emptyUsers: string;
                            subTitle: {
                                0: string;
                                1: string;
                                2: string;
                            };
                            title: string;
                        };
                        iconPopups: {
                            delete: string;
                            edit: string;
                        };
                    };
                    metaOptions: {
                        heading: string;
                        columns: {
                            name: string;
                            emails: string;
                            id: string;
                            userName: string;
                            lastModified: string;
                        };
                    };
                    search: {
                        emptyResultPlaceholder: {
                            clearButton: string;
                            subTitle: {
                                0: string;
                                1: string;
                            };
                            title: string;
                        };
                    };
                };
                userstores: {
                    userstoreOptions: {
                        all: string;
                        primary: string;
                    };
                };
            };

            certificates: {
                keystore: {
                    advancedSearch: {
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: string;
                                };
                                filterCondition: {
                                    placeholder: string;
                                };
                                filterValue: {
                                    placeholder: string;
                                };
                            };
                        };
                        error: string;
                        placeholder: string;
                    };
                    attributes: {
                        alias: string;
                    };
                    list: {
                        columns: {
                            actions: string;
                            name: string;
                        };
                    };
                    notifications: {
                        addCertificate: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        getCertificates: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                        };
                        getAlias: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                        };
                        getPublicCertificate: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                        };
                        getCertificate: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                        };
                        deleteCertificate: {
                            genericError: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                        download: {
                            success: {
                                message: string;
                                description: string;
                            };
                        };
                    };
                    certificateModalHeader: string;
                    placeholders: {
                        emptySearch: {
                            action: string;
                            title: string;
                            subtitle: string;
                        };
                        emptyList: {
                            action: string;
                            title: string;
                            subtitle: string;
                        };
                    };
                    confirmation: {
                        hint: string;
                        primaryAction: string;
                        header: string;
                        content: string;
                        message: string;
                        tenantContent: string;
                    };
                    pageLayout: {
                        title: string;
                        description: string;
                        primaryAction: string;
                    };
                    summary: {
                        sn: string;
                        validFrom: string;
                        validTill: string;
                        issuerDN: string;
                        subjectDN: string;
                        version: string;
                    };
                    wizard: {
                        panes: {
                            upload: string;
                            paste: string;
                        };
                        steps: {
                            upload: string;
                            summary: string;
                        };
                        header: string;
                        dropZone: {
                            description: string;
                            action: string;
                        };
                        pastePlaceholder: string;
                    };
                    forms: {
                        alias: {
                            label: string;
                            placeholder: string;
                            requiredErrorMessage: string;
                        };
                    };
                    errorEmpty: string;
                    errorCertificate: string;
                };
                truststore: {
                    advancedSearch: {
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: string;
                                };
                                filterCondition: {
                                    placeholder: string;
                                };
                                filterValue: {
                                    placeholder: string;
                                };
                            };
                        };
                        placeholder: string;
                    };
                };
            };

            roles: {
                addRoleWizard: {
                    buttons: {
                        finish: string;
                        next: string;
                        previous: string;
                    };
                    forms: {
                        roleBasicDetails: {
                            domain: {
                                label: {
                                    role: string;
                                    group: string;
                                };
                                placeholder: string;
                                validation: {
                                    empty: {
                                        role: string;
                                        group: string;
                                    };
                                };
                            };
                            roleName: {
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    duplicate: string;
                                    duplicateInAudience: string;
                                    empty: string;
                                    invalid: string;
                                };
                            };
                            roleAudience: {
                                values: {
                                    organization: string;
                                    application: string;
                                };
                                hint: string;
                                label: string;
                            };
                            assignedApplication: {
                                applicationSubTitle: {
                                    application: string;
                                    organization: string;
                                    changeAudience: string;
                                };
                                note: string;
                                hint: string;
                                label: string;
                                placeholder: string;
                                validations: {
                                    empty: string;
                                };
                            };
                            notes: {
                                orgNote: string;
                                appNote: string;
                                cannotCreateRole: string;
                            };
                        };
                        rolePermission: {
                            apiResource: {
                                label: string;
                                placeholder: string;
                                hint: {
                                    empty: string;
                                };
                            };
                            permissions: {
                                label: string;
                                placeholder: string;
                                tooltips: {
                                    noScopes: string;
                                    selectAllScopes: string;
                                    removeAPIResource: string;
                                };
                                validation: {
                                    empty: string;
                                };
                                permissionsLabel: string;
                            };
                            notes: {
                                applicationRoles: string;
                            };
                            notifications: {
                                fetchAPIResourceError: {
                                    error: {
                                        message: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                    heading: string;
                    permissions: {
                        buttons: {
                            collapseAll: string;
                            expandAll: string;
                            update: string;
                        };
                    };
                    subHeading: string;
                    back: string;
                    summary: {
                        labels: {
                            domain: {
                                role: string;
                                group: string;
                            };
                            permissions: string;
                            roleName: string;
                            roles: string;
                            users: string;
                            groups: string;
                        };
                    };
                    users: {
                        assignUserModal: {
                            heading: string;
                            hint: string;
                            subHeading: string;
                            list: {
                                searchPlaceholder: string;
                                searchByEmailPlaceholder: string;
                                listHeader: string;
                            };
                        };
                    };
                    wizardSteps: {
                        0: string;
                        1: string;
                        2: string;
                        3: string;
                        4: string;
                        5: string;
                    };
                };
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: string;
                            };
                            filterCondition: {
                                placeholder: string;
                            };
                            filterValue: {
                                placeholder: string;
                            };
                        };
                    };
                    placeholder: string;
                };
                edit: {
                    placeholders: {
                        errorPlaceHolder: {
                            action: string;
                            title: string;
                            subtitles: {
                                0: string;
                                1: string;
                            };
                        };
                    };
                    basics: {
                        buttons: {
                            update: string;
                        };
                        confirmation: {
                            assertionHint: string;
                            header: string;
                            message: string;
                            content: string;
                        };
                        dangerZone: {
                            actionTitle: string;
                            header: string;
                            subheader: string;
                            buttonDisableHint: string;
                        };
                        fields: {
                            roleName: {
                                name: string;
                                required: string;
                                placeholder: string;
                            };
                        };
                    };
                    groups: {
                        addGroupsModal: {
                            heading: string;
                            subHeading: string;
                        };
                        placeholders: {
                            emptyPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: {
                                    0: string;
                                };
                            };
                            errorPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: {
                                    0: string;
                                    1: string;
                                };
                            };
                        };
                        notifications: {
                            error: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            fetchError: {
                                message: string;
                                description: string;
                            };
                        };
                        heading: string;
                        localGroupsHeading: string;
                        externalGroupsHeading: string;
                        subHeading: string;
                        actions: {
                            search: {
                                placeholder: string;
                            };
                            assign: {
                                placeholder: string;
                            };
                            remove: {
                                label: string;
                                placeholder: string;
                            };
                        };
                    };
                    menuItems: {
                        basic: string;
                        connectedApps: string;
                        permissions: string;
                        groups: string;
                        users: string;
                        roles: string;
                    };
                    users: {
                        heading: string;
                        subHeading: string;
                        placeholders: {
                            emptyPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: {
                                    0: string;
                                };
                            };
                            errorPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: {
                                    0: string;
                                    1: string;
                                };
                            };
                        };
                        notifications: {
                            error: {
                                message: string;
                                description: string;
                            };
                            success: {
                                message: string;
                                description: string;
                            };
                            genericError: {
                                message: string;
                                description: string;
                            };
                            fetchError: {
                                message: string;
                                description: string;
                            };
                        };
                        list: {
                            emptyPlaceholder: {
                                action: string;
                                title: string;
                                subtitles: string;
                            };
                            user: string;
                            organization: string;
                        };
                        actions: {
                            search: {
                                placeholder: string;
                            };
                            assign: {
                                placeholder: string;
                            };
                            remove: {
                                label: string;
                                placeholder: string;
                            };
                        };
                    };
                    permissions: {
                        heading: string;
                        subHeading: string;
                        readOnlySubHeading: string;
                        removedPermissions: string;
                    };
                };
                list: {
                    buttons: {
                        addButton: string;
                        filterDropdown: string;
                    };
                    columns: {
                        actions: string;
                        lastModified: string;
                        name: string;
                        managedByOrg: {
                            label: string;
                            header: string;
                        };
                        managedByApp: {
                            label: string;
                            header: string;
                        };
                        audience: string;
                    };
                    confirmations: {
                        deleteItem: {
                            assertionHint: string;
                            header: string;
                            message: string;
                            content: string;
                        };
                        deleteItemError: {
                            header: string;
                            message: string;
                            content: string;
                        };
                    };
                    emptyPlaceholders: {
                        search: {
                            action: string;
                            title: string;
                            subtitles: {
                                0: string;
                                1: string;
                            };
                        };
                        emptyRoleList: {
                            action: string;
                            title: string;
                            subtitles: {
                                0: string;
                                1: string;
                                2: string;
                            };
                        } & {
                            emptyRoles: string;
                        };
                    };
                    popups: {
                        delete: string;
                        edit: string;
                    };
                    filterOptions: {
                        all: string;
                        applicationRoles: string;
                        organizationRoles: string;
                    };
                    filterAttirbutes: {
                        name: string;
                        audience: string;
                    };
                };
                readOnlyList: {
                    emptyPlaceholders: {
                        searchAndFilter: {
                            title: string;
                            subtitles:
                                | string
                                | {
                                      0: string;
                                      1: string;
                                  };
                        };
                    };
                };
                notifications: {
                    deleteRole: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchRoles: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    fetchRole: {
                        genericError: {
                            message: string;
                            description: string;
                        };
                    };
                    updateRole: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    createRole: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                    createPermission: {
                        error: {
                            message: string;
                            description: string;
                        };
                        genericError: {
                            message: string;
                            description: string;
                        };
                        success: {
                            message: string;
                            description: string;
                        };
                    };
                };
            };

            transferList: {
                searchPlaceholder: string;
                list: {
                    headers: {
                        0: string;
                        1: string;
                        2: string;
                    };
                    emptyPlaceholders: {
                        default: string;
                        groups: {
                            unselected: string;
                            selected: string;
                            common: string;
                        };
                        roles: {
                            unselected: string;
                            selected: string;
                            common: string;
                        };
                        users: {
                            roles: {
                                unselected: string;
                                selected: string;
                            };
                        };
                    };
                };
            };
        };
        placeholders: {
            emptySearchResult: {
                action: string;
                title: string;
                subtitles: {
                    0: string;
                    1: string;
                };
            };
            underConstruction: {
                action: string;
                title: string;
                subtitles: {
                    0: string;
                    1: string;
                };
            };
        };
    };

    access: string;
    actions: string;
    activate: string;
    active: string;
    add: string;
    addKey: string;
    addURL: string;
    all: string;
    applicationName: string;
    applications: string;
    approvalStatus: string;
    approve: string;
    apps: string;
    assignee: string;
    assignees: string;
    authenticator: string;
    authentication: string;
    authenticator_plural: string;
    back: string;
    beta: string;
    browser: string;
    cancel: string;
    challengeQuestionNumber: string;
    change: string;
    chunkLoadErrorMessage: {
        heading: string;
        description: string;
        primaryActionText: string;
    };
    claim: string;
    clear: string;
    clientId: string;
    close: string;
    comingSoon: string;
    completed: string;
    configure: string;
    confirm: string;
    contains: string;
    continue: string;
    copyToClipboard: string;
    createdOn: string;
    create: string;
    dangerZone: string;
    darkMode: string;
    delete: string;
    description: string;
    deviceModel: string;
    docs: string;
    documentation: string;
    done: string;
    download: string;
    drag: string;
    duplicateURLError: string;
    edit: string;
    endsWith: string;
    equals: string;
    exitFullScreen: string;
    explore: string;
    export: string;
    featureAvailable: string;
    filter: string;
    finish: string;
    goBackHome: string;
    goFullScreen: string;
    help: string;
    hide: string;
    hidePassword: string;
    identityProviders: string;
    import: string;
    initiator: string;
    ipAddress: string;
    issuer: string;
    lastAccessed: string;
    lastModified: string;
    lastSeen: string;
    lastUpdatedOn: string;
    learnMore: string;
    lightMode: string;
    loading: string;
    loginTime: string;
    logout: string;
    maximize: string;
    maxValidation: string;
    minimize: string;
    minValidation: string;
    more: string;
    myAccount: string;
    name: string;
    new: string;
    next: string;
    operatingSystem: string;
    operations: string;
    overview: string;
    personalInfo: string;
    pin: string;
    pinned: string;
    preview: string;
    previous: string;
    priority: string;
    privacy: string;
    properties: string;
    ready: string;
    regenerate: string;
    register: string;
    removeAll: string;
    reject: string;
    release: string;
    remove: string;
    reserved: string;
    resetFilters: string;
    retry: string;
    revoke: string;
    revokeAll: string;
    required: string;
    samples: string;
    save: string;
    services: string;
    sdks: string;
    search: string;
    searching: string;
    security: string;
    settings: string;
    setup: string;
    show: string;
    showAll: string;
    showLess: string;
    showMore: string;
    showPassword: string;
    skip: string;
    generatePassword: string;
    startsWith: string;
    step: string;
    submit: string;
    switch: string;
    technologies: string;
    terminate: string;
    terminateAll: string;
    terminateSession: string;
    type: string;
    unpin: string;
    unpinned: string;
    update: string;
    user: string;
    verify: string;
    view: string;
    weakPassword: string;
    good: string;
    strong: string;
    weak: string;
    tooShort: string;
    okay: string;
    enabled: string;
    disabled: string;
    enable: string;
    disable: string;
    networkErrorMessage: {
        heading: string;
        description: string;
        primaryActionText: string;
    };
    noResultsFound: string;
    pressEnterPrompt: string;
}
