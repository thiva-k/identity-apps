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

import { IDPNS } from "../../../models";

/**
 * NOTES: No need to care about the max-len for this file since it's easier to
 * translate the strings to other languages easily with editor translation tools.
 * sort-keys is suppressed temporarily until the existing warnings are fixed.
 */
/* eslint-disable max-len */
/* eslint-disable sort-keys */
export const idp: IDPNS = {
    console: {
        applicationRoles: {
            assign: "Assign",
            assignGroupWizard: {
                heading: "Assign Groups",
                subHeading: "Assign groups to the application role."
            },
            authenticatorGroups: {
                goToConnections: "Go to Connections",
                groupsList: {
                    assignGroups: "Assign Groups",
                    notifications: {
                        fetchAssignedGroups: {
                            error: {
                                description: "{{description}}",
                                message: "Error occurred while fetching assigned groups"
                            },
                            genericError: {
                                description: "An error occurred while fetching assigned groups.",
                                message: "Something went wrong"
                            }
                        },
                        updateAssignedGroups: {
                            error: {
                                description: "{{description}}",
                                message: "Error occurred while updating assigned groups"
                            },
                            genericError: {
                                description: "An error occurred while updating assigned groups.",
                                message: "Something went wrong"
                            },
                            success: {
                                description: "Successfully updated assigned groups.",
                                message: "Update successful"
                            }
                        }
                    }
                },
                hint:
                    "When assigning external groups to a role, make sure that the connection is enabled in " +
                    "<1>External Grooup Role Resolution Control</1> in the Roles tab of the <3>Application</3>.",
                placeholder: {
                    title: "No External Groups",
                    subTitle: {
                        0: "There are no external groups available at the moment.",
                        1: "You can add a new external group by visiting the " + "Groups tab in a connection."
                    }
                }
            },
            connectorGroups: {
                placeholder: {
                    title: "No External Groups",
                    subTitle: {
                        0: "There are no external groups available at the moment.",
                        1: "Define the groups that you receive from your connections by adding a new group."
                    }
                }
            },
            heading: "Application Roles",
            searchApplication: "Search Application",
            subHeading: "View and assign groups to your application roles.",
            roleGroups: {
                assignGroup: "Assign Group",
                searchGroup: "Search groups",
                placeholder: {
                    title: "No groups assigned",
                    subTitle: {
                        0: "There are no groups assigned to this role.",
                        1: "To assign a group, click on the Assign Group button."
                    }
                },
                notifications: {
                    addGroups: {
                        error: {
                            message: "An error occurred",
                            description: "An error occurred while adding the group."
                        },
                        success: {
                            message: "Group added successfully",
                            description: "The group has been successfully added to the role."
                        }
                    },
                    fetchGroups: {
                        error: {
                            message: "An error occurred",
                            description: "An error occurred while fetching the groups."
                        }
                    }
                },
                confirmation: {
                    deleteRole: {
                        message:
                            "This action is irreversible and will remove " + "the group from the application role.",
                        content:
                            "If you remove this group from the application role, the permissions " +
                            "associated with this role will be removed from the group. Please proceed " +
                            "with caution."
                    }
                }
            },
            roleList: {
                placeholder: {
                    title: "No Application Roles",
                    subTitle: {
                        0: "There are no application roles available at the moment.",
                        1: "You can add a new application role by visiting the " + "Roles tab in an Application."
                    }
                }
            },
            roleMapping: {
                heading: "External groups Role Resolution Control",
                subHeading:
                    "Enable or disable application role resolving from external groups " + "during authentication flow",
                notifications: {
                    sharedApplication: {
                        error: {
                            description: "An error occurred while retrieving the shared applications.",
                            message: "An error occurred"
                        }
                    },
                    updateRole: {
                        error: {
                            description: "{{description}}",
                            message: "Error updating role"
                        },
                        genericError: {
                            description: "An error occurred while updating the role.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the role.",
                            message: "Updated successfully"
                        }
                    }
                }
            },
            roles: {
                heading: "Roles",
                subHeading: "Manage roles and permissions.",
                goBackToRoles: "Go back to Roles",
                orgRoles: {
                    heading: "Organization Roles",
                    subHeading: "Manage organization roles here."
                }
            }
        },
        identityProviderGroups: {
            claimConfigs: {
                groupAttributeLabel: "Group attribute",
                groupAttributeHint:
                    "The attribute from the connection that will be mapped to the organization's group attribute.",
                groupAttributePlaceholder: "Enter mapped attribute",
                groupAttributeMessage1:
                    "Please be aware that the attribute selected in the <1>Attributes tab</1> as the group attribute is used to identify groups at the Connection.",
                groupAttributeMessage2:
                    "For modifications to the group attribute, please visit the <1>Attributes tab</1>.",
                groupAttributeMessageOIDC:
                    "Please note that OpenID Connect attribute named <1>{{attribute}}</1> will be considered as the default " +
                    "<1>Group Attribute</1> as you have not added a custom attribute.",
                groupAttributeMessageSAML:
                    "Please note that <1>{{attribute}}</1> attribute will be considered as the default " +
                    "<1>Group Attribute</1> as you have not added a custom attribute.",
                notifications: {
                    fetchConfigs: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while fetching claim configurations"
                        },
                        genericError: {
                            description: "An error occurred while fetching claim configurations.",
                            message: "An error occurred"
                        }
                    }
                }
            },
            createGroupWizard: {
                groupNameLabel: "Group Name",
                groupNamePlaceHolder: "Enter a group name",
                groupNameHint:
                    "This should correspond to the name of the groups that will be returned " + "from your connection.",
                subHeading: "Create a new connection group.",
                notifications: {
                    createIdentityProviderGroup: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while creating the connection group"
                        },
                        genericError: {
                            description: "An error occurred while creating the connection group.",
                            message: "An error occurred"
                        },
                        success: {
                            description: "The connection group has been created successfully.",
                            message: "Successfully created"
                        }
                    },
                    duplicateGroupError: {
                        error: {
                            description: "A group with the same name already exists.",
                            message: "Error occurred"
                        }
                    }
                }
            },
            groupsList: {
                confirmation: {
                    deleteGroup: {
                        message: "This action is irreversible.",
                        content:
                            "This action will permanently delete the {{groupName}} identity provider group. " +
                            "Please proceed with caution"
                    }
                },
                newGroup: "New Group",
                noGroupsAvailable: "No groups available",
                notifications: {
                    fetchGroups: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while fetching identity provider groups"
                        },
                        genericError: {
                            description: "An error occurred while retrieving identity provider groups.",
                            message: "An error occurred"
                        }
                    },
                    deleteGroup: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while deleting the identity provider group"
                        },
                        genericError: {
                            description: "An error occurred while deleting the identity provider group.",
                            message: "An error occurred"
                        },
                        success: {
                            description: "The identity provider group has been deleted successfully.",
                            message: "Successfully deleted"
                        }
                    }
                },
                searchByName: "Search by name"
            }
        }
    },
    develop: {
        emailProviders: {
            configureEmailTemplates: "Configure Email Templates",
            heading: "Email Provider",
            subHeading: "Configure a SMTP server to send emails to your users with your own email address.",
            description: "Configure the email provider settings according to your SMTP server.",
            note: "Email provider for the super organization can only be configured through <1>deployment.toml</1>",
            info: "You can customize the email content using <1>Email Templates</1>.",
            updateButton: "Update",
            sendTestMailButton: "Send Test Email",
            goBack: "Go back to Email & SMS",
            confirmationModal: {
                assertionHint: "Please confirm your action.",
                content:
                    "If you delete this configuration, the emails will be sent from the Asgardeo Email Address. " +
                    "Please proceed with caution.",
                header: "Are you sure?",
                message: "This action is irreversible and will permanently delete the email provider configurations."
            },
            dangerZoneGroup: {
                header: "Danger Zone",
                revertConfig: {
                    heading: "Revert Configurations",
                    subHeading:
                        "This action will revert mail server configurations to default configurations. " +
                        "Once reverted, you will receive emails from the Asgardeo domain.",
                    actionTitle: "Revert"
                }
            },
            form: {
                smtpServerHost: {
                    label: "Server Host",
                    placeholder: "Enter a server host",
                    hint:
                        "The Server Host usually begins with <1>smtp</1>, followed by the domain name of the email service provider."
                },
                smtpPort: {
                    label: "Server Port",
                    placeholder: "Enter a port number",
                    hint: "For security reasons, we currently support port <1>587</1> only."
                },
                fromAddress: {
                    label: "From Address",
                    placeholder: "Enter an email address",
                    hint:
                        "The From Address is the email address you want to appear as the sender of your " +
                        "outgoing emails. This should be an email address that you have access."
                },
                replyToAddress: {
                    label: "Reply-To Address",
                    placeholder: "Enter an email address",
                    hint:
                        "The Reply-To Address is used to specify the email address that recipients should use if " +
                        "they want to reply to your message."
                },
                userName: {
                    label: "Username",
                    placeholder: "Enter a username",
                    hint:
                        "The SMTP username is usually the same as your email address. However, some email " +
                        "service providers use a different username for your SMTP settings."
                },
                password: {
                    label: "Password",
                    placeholder: "Enter a password",
                    hint:
                        "The SMTP password is a security credential that is used to authenticate and verify your " +
                        "identity when sending emails through the SMTP server."
                },
                displayName: {
                    label: "Display Name",
                    placeholder: "Enter a display name",
                    hint:
                        "The Display Name is used to specify the name that recipients will see in their email " +
                        "inbox when they receive your message."
                },
                validations: {
                    required: "This field cannot be empty",
                    portInvalid: "The port number is invalid",
                    emailInvalid: "The email address is invalid"
                }
            },
            notifications: {
                getConfiguration: {
                    error: {
                        message: "Error Occurred",
                        description: "Error retrieving the email provider configurations."
                    }
                },
                deleteConfiguration: {
                    error: {
                        message: "Error Occurred",
                        description: "Error deleting the email provider configurations."
                    },
                    success: {
                        message: "Revert Successful",
                        description: "Successfully reverted the email provider configurations."
                    }
                },
                updateConfiguration: {
                    error: {
                        message: "Error Occurred",
                        description: "Error updating the email provider configurations."
                    },
                    success: {
                        message: "Update Successful",
                        description: "Successfully updated the email provider configurations."
                    }
                }
            }
        },
        features: {
            applications: {
                addWizard: {
                    steps: {
                        generalSettings: {
                            heading: "General Settings"
                        },
                        protocolConfig: {
                            heading: "Protocol Configuration"
                        },
                        protocolSelection: {
                            heading: "Protocol Selection"
                        },
                        summary: {
                            heading: "Summary",
                            sections: {
                                accessURL: {
                                    heading: "Access URL"
                                },
                                applicationQualifier: {
                                    heading: "Application qualifier"
                                },
                                assertionURLs: {
                                    heading: "Assertion consumer URL(s)"
                                },
                                audience: {
                                    heading: "Audience"
                                },
                                callbackURLs: {
                                    heading: "Authorized redirect URIs"
                                },
                                certificateAlias: {
                                    heading: "Certificate alias"
                                },
                                discoverable: {
                                    heading: "Discoverable"
                                },
                                grantType: {
                                    heading: "Grant Type(s)"
                                },
                                issuer: {
                                    heading: "Issuer"
                                },
                                metaFile: {
                                    heading: "Meta File(Base64Encoded)"
                                },
                                metadataURL: {
                                    heading: "Metadata URL"
                                },
                                public: {
                                    heading: "Public"
                                },
                                realm: {
                                    heading: "Realm"
                                },
                                renewRefreshToken: {
                                    heading: "Renew RefreshToken"
                                },
                                replyTo: {
                                    heading: "Reply To"
                                }
                            }
                        }
                    }
                },
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "E.g. Name, Description etc."
                            },
                            filterCondition: {
                                placeholder: "E.g. Starts with etc."
                            },
                            filterValue: {
                                placeholder: "Enter value to search"
                            }
                        }
                    },
                    placeholder: "Search applications by name, client ID, or issuer"
                },
                confirmations: {
                    addSocialLogin: {
                        content:
                            "To add a new social login, we will need to route you to a different page and " +
                            "any unsaved changes in this page will be lost. Please confirm.",
                        header: "Do you want to continue?",
                        subHeader: "You will lose any unsaved changes."
                    },
                    certificateDelete: {
                        assertionHint: "Please confirm your action.",
                        content: "N/A",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the certificate.",
                        primaryAction: "Delete",
                        secondaryAction: "Cancel"
                    },
                    changeProtocol: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "This action is irreversible and will permanently remove " +
                            "the current protocol configurations",
                        header: "Are you sure?",
                        message:
                            "If you change to a different protocol, {{ name }} configurations " +
                            "will be removed. Please proceed with caution."
                    },
                    clientSecretHashDisclaimer: {
                        forms: {
                            clientIdSecretForm: {
                                clientId: {
                                    hide: "Hide ID",
                                    label: "Client ID",
                                    placeholder: "Client ID",
                                    show: "Show ID",
                                    validations: {
                                        empty: "This is a required field."
                                    }
                                },
                                clientSecret: {
                                    hide: "Hide secret",
                                    label: "Client secret",
                                    placeholder: "Client secret",
                                    show: "Show secret",
                                    validations: {
                                        empty: "This is a required field."
                                    }
                                }
                            }
                        },
                        modal: {
                            assertionHint: "",
                            content: "",
                            header: "OAuth Application Credentials",
                            message:
                                "The consumer secret value will be displayed in plain text only once. " +
                                "Please make sure to copy and save it somewhere safe."
                        }
                    },
                    deleteApplication: {
                        assertionHint: "Please confirm your action.",
                        content: "This action is irreversible and will permanently delete the application.",
                        header: "Are you sure?",
                        message:
                            "If you delete this application, authentication flows for this application will " +
                            "stop working. Please proceed with caution."
                    },
                    deleteChoreoApplication: {
                        assertionHint: "Please confirm your action.",
                        content:
                            "Deleting this application will break the authentication flows and cause the " +
                            "associated Choreo application to be unusable with its credentials. " +
                            "<1>Proceed at your own risk.</1>",
                        header: "Are you sure?",
                        message:
                            "If you delete this application, authentication flows for this application will " +
                            "stop working. Please proceed with caution."
                    },
                    deleteOutboundProvisioningIDP: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this outbound provisioning IDP, you will not be able to get it back. " +
                            "Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will remove the IDP."
                    },
                    deleteProtocol: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this protocol, you will not be able to get it back. All the " +
                            "applications depending on this also might stop working. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the protocol."
                    },
                    handlerAuthenticatorAddition: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "The authenticator you are trying to add is a handler. Make sure you add " +
                            "authenticators in other steps.",
                        header: "You are adding a Handler",
                        message: "This is a handler."
                    },
                    backupCodeAuthenticatorDelete: {
                        assertionHint: "Click Continue to remove backup code functionality.",
                        content:
                            "If you proceed, the backup code functionality will also be removed from your " +
                            "current authentication step. Do you wish to continue?",
                        header: "Confirm Deletion",
                        message:
                            "This action will remove backup code functionality from the current authentication step."
                    },
                    lowOIDCExpiryTimes: {
                        assertionHint: "Click Confirm to continue with your values.",
                        content:
                            "This means that your tokens may expire too soon. Please recheck your values " +
                            "for the following configuration(s).",
                        header: "Are you sure?",
                        message: "You have entered a value less than 60 seconds for token expiry."
                    },
                    reactivateOIDC: {
                        assertionHint: "Please type <1>{{ id }}</1> to reactivate the application.",
                        content:
                            "If you reactivate the application, a new client secret will be generated. " +
                            "Please update the application client secret on your client application.",
                        header: "Are you sure?",
                        message: ""
                    },
                    reactivateSPA: {
                        assertionHint: "Please type <1>{{ id }}</1> to reactivate the application.",
                        content:
                            "If you reactivate the application, authentication flows for this " +
                            "application will start working. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action can be reversed by revoking the client id later."
                    },
                    regenerateSecret: {
                        assertionHint: "Please type <1>{{ id }}</1> to regenerate the client secret.",
                        content:
                            "If you regenerate the client secret, authentication flows using old client secret " +
                            "for this application will stop working. Please update the application client secret on " +
                            "your client application.",
                        header: "Are you sure?",
                        message:
                            "This action is irreversible and permanently changes the client secret. " +
                            "Please proceed with caution."
                    },
                    removeApplicationUserAttribute: {
                        content:
                            "If you confirm this action, the subject attribute will be set to the default " +
                            "attribute: <1>{{ default }}</1>",
                        header: "Are you sure?",
                        subHeader:
                            "The attribute you are trying to remove is currently selected as the subject " +
                            "attribute."
                    },
                    removeApplicationUserAttributeMapping: {
                        content: "If you confirm this action, you have to select a new subject attribute",
                        header: "Are you sure?",
                        subHeader:
                            "The attribute you are trying to remove is currently selected as the subject " +
                            "attribute."
                    },
                    revokeApplication: {
                        assertionHint: "Please type <1>{{ id }}</1> to confirm.",
                        content: "This action can be reversed by activating the application later.",
                        header: "Are you sure?",
                        message:
                            "If you revoke this application, authentication flows for this application will " +
                            "stop working. Please proceed with caution."
                    }
                },
                dangerZoneGroup: {
                    deleteApplication: {
                        actionTitle: "Delete",
                        header: "Delete application",
                        subheader:
                            "Once the application is deleted, it cannot be recovered and the clients " +
                            "using this application will no longer work."
                    },
                    header: "Danger Zone"
                },
                edit: {
                    sections: {
                        access: {
                            addProtocolWizard: {
                                heading: "Add Protocol",
                                steps: {
                                    protocolSelection: {
                                        manualSetup: {
                                            emptyPlaceholder: {
                                                subtitles: "All the protocols have been configured",
                                                title: "No templates available"
                                            },
                                            heading: "Manual Setup",
                                            subHeading: "Add an protocol with custom configurations"
                                        },
                                        quickSetup: {
                                            emptyPlaceholder: {
                                                subtitles: "All the protocols have been configured",
                                                title: "No templates available"
                                            },
                                            heading: "Quick Setup",
                                            subHeading: "Get protocol configuration from a template"
                                        }
                                    }
                                },
                                subHeading: "Add new protocol to {{appName}} application"
                            },
                            protocolLanding: {
                                heading: "Which protocol are you using?",
                                subHeading: "Select the protocol for your application to connect."
                            },
                            tabName: "Protocol"
                        },
                        advanced: {
                            tabName: "Advanced"
                        },
                        attributes: {
                            attributeMappingChange: {
                                error: {
                                    description: "The mapped user attributes were changed to default values.",
                                    message: "User Attribute Mapping Changed"
                                }
                            },
                            emptySearchResults: {
                                subtitles: {
                                    0: "We couldn't find any results for '{{ searchQuery }}'",
                                    1: "Please try a different search term."
                                },
                                title: "No results found"
                            },
                            forms: {
                                fields: {
                                    dynamic: {
                                        applicationRole: {
                                            label: "Application Role",
                                            validations: {
                                                duplicate: "This role is already mapped. Please select another role",
                                                empty: "Please enter an attribute to map to"
                                            }
                                        },
                                        localRole: {
                                            label: "Local Role",
                                            validations: {
                                                empty: "Please enter the local role"
                                            }
                                        }
                                    }
                                }
                            },
                            roleMapping: {
                                heading: "Role Mapping"
                            },
                            selection: {
                                addWizard: {
                                    header: "Select User Attributes",
                                    steps: {
                                        select: {
                                            transfer: {
                                                headers: {
                                                    attribute: "Select All User Attributes"
                                                },
                                                searchPlaceholders: {
                                                    attribute: "Search user attribute",
                                                    role: "Search Role"
                                                }
                                            }
                                        }
                                    },
                                    subHeading: "Select which user attributes you want to share with the application."
                                },
                                attributeComponentHint:
                                    "Use <1>OpenID Connect Scopes</1> to manage user attribute in a scope. " +
                                    "You can add new attributes by navigating to <3>Attributes.</3>",
                                attributeComponentHintAlt:
                                    "Manage the user attributes you want to share with this" +
                                    " application. You can add new attributes and mappings by navigating to " +
                                    "<1>Attributes.</1>",
                                description:
                                    "Select scopes, i.e grouped user attributes that are allowed to be shared with this " +
                                    "application.",
                                heading: "User Attribute Selection",
                                scopelessAttributes: {
                                    description: "View attributes without a scope",
                                    displayName: "Attributes without a scope",
                                    name: "",
                                    hint:
                                        "Cannot retrieve these user attributes by requesting " +
                                        "OIDC scopes. To retrieve, add the required attributes to a relevant scope."
                                },
                                selectedScopesComponentHint:
                                    "Request these scopes from your application to retrieve " +
                                    "the selected user attributes.",
                                howToUseScopesHint: "How to use Scopes",
                                mandatoryAttributeHint:
                                    "Mark which user attributes are mandatory to be shared " +
                                    "with the application. At login, {{productName}} prompts the user to enter these " +
                                    "attribute values, if not already provided in the user's profile.",
                                mappingTable: {
                                    actions: {
                                        enable: "Enable attribute name mapping"
                                    },
                                    columns: {
                                        appAttribute: "Mapped user attribute",
                                        attribute: "User Attribute",
                                        mandatory: "Mandatory",
                                        requested: "Requested"
                                    },
                                    listItem: {
                                        actions: {
                                            makeMandatory: "Make mandatory",
                                            makeRequested: "Make requested",
                                            makeScopeRequested: "Make Scope requested",
                                            removeMandatory: "Remove mandatory",
                                            removeRequested: "Remove requested",
                                            removeScopeRequested: "Remove Scope Requested",
                                            subjectDisabledSelection:
                                                "This attribute is mandatory because it " + "is the subject attribute."
                                        },
                                        faultyAttributeMapping: "Missing OpenID Connect Attribute Mapping",
                                        faultyAttributeMappingHint:
                                            "Attribute value will not be shared to the" +
                                            " application at the user login.",
                                        fields: {
                                            claim: {
                                                label: "Please enter a value",
                                                placeholder: "eg: custom {{name}}, new {{name}}"
                                            }
                                        }
                                    },
                                    mappedAtributeHint:
                                        "Enter the custom attribute name to be used in " +
                                        "the assertion sent to the application.",
                                    mappingRevert: {
                                        confirmPrimaryAction: "Confirm",
                                        confirmSecondaryAction: "Cancel",
                                        confirmationContent:
                                            "The mapped custom attributes will change  " +
                                            "back to the default attribute values. " +
                                            "Please proceed with caution since you will not be able to " +
                                            "retrieve the mapped custom attribute values.",
                                        confirmationHeading: "Are you sure?",
                                        confirmationMessage:
                                            "This action will revert mapped custom attribute " +
                                            "values to default values."
                                    },
                                    searchPlaceholder: "Search user attributes by name, display name or scope details"
                                },
                                selectAll: "Select all attributes"
                            },
                            tabName: "User Attributes"
                        },
                        general: {
                            tabName: "General"
                        },
                        info: {
                            oidcHeading: "Server Endpoints",
                            oidcSubHeading:
                                "The following server endpoints will be useful for you to implement and " +
                                "configure authentication for your application using OpenID Connect.",
                            samlHeading: "Connection Details",
                            samlSubHeading:
                                "The following IdP details will be useful for you to implement and " +
                                "configure authentication for your application using SAML 2.0.",
                            wsFedHeading: "Connection Details",
                            wsFedSubHeading:
                                "The following IdP details will be useful for you to implement and " +
                                "configure authentication for your application using WS-Federation.",
                            tabName: "Info"
                        },
                        protocol: {
                            title: "Protocol Configuration",
                            subtitle: "Configure the protocol for your application.",
                            button: "Configure Protocol"
                        },
                        provisioning: {
                            inbound: {
                                heading: "Inbound Provisioning",
                                subHeading:
                                    "Provision users or groups to a WSO2 Identity Server’s user store via " +
                                    "this application."
                            },
                            outbound: {
                                actions: {
                                    addIdp: "New Provisioner"
                                },
                                addIdpWizard: {
                                    errors: {
                                        noProvisioningConnector:
                                            "The selected provisioner doesn't have" + " any provisioning connectors."
                                    },
                                    heading: "Add Outbound Provisioner",
                                    steps: {
                                        details: "Provisioner Details"
                                    },
                                    subHeading:
                                        "Select the provisioner to provision users that self-register to" +
                                        " your application."
                                },
                                heading: "Outbound Provisioning",
                                subHeading:
                                    "Configure a provisioner to outbound provision the users of this " + "application."
                            },
                            tabName: "Provisioning"
                        },
                        sharedAccess: {
                            subTitle: "Select the following options to share the application with the organizations.",
                            tabName: "Shared Access"
                        },
                        shareApplication: {
                            addSharingNotification: {
                                genericError: {
                                    description: "Application sharing failed. Please try again",
                                    message: "Application sharing failed!"
                                },
                                success: {
                                    description: "Application shared with the organization(s) successfully",
                                    message: "Application shared!"
                                }
                            },
                            getSharedOrganizations: {
                                genericError: {
                                    description: "Getting shared organization list failed!",
                                    message: "Getting Shared Organization list failed!"
                                }
                            },
                            heading: "Share Application",
                            shareApplication: "Share Application",
                            stopSharingNotification: {
                                genericError: {
                                    description: "Application sharing stop failed for {{organization}}",
                                    message: "Application sharing stop failed!"
                                },
                                success: {
                                    description: "Application sharing stopped with the {{organization}} successfully",
                                    message: "Application shared stopped successfully!"
                                }
                            },
                            stopAllSharingNotification: {
                                genericError: {
                                    description: "Application sharing stop failed for all organizations",
                                    message: "Application sharing stop failed!"
                                },
                                success: {
                                    description: "Application sharing stopped with all the organizations successfully",
                                    message: "Application sharing stopped successfully!"
                                }
                            },
                            switchToSelectiveShareFromSharingWithAllSuborgsWarning:
                                "Switching from sharing the app with all organizations to " +
                                "sharing with selected organizations will " +
                                "reset the application configurations in all organizations."
                        },
                        signOnMethod: {
                            sections: {
                                authenticationFlow: {
                                    heading: "Authentication flow",
                                    sections: {
                                        scriptBased: {
                                            accordion: {
                                                title: {
                                                    description: "Add conditions to your login flow.",
                                                    heading: "Conditional Authentication"
                                                }
                                            },
                                            conditionalAuthTour: {
                                                steps: {
                                                    0: {
                                                        content: {
                                                            0:
                                                                "Define a script to dynamically modify the login " +
                                                                "flow based on the context",
                                                            1:
                                                                "Click on the <1>Next</1> button to learn about the " +
                                                                "process."
                                                        },
                                                        heading: "Conditional Authentication"
                                                    },
                                                    1: {
                                                        content: {
                                                            0:
                                                                "Click on this button to add the required " +
                                                                "authentication options to the step."
                                                        },
                                                        heading: "Add Authentication"
                                                    },
                                                    2: {
                                                        content: {
                                                            0:
                                                                "Click here if you need to add more steps to the " +
                                                                "flow. Once you add a new step, <1>executeStep" +
                                                                "(STEP_NUMBER);</1> will appear on the script editor."
                                                        },
                                                        heading: "Add New Step"
                                                    }
                                                }
                                            },
                                            editor: {
                                                apiDocumentation: "API",
                                                changeConfirmation: {
                                                    content:
                                                        "The selected template will replace the existing " +
                                                        "script in the editor as well as the login steps you " +
                                                        "configured. Click <1>Confirm</1> to proceed.",
                                                    heading: "Are you sure?",
                                                    message: "This action is irreversible."
                                                },
                                                goToApiDocumentation: "Go to API Documentation",
                                                resetConfirmation: {
                                                    content:
                                                        "This action will reset the the existing script " +
                                                        "in the editor back to default. Click <1>Confirm</1> " +
                                                        "to proceed.",
                                                    heading: "Are you sure?",
                                                    message: "This action is irreversible."
                                                },
                                                templates: {
                                                    darkMode: "Dark Mode",
                                                    heading: "Templates"
                                                }
                                            },
                                            heading: "Script-based configuration",
                                            hint:
                                                "Define the authentication flow via an adaptive script. You can " +
                                                "select one of the templates fom the panel to get started.",
                                            secretsList: {
                                                create: "Create new secret",
                                                emptyPlaceholder: "No secrets available",
                                                search: "Search by secret name",
                                                tooltips: {
                                                    keyIcon:
                                                        "Securely store access keys as secrets. A secret can " +
                                                        "replace the consumer secret in <1>callChoreo()</1> function " +
                                                        "in the conditional authentication scripts.",
                                                    plusIcon: "Add to the script"
                                                }
                                            }
                                        },
                                        stepBased: {
                                            actions: {
                                                addAuthentication: "Add Authentication",
                                                addNewStep: "Add new step",
                                                addStep: "New Authentication Step",
                                                selectAuthenticator: "Select an Authenticator"
                                            },
                                            addAuthenticatorModal: {
                                                content: {
                                                    addNewAuthenticatorCard: {
                                                        title: "Configure New Connection"
                                                    },
                                                    authenticatorGroups: {
                                                        basic: {
                                                            description:
                                                                "Set of basic authenticators supported by " +
                                                                "{{productName}}.",
                                                            heading: "Basic"
                                                        },
                                                        enterprise: {
                                                            description: "Enterprise login via standard protocols.",
                                                            heading: "Enterprise login"
                                                        },
                                                        mfa: {
                                                            description:
                                                                "Add additional layer of security to your " +
                                                                "login flow.",
                                                            heading: "Multi-factor"
                                                        },
                                                        social: {
                                                            description: "Use existing social login account.",
                                                            heading: "Social login"
                                                        },
                                                        backupCodes: {
                                                            description: "Two-factor authentication recovery option.",
                                                            heading: "MFA Recovery"
                                                        }
                                                    },
                                                    goBackButton: "Go back to selection",
                                                    search: {
                                                        placeholder: "Search for Authenticators"
                                                    },
                                                    stepSelectDropdown: {
                                                        hint: "Select the step that you want to add authenticators to.",
                                                        label: "Select step",
                                                        placeholder: "Select step"
                                                    }
                                                },
                                                description: null,
                                                heading: "Add Authentication",
                                                primaryButton: null,
                                                secondaryButton: null
                                            },
                                            authenticatorDisabled:
                                                "You need to configure this authenticator by " +
                                                "providing client id & secret, to use with your applications.",
                                            firstFactorDisabled:
                                                "Identifier First authenticator and Username & " +
                                                "Password authenticator cannot be added to the same step.",
                                            forms: {
                                                fields: {
                                                    attributesFrom: {
                                                        label: "Pick attributes from this step",
                                                        placeholder: "Select step"
                                                    },
                                                    subjectIdentifierFrom: {
                                                        label: "Pick user identifier from this step",
                                                        placeholder: "Select step"
                                                    },
                                                    enableBackupCodes: {
                                                        label: "Enable backup codes"
                                                    }
                                                }
                                            },
                                            heading: "Step-based configuration",
                                            hint:
                                                "Create a user login flow by dragging authenticators on to the " +
                                                "relevant steps.",
                                            secondFactorDisabled:
                                                "Second factor authenticators " +
                                                "can be used only if <1>User name and password " +
                                                "password</1>, <3>Social Login</3> or any other handler" +
                                                "which can handle these factors are" +
                                                "present in a previous step.",
                                            secondFactorDisabledDueToProxyMode:
                                                "To configure <1>{{auth}}</1>," +
                                                " you should enable the Just-in-Time provisioning" +
                                                " setting from the following connections.",
                                            secondFactorDisabledInFirstStep:
                                                "Second factor authenticators can " + "not be used in the first step.",
                                            backupCodesDisabled:
                                                "Backup code authenticator can only be used if multi factor " +
                                                "authenticators are present in the current step.",
                                            backupCodesDisabledInFirstStep:
                                                "Backup code authenticator cannot be used " + "in the first step.",
                                            federatedSMSOTPConflictNote: {
                                                multipleIdps:
                                                    "Asgardeo requires the user's profile containing" +
                                                    " the <1>mobile number</1> to configure <3>SMS OTP</3> with the" +
                                                    " following connections.",
                                                singleIdp:
                                                    "Asgardeo requires the user's profile containing the" +
                                                    " <1>mobile number</1> to configure <3>SMS OTP</3> with" +
                                                    " <5>{{idpName}}</5> connection."
                                            },
                                            sessionExecutorDisabledInFirstStep:
                                                "Active sessions limit handler require " +
                                                "having a basic authenticator in a prior step.",
                                            sessionExecutorDisabledInMultiOptionStep:
                                                "Active sessions limit handler cannot be " +
                                                "added to a multi option step."
                                        }
                                    }
                                },
                                customization: {
                                    heading: "Customize Login Flow",
                                    revertToDefaultButton: {
                                        hint: "Revert back to the default configuration (Username & Password)",
                                        label: "Revert to default"
                                    }
                                },
                                landing: {
                                    defaultConfig: {
                                        description: {
                                            0: "This application is configured with <1>Username & Password</1> Login",
                                            1:
                                                "Select one of the options available on the right side to begin " +
                                                "customizing."
                                        },
                                        heading: "This application is configured with Username & Password Login"
                                    },
                                    flowBuilder: {
                                        addMissingSocialAuthenticatorModal: {
                                            content: {
                                                body:
                                                    "You do not have an active Social " +
                                                    "Connection configured with " +
                                                    "<1>{{authenticator}} Authenticator</1>. Click on the " +
                                                    "<3>Configure</3> button to register" +
                                                    " a new <5>{{authenticator}} " +
                                                    "Social Connection</5> or navigate to the <7>Connections</7>" +
                                                    " section manually.",
                                                message: "No active {{authenticator}} Social " + "Connection configured"
                                            },
                                            description: "",
                                            heading: "Configure {{authenticator}} Social Connection",
                                            primaryButton: "Configure",
                                            secondaryButton: "Cancel"
                                        },
                                        duplicateSocialAuthenticatorSelectionModal: {
                                            content: {
                                                body:
                                                    "You have multiple Social Connections configured with <1>" +
                                                    "{{authenticator}} Authenticator</1>. Select the desired one " +
                                                    "from the selection below to proceed.",
                                                message:
                                                    "Multiple Social Connections found with {{authenticator}} " +
                                                    "Authenticator."
                                            },
                                            description: "",
                                            heading: "Select {{authenticator}} Social Connection",
                                            primaryButton: "Continue",
                                            secondaryButton: "Cancel"
                                        },
                                        heading: "Build your own login flow",
                                        headings: {
                                            default: "Default Login",
                                            multiFactorLogin: "Multi-factor Login",
                                            passwordlessLogin: "Passwordless Login",
                                            socialLogin: "Social Login"
                                        },
                                        types: {
                                            apple: {
                                                description: "Enable users to login with Apple ID.",
                                                heading: "Add Apple login"
                                            },
                                            defaultConfig: {
                                                description:
                                                    "Build your login flow starting with Username & " +
                                                    "Password login.",
                                                heading: "Start with default configuration"
                                            },
                                            facebook: {
                                                description: "Enable users to login with Facebook.",
                                                heading: "Add Facebook login"
                                            },
                                            github: {
                                                description: "Enable users to login with GitHub.",
                                                heading: "Add GitHub login"
                                            },
                                            google: {
                                                description: "Enable users to login with Google.",
                                                heading: "Add Google login"
                                            },
                                            idf: {
                                                tooltipText:
                                                    "The identifier first authenticator does not verify" +
                                                    " the user's identity, and hence cannot be used to pick the" +
                                                    " user identity or attributes. To do so, enable validations" +
                                                    " using an authentication script."
                                            },
                                            magicLink: {
                                                description:
                                                    "Enable users to log in using a magic " +
                                                    "link sent to their email.",
                                                heading: "Add Magic Link login"
                                            },
                                            microsoft: {
                                                description: "Enable users to login with Microsoft.",
                                                heading: "Add Microsoft login"
                                            },
                                            totp: {
                                                description:
                                                    "Enable additional authentication layer with Time " + "based OTP.",
                                                heading: "Add TOTP as a second factor"
                                            },
                                            usernameless: {
                                                description:
                                                    "Enable users to log in using a passkey, FIDO security key or " +
                                                    "biometrics.",
                                                heading: "Add Passkey Login",
                                                info:
                                                    "On-the-fly passkey enrollment is available exclusively " +
                                                    "for FIDO2 supported passkeys and further users wishing to enroll " +
                                                    "multiple passkeys, they must do so via MyAccount."
                                            },
                                            passkey: {
                                                description:
                                                    "Enable users to log in using a passkey, FIDO security key or " +
                                                    "biometrics.",
                                                heading: "Add Passkey Login",
                                                info: {
                                                    progressiveEnrollmentEnabled:
                                                        "Passkey progressive enrollment is enabled.",
                                                    passkeyAsFirstStepWhenprogressiveEnrollmentEnabled:
                                                        "<0>Note : </0> For " +
                                                        "on-the-fly user enrollment with passkeys, use the <2>Passkeys Progressive " +
                                                        "Enrollment</2> template in <4>Conditional Authentication</4> section.",
                                                    passkeyIsNotFirstStepWhenprogressiveEnrollmentEnabled:
                                                        "Users can enroll " +
                                                        "passkeys on-the-fly. If users wish to enroll multiple passkeys they should do " +
                                                        "so via <1>My Account</1>.",
                                                    progressiveEnrollmentEnabledCheckbox:
                                                        "<0>Note : </0> When setting " +
                                                        "the Passkey in the <2>first step</2>, users need to add an adaptive " +
                                                        "script. Use the <4>Passkeys Progressive Enrollment</4> template in " +
                                                        "the <6>Sign-In-Method</6> tab of the application.",
                                                    progressiveEnrollmentDisabled:
                                                        "Passkey progressive enrollment is disabled. " +
                                                        "Users must enroll their passkeys through <1>My Account</1> to use passwordless sign-in."
                                                }
                                            },
                                            emailOTP: {
                                                description:
                                                    "Enable additional authentication layer with Email based OTP.",
                                                heading: "Add Email OTP as a second factor"
                                            },
                                            smsOTP: {
                                                description:
                                                    "Enable additional authentication layer with SMS based OTP.",
                                                heading: "Add SMS OTP as a second factor"
                                            },
                                            emailOTPFirstFactor: {
                                                description:
                                                    "Enable users to log in using a one-time passcode " +
                                                    "sent to their email.",
                                                heading: "Add Email OTP login"
                                            }
                                        }
                                    }
                                },
                                requestPathAuthenticators: {
                                    notifications: {
                                        getRequestPathAuthenticators: {
                                            error: {
                                                description: "{{ description }}",
                                                message: "Retrieval Error"
                                            },
                                            genericError: {
                                                description:
                                                    "An error occurred while retrieving request path " +
                                                    "authenticators.",
                                                message: "Retrieval Error"
                                            },
                                            success: {
                                                description: "",
                                                message: ""
                                            }
                                        }
                                    },
                                    subTitle: "Local authenticators for request path authentication.",
                                    title: "Request Path Authentication"
                                },
                                templateDescription: {
                                    description: {
                                        code: "Code",
                                        defaultSteps: "Default Steps",
                                        description: "Description",
                                        helpReference: "Help Reference",
                                        parameters: "Parameters",
                                        prerequisites: "Prerequisites"
                                    },
                                    popupContent: "More details"
                                }
                            },
                            tabName: "Login Flow"
                        },
                        apiAuthorization: {
                            m2mPolicyMessage:
                                "All the authorized scopes of an API resource are available for an M2M application despite the authorization policy specified for the resource."
                        },
                        roles: {
                            createApplicationRoleWizard: {
                                title: "Create Application Role",
                                subTitle: "Create a new application role in the system.",
                                button: "New Role"
                            }
                        }
                    }
                },
                forms: {
                    advancedAttributeSettings: {
                        sections: {
                            linkedAccounts: {
                                errorAlert: {
                                    message: "Invalid configuration",
                                    description:
                                        "Linked local account validation should be enabled to mandate a linked local account"
                                },
                                heading: "Linked Accounts",
                                descriptionFederated:
                                    "Enable to retrieve user attributes of the linked local account during federated authentication.",
                                fields: {
                                    validateLocalAccount: {
                                        label: "Prioritize local account attributes",
                                        hint:
                                            "If a linked local account exists, its attributes are returned. Otherwise, " +
                                            "attributes of the federated identity are returned."
                                    },
                                    mandateLocalAccount: {
                                        label: "Mandate linked local account",
                                        hint:
                                            "Authentication will fail in token exchange grant if there is no linked local account with the federated identity."
                                    }
                                }
                            },
                            role: {
                                fields: {
                                    role: {
                                        hint:
                                            "This option will append the user store domain that the user resides to" +
                                            " role",
                                        label: "Include user domain",
                                        validations: {
                                            empty: "Select the role attribute"
                                        }
                                    },
                                    roleAttribute: {
                                        hint: "Choose the attribute",
                                        label: "Role attribute",
                                        validations: {
                                            empty: "Select the role attribute"
                                        }
                                    }
                                },
                                heading: "Role"
                            },
                            subject: {
                                fields: {
                                    alternateSubjectAttribute: {
                                        hint:
                                            "This option will allow to use an alternate attribute as the subject identifier instead of the <1>userid</1>.",
                                        label: "Assign alternate subject identifier"
                                    },
                                    subjectAttribute: {
                                        hint:
                                            "Select which of the shared attributes you want to use as the" +
                                            " subject identifier of the user",
                                        hintOIDC:
                                            "Select which of the shared attributes you want to use as the" +
                                            " subject identifier of the user. This represents the <1>sub</1> claim of" +
                                            " the <1>id_token</1>.",
                                        hintSAML:
                                            "Select which of the shared attributes you want to use as the" +
                                            " subject identifier of the user. This represents the <1>subject</1>" +
                                            " element of the SAML assertion.",
                                        label: "Subject attribute",
                                        validations: {
                                            empty: "Select the subject attribute"
                                        }
                                    },
                                    subjectIncludeTenantDomain: {
                                        hint:
                                            "This option will append the organization name to the local subject " +
                                            " identifier",
                                        label: "Include organization name",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    subjectIncludeUserDomain: {
                                        hint:
                                            "This option will append the user store domain that the user resides " +
                                            " in the local subject identifier",
                                        label: "Include user domain",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    subjectUseMappedLocalSubject: {
                                        hint:
                                            "This option will use the local subject identifier when asserting " +
                                            "the identity",
                                        label: "Use mapped local subject",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    subjectType: {
                                        label: "Subject type",
                                        public: {
                                            label: "Public",
                                            hint:
                                                "This option will use the public subject identifier as the" +
                                                " subject. Subject identifier URI is used in subject value" +
                                                " calculation."
                                        },
                                        pairwise: {
                                            label: "Pairwise",
                                            hint:
                                                "Enable pairwise to assign a unique pseudonymous ID " +
                                                "to each client. The subject identifier URI and callback URI or " +
                                                "sector identifier URI is considered in calculating the subject value."
                                        }
                                    },
                                    sectorIdentifierURI: {
                                        label: "Sector Identifier URI",
                                        hint:
                                            "Must configure this value if multiple callback URIs with" +
                                            " different hostnames are configured.",
                                        placeholder: "Enter the subject identifier URI",
                                        validations: {
                                            invalid: "The entered URL is not HTTPS. Please add a valid URL.",
                                            required:
                                                "This field is required if multiple callback URIs are" + " configured."
                                        },
                                        multipleCallbackError:
                                            "Need to configure a sector identifier URI if " +
                                            "multiple callback URLs are configured with subject type pairwise. Go to" +
                                            " User attributes -> Subject to configure the sector identifier URI."
                                    }
                                },
                                heading: "Subject"
                            }
                        }
                    },
                    advancedConfig: {
                        fields: {
                            enableAuthorization: {
                                hint:
                                    "Decides whether authorization policies needs to be engaged during " +
                                    " authentication flows.",
                                label: "Enable authorization",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            returnAuthenticatedIdpList: {
                                hint:
                                    " The list of authenticated Identity Providers will be returned in the " +
                                    "authentication response.",
                                label: "Return authenticated IDP list",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            saas: {
                                hint:
                                    "By default, applications can only be used by users belonging to the " +
                                    "application's organization. If this application is SaaS-enabled, it will be " +
                                    "accessible to all users across all organizations.",
                                label: "SaaS application",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            skipConsentLogin: {
                                hint:
                                    "Once enabled, the page prompt for obtaining user consent will " +
                                    "be skipped for this application during sign in.",
                                label: "Skip login consent",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            skipConsentLogout: {
                                hint:
                                    "Once enabled, the page prompt for obtaining user consent will " +
                                    "be skipped for this application during sign out.",
                                label: "Skip logout consent",
                                validations: {
                                    empty: "This is a required field."
                                }
                            }
                        },
                        sections: {
                            applicationNativeAuthentication: {
                                heading: "Application native authentication",
                                alerts: {
                                    clientAttestation:
                                        "For client attestation to work, the application native authentication API must be enabled."
                                },
                                fields: {
                                    enableAPIBasedAuthentication: {
                                        hint:
                                            "Select to authorize application to perform browserless, in-app authentication via application native authentication API.",
                                        label: "Enable app-native authentication API"
                                    },
                                    enableClientAttestation: {
                                        hint:
                                            "Select to verify the integrity of the application by calling the attestation service of the hosting platform.",
                                        label: "Enable client attestation"
                                    },
                                    android: {
                                        heading: "Android",
                                        fields: {
                                            androidPackageName: {
                                                hint:
                                                    "Enter the package name of your application. It is the unique identifier of your application and is typically in the reverse domain format.",
                                                label: "Package name",
                                                placeholder: "com.example.myapp",
                                                validations: {
                                                    empty:
                                                        "Application package name is required for client attestation."
                                                }
                                            },
                                            androidAttestationServiceCredentials: {
                                                hint:
                                                    "Provide the Google service account credentials in the JSON format. This will be used to access the  Google Play Integrity Service.",
                                                label: "Service account credentials",
                                                placeholder:
                                                    "Content of the JSON key file for the Google service account credentials",
                                                validations: {
                                                    empty:
                                                        "Google service account credentials are required for client attestation."
                                                }
                                            }
                                        }
                                    },
                                    apple: {
                                        heading: "Apple",
                                        fields: {
                                            appleAppId: {
                                                hint:
                                                    "Enter the Apple app ID, the unique identifier assigned by Apple to your app.",
                                                label: "App id",
                                                placeholder: "com.example.myapp"
                                            }
                                        }
                                    }
                                }
                            },
                            certificate: {
                                fields: {
                                    jwksValue: {
                                        description: "The URL used to obtain a JWKS public key.",
                                        label: "URL",
                                        placeholder: "https://myapp.io/jwks",
                                        validations: {
                                            empty: "This is a required field.",
                                            invalid: "Enter a valid URL"
                                        }
                                    },
                                    pemValue: {
                                        actions: {
                                            view: "View certificate info"
                                        },
                                        description: "The text value of the certificate in PEM format.",
                                        hint: "The certificate (in PEM format) of the application.",
                                        label: "Certificate",
                                        placeholder: "Certificate in PEM format.",
                                        validations: {
                                            empty: "This is a required field.",
                                            invalid: "Enter a valid certificate in PEM format"
                                        }
                                    },
                                    type: {
                                        children: {
                                            jwks: {
                                                label: "Use JWKS endpoint"
                                            },
                                            pem: {
                                                label: "Provide certificate"
                                            }
                                        },
                                        label: "Type"
                                    }
                                },
                                heading: "Certificate",
                                hint: {
                                    customOidc:
                                        "This certificate is used to encrypt the <1>id_token</1>" +
                                        " returned after the authentication.",
                                    customPassiveSTS:
                                        "This certificate is used to validate the signatures of the signed requests.",
                                    customSaml:
                                        "This certificate is used to validate the signatures of the " +
                                        "signed requests and to encrypt the SAML assertions returned after " +
                                        "authentication."
                                },
                                invalidOperationModal: {
                                    header: "Operation Invalid",
                                    message:
                                        "You should disable the request signature validation to remove " +
                                        "the certificate. If request or response signing is enabled, " +
                                        "it is essential to have a valid certificate to verify the signature."
                                }
                            }
                        }
                    },
                    generalDetails: {
                        fields: {
                            accessUrl: {
                                hint:
                                    "The landing page URL for this application. It will be used in the application" +
                                    " catalog and discovery flows. If the login page times out, the user will " +
                                    "be redirected to the client application via this URL.",
                                label: "Access URL",
                                placeholder: "https://myapp.io/home",
                                validations: {
                                    empty: "A valid access URL must be provided to make this application discoverable.",
                                    invalid: "Enter a valid URL"
                                },
                                ariaLabel: "Application access URL"
                            },
                            description: {
                                label: "Description",
                                placeholder: "Enter a description for the application"
                            },
                            discoverable: {
                                hint:
                                    "If enabled, customers can access this application from the " +
                                    "<1>{{ myAccount }}</1> portal.",
                                label: "Discoverable application"
                            },
                            imageUrl: {
                                hint:
                                    "An image URL for the application. If this is not provided, we will display " +
                                    "a generated thumbnail instead. Recommended size: 200x200 pixels.",
                                label: "Logo",
                                placeholder: "https://myapp-resources.io/my_app_image.png",
                                validations: {
                                    invalid: "This is not a valid image URL"
                                }
                            },
                            isSharingEnabled: {
                                hint:
                                    "If enabled, it will share this application with all or any selected organizations " +
                                    "that belong to your root organization.",
                                label: "Allow sharing with organizations"
                            },
                            isManagementApp: {
                                hint: "Enable to allow the application to access management API of this organization.",
                                label: "Management Application"
                            },
                            isFapiApp: {
                                hint: "Enable to allow the application to be FAPI compliant.",
                                label: "FAPI Compliant Application"
                            },
                            name: {
                                label: "Name",
                                placeholder: "My App",
                                validations: {
                                    duplicate:
                                        "There is already an application with this name. " +
                                        "Please enter a different name.",
                                    empty: "Application name is required.",
                                    reserved:
                                        "{{appName}} is a reserved application name. Please enter a different " +
                                        "name."
                                }
                            }
                        },
                        managementAppBanner:
                            "The application is allowed to access the management APIs of this " + "organization."
                    },
                    inboundCustom: {
                        fields: {
                            checkbox: {
                                label: "{{label}}",
                                validations: {
                                    empty: "Provide {{name}}"
                                }
                            },
                            dropdown: {
                                label: "{{label}}",
                                placeholder: "Enter {{name}}",
                                validations: {
                                    empty: "Provide {{name}}"
                                }
                            },
                            generic: {
                                label: "{{label}}",
                                placeholder: "Enter {{name}}",
                                validations: {
                                    empty: "Select the {{name}}"
                                }
                            },
                            password: {
                                label: "{{label}}",
                                placeholder: "Enter {{name}}",
                                validations: {
                                    empty: "Provide {{name}}"
                                }
                            }
                        }
                    },
                    inboundOIDC: {
                        description: "Given below are the {{protocol}} settings for your application.",
                        documentation:
                            "Read through our <1>documentation</1> to learn more about using " +
                            "<3>{{protocol}}</3> protocol to implement login in your applications.",
                        fields: {
                            allowedOrigins: {
                                hint:
                                    "Allowed origins are URLs that will be allowed to make requests from cross " +
                                    "origins to {{productName}} APIs",
                                label: "Allowed origins",
                                placeholder: "https://myapp.io",
                                validations: {
                                    empty: "Please add a valid origin."
                                }
                            },
                            callBackUrls: {
                                hint:
                                    "The authorized redirect URL determines where the authorization code is sent " +
                                    "to upon user authentication, and where the user is redirected to upon user " +
                                    "logout. The client app should specify the authorized redirect URL in the " +
                                    "authorization or logout request and {{productName}} will validate it against " +
                                    "the authorized redirect URLs entered here.",
                                info:
                                    "Don’t have an app? Try out a sample app using {{callBackURLFromTemplate}} " +
                                    "as the authorized redirect URL. (You can download and run a sample at a " +
                                    "later step.)",
                                label: "Authorized redirect URLs",
                                placeholder: "https://myapp.io/login",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "The entered URL is neither HTTP nor HTTPS. Please add a valid URL.",
                                    required:
                                        "This field is required for a functional app. " +
                                        "However, if you are planning to try the sample app, " +
                                        "this field can be ignored."
                                }
                            },
                            clientID: {
                                label: "Client ID"
                            },
                            clientSecret: {
                                hashedDisclaimer:
                                    "Client secret is hashed. If you need to retrieve it, " +
                                    "please regenerate the secret again.",
                                hideSecret: "Hide secret",
                                label: "Client secret",
                                message:
                                    "{{productName}} does not issue a <1>client_secret</1> " +
                                    "to native " +
                                    "applications or web browser-based applications for the purpose " +
                                    "of client authentication.",
                                placeholder: "Enter Client Secret",
                                showSecret: "Show secret",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            grant: {
                                children: {
                                    client_credential: {
                                        hint: "This grant type does not support the 'openid' scope.",
                                        label: "(openid scope not allowed)"
                                    },
                                    implicit: {
                                        hint: "This grant type is not recommended.",
                                        label: "{{grantType}} (Not recommended)"
                                    },
                                    password: {
                                        hint: "This grant type is not recommended.",
                                        label: "{{grantType}} (Not recommended)"
                                    }
                                },
                                hint: "This will determine how the application communicates with the token service.",
                                label: "Allowed grant types",
                                validation: {
                                    refreshToken:
                                        "Refresh token grant type should only be selected along with " +
                                        "grant types that provide a refresh token."
                                },
                                validations: {
                                    empty: "Select at least one grant type"
                                }
                            },
                            public: {
                                hint:
                                    "Allow the client to authenticate to {{productName}} without the client secret." +
                                    " Public clients such as applications running in a browser or on a mobile device" +
                                    " are unable to use registered client secrets. ",
                                label: "Public client",
                                validations: {
                                    empty: "This is a required field."
                                }
                            }
                        },
                        messages: {
                            customInvalidMessage:
                                "Please enter a valid URI. Valid formats include HTTP, HTTPS, " +
                                "or private-use URI scheme.",
                            revokeDisclaimer: {
                                content:
                                    "The application has been revoked. Reactivate the application to allow " +
                                    "users to log in.",
                                heading: "Application is inactive"
                            }
                        },
                        mobileApp: {
                            discoverableHint:
                                "If enabled and a web accessible url(deep link) is given, customers " +
                                "can access this application from the <1>{{ myAccount }}</1> portal.",
                            mobileAppPlaceholder: "myapp://oauth2"
                        },
                        dropdowns: {
                            selectOption: "Select Option"
                        },
                        sections: {
                            accessToken: {
                                fields: {
                                    applicationTokenExpiry: {
                                        hint:
                                            "Specify the validity period of the " +
                                            "<1>application_access_token</1> in seconds.",
                                        label: "Application access token expiry time",
                                        placeholder: "Enter the application access token expiry time",
                                        validations: {
                                            empty: "Please fill the application access token expiry time",
                                            invalid:
                                                "Application access token expiry time should be in seconds. " +
                                                "Decimal points and negative numbers are not allowed."
                                        }
                                    },
                                    bindingType: {
                                        children: {
                                            ssoBinding: {
                                                label: "SSO-session"
                                            }
                                        },
                                        description:
                                            "Select type <1>SSO-session</1> to allow {{productName}} to " +
                                            "bind the <3>access_token</3> and the <5>refresh_token</5> to the " +
                                            "login session and issue a new token per session. When the application " +
                                            "session ends, the tokens will also be revoked.",
                                        label: "Token binding type",
                                        valueDescriptions: {
                                            cookie:
                                                "Bind the access token to a cookie with Secure " +
                                                "and httpOnly parameters.",
                                            none:
                                                "No binding. {{productName}} will issue a new access token only " +
                                                "when the token expires or is revoked.",
                                            sso_session:
                                                "Binds the access token to the login session. " +
                                                "{{productName}} will issue a new access token for each new login " +
                                                "and revoke the token upon logout."
                                        }
                                    },
                                    expiry: {
                                        hint: "Specify the validity period of the <1>access_token</1> in seconds.",
                                        label: "User access token expiry time",
                                        labelForSPA: "Access token expiry time",
                                        placeholder: "Enter the user access token expiry time",
                                        validations: {
                                            empty: "Please fill the user access token expiry time",
                                            invalid:
                                                "Access token expiry time should be in seconds. " +
                                                "Decimal points and negative numbers are not allowed."
                                        }
                                    },
                                    revokeToken: {
                                        hint:
                                            "Allow revoking tokens of this application when a bound IDP session " +
                                            "gets terminated through a user logout. Remember to include either <1>client_id</1> " +
                                            "or <3>id_token_hint</3> in the logout request.",
                                        label: "Revoke tokens upon user logout"
                                    },
                                    type: {
                                        label: "Token type",
                                        valueDescriptions: {
                                            default: "Issue an opaque UUID as a token.",
                                            jwt: "Issue a self-contained JWT token."
                                        }
                                    },
                                    validateBinding: {
                                        hint:
                                            "Validate the binding attributes at the token validation. The client " +
                                            "needs to present the <1>access_token</1> + cookie for successful " +
                                            "authorization.",
                                        label: "Validate token bindings"
                                    },
                                    audience: {
                                        hint:
                                            "Specify the recipient(s) that this <1>access_token</1> is intended for." +
                                            " By default, the client ID of this application is added as an audience.",
                                        label: "Audience",
                                        placeholder: "Enter Audience",
                                        validations: {
                                            duplicate: "Audience contains duplicate values",
                                            empty: "Please fill the audience",
                                            invalid: "Please avoid special characters like commas (,)"
                                        }
                                    }
                                },
                                heading: "Access Token",
                                hint:
                                    " Configure the access token issuer, user access token expiry time, " +
                                    "application access token expiry time etc."
                            },
                            certificates: {
                                disabledPopup:
                                    "This certificate is used to encrypt the <1>id_token</1>." +
                                    " First, you need to disable <3>id_token</3> encryption to proceed."
                            },
                            idToken: {
                                fields: {
                                    algorithm: {
                                        hint:
                                            "The dropdown contains the supported <1>id_token</1> encryption " +
                                            "algorithms.",
                                        label: "Algorithm",
                                        placeholder: "Select Algorithm",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    audience: {
                                        hint:
                                            "Specify the recipient(s) that this <1>id_token</1> is intended for." +
                                            " By default, the client ID of this application is added as an audience.",
                                        label: "Audience",
                                        placeholder: "Enter Audience",
                                        validations: {
                                            duplicate: "Audience contains duplicate values",
                                            empty: "Please fill the audience",
                                            invalid: "Please avoid special characters like commas (,)"
                                        }
                                    },
                                    encryption: {
                                        hint:
                                            "Select to encrypt the <1>id_token</1> when issuing the token using the " +
                                            "public key of your application. To use encryption, configure the JWKS " +
                                            "endpoint or the certificate of your application in the Certificate " +
                                            "section below.",
                                        label: "Enable encryption",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    expiry: {
                                        hint: "Specify the validity period of the <1>id_token</1> in seconds.",
                                        label: "ID Token expiry time",
                                        placeholder: "Enter the id token expiry time",
                                        validations: {
                                            empty: "Please fill the id token expiry time",
                                            invalid:
                                                "ID token expiry time should be in seconds. " +
                                                "Decimal points and negative numbers are not allowed."
                                        }
                                    },
                                    method: {
                                        hint: "The dropdown contains the supported <1>id_token</1> encryption methods.",
                                        label: "Encryption method",
                                        placeholder: "Select Method",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    signing: {
                                        hint:
                                            "The dropdown contains the supported <1>id_token</1> signing " +
                                            "algorithms.",
                                        label: "ID token response signing algorithm",
                                        placeholder: "Select Algorithm"
                                    }
                                },
                                heading: "ID Token"
                            },
                            logoutURLs: {
                                fields: {
                                    back: {
                                        hint:
                                            "{{productName}} will directly communicate the logout requests to this " +
                                            "client URL, so that clients can invalidate the user session.",
                                        label: "Back channel logout URL",
                                        placeholder: "https://myapp.io/logout",
                                        validations: {
                                            empty: "Please fill the Back Channel Logout URL",
                                            invalid: "Please add valid URL"
                                        }
                                    },
                                    front: {
                                        label: "Front channel logout URL",
                                        placeholder: "Enter the Front Channel Logout URL",
                                        validations: {
                                            empty: "Please fill the Front Channel Logout URL",
                                            invalid: "Please add valid URL"
                                        }
                                    }
                                },
                                heading: "PKCE"
                            },
                            pkce: {
                                description:
                                    "The default method used by {{productName}} to generate the challenge " +
                                    'is SHA-256. Only select "Plain" for constrained environments that can' +
                                    " not use the SHA-256 transformation.",
                                fields: {
                                    pkce: {
                                        children: {
                                            mandatory: {
                                                label: "Mandatory"
                                            },
                                            plainAlg: {
                                                label: "Support 'Plain' Transform Algorithm"
                                            }
                                        },
                                        label: "{{label}}",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "PKCE",
                                hint:
                                    "Select to make it mandatory for the application to " +
                                    "include a code_challenge in the authorization request."
                            },
                            clientAuthentication: {
                                fields: {
                                    authenticationMethod: {
                                        hint: "The dropdown contains the supported client authentication methods.",
                                        label: "Client authentication method",
                                        placeholder: "Select method"
                                    },
                                    signingAlgorithm: {
                                        hint:
                                            "The dropdown contains the supported client assertion signing" +
                                            " algorithms.",
                                        label: "Signing algorithm",
                                        placeholder: "Select algorithm"
                                    },
                                    subjectDN: {
                                        label: "TLS client authentication subject domain name",
                                        placeholder: "Enter the tls client authentication subject domain name",
                                        hint: "Enter the DN of the transport certificate."
                                    }
                                },
                                heading: "Client Authentication"
                            },
                            pushedAuthorization: {
                                fields: {
                                    requirePushAuthorizationRequest: {
                                        hint:
                                            "Select to make it mandatory for the application to send authorization " +
                                            "requests as pushed authorization requests.",
                                        label: "Mandatory"
                                    }
                                },
                                heading: "Pushed Authorization Requests"
                            },
                            requestObject: {
                                fields: {
                                    requestObjectSigningAlg: {
                                        hint:
                                            "The dropdown contains the supported <1>request object</1> signing" +
                                            " algorithms.",
                                        label: "Request object signing algorithm",
                                        placeholder: "Select Algorithm"
                                    },
                                    requestObjectEncryptionAlgorithm: {
                                        hint:
                                            "The dropdown contains the supported <1>request object</1> encryption" +
                                            " algorithms.",
                                        label: "Request object encryption algorithm",
                                        placeholder: "Select Algorithm"
                                    },
                                    requestObjectEncryptionMethod: {
                                        hint:
                                            "The dropdown contains the supported <1>request object</1> encryption" +
                                            " methods.",
                                        label: "Request object encryption method",
                                        placeholder: "Select Method"
                                    }
                                },
                                heading: "Request Object"
                            },
                            refreshToken: {
                                fields: {
                                    expiry: {
                                        hint: "Specify the validity period of the <1>refresh_token</1> in seconds.",
                                        label: "Refresh token expiry time",
                                        placeholder: "Enter the refresh token expiry time",
                                        validations: {
                                            empty: "Please fill the refresh token expiry time",
                                            invalid:
                                                "Refresh token expiry time should be in seconds. " +
                                                "Decimal points and negative numbers are not allowed."
                                        }
                                    },
                                    renew: {
                                        hint:
                                            "Select to issue a new <1>refresh_token</1> each time a " +
                                            "<3>refresh_token</3> is " +
                                            "exchanged. The existing token will be invalidated.",
                                        label: "Renew refresh token",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Refresh Token"
                            },
                            requestObjectSignature: {
                                description:
                                    "{{productName}} supports receiving an OIDC authentication request as " +
                                    "a request object that is passed in a single, self-contained <1>request</1> " +
                                    "parameter. Enable signature validation to accept only signed request objects " +
                                    "in the authorization request.",
                                fields: {
                                    signatureValidation: {
                                        label: "Enable signature validation"
                                    }
                                },
                                heading: "Request Object"
                            },
                            scopeValidators: {
                                fields: {
                                    validator: {
                                        label: "{{label}}",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Scope validators"
                            }
                        }
                    },
                    inboundSAML: {
                        description: "Given below are the SAML settings for your application.",
                        documentation:
                            "Read through our <1>documentation</1> to learn more about using " +
                            "<3>{{protocol}}</3> protocol to implement login in your applications.",
                        fields: {
                            assertionURLs: {
                                hint:
                                    "The Assertion Consumer Service (ACS) URL determines where to " +
                                    "send the SAML response.",
                                info:
                                    "Don’t have an app? Try out a sample app using {{assertionURLFromTemplate}} " +
                                    "as the assertion consumer URL. (You can download and run a sample at a later" +
                                    " step.)",
                                label: "Assertion consumer service URLs",
                                placeholder: "Enter ACS URL",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "The entered URL is neither HTTP nor HTTPS. Please add a valid URL.",
                                    required:
                                        "This field is required for a functional app. " +
                                        "However, if you are planning to try the sample app, " +
                                        "this field can be ignored."
                                }
                            },
                            defaultAssertionURL: {
                                hint:
                                    "If you have configured multiple ACS URLs, you must configure one as " +
                                    "the default. In case a SAML request from your application does not specify " +
                                    "the ACS URL, the response is sent to this URL.",
                                label: "Default assertion consumer service URL",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            idpEntityIdAlias: {
                                hint:
                                    "This value can override the default Identity Provider (IdP) entity ID " +
                                    "({{defaultIdpEntityID}}). The IdP entity ID is used as the <1>saml2:Issuer</1> " +
                                    " of the SAML response that is generated by {{productName}}. This should be a " +
                                    "valid URI/URL.",
                                label: "IdP entity ID alias",
                                placeholder: "Enter alias",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "This should be a valid URI/URL."
                                }
                            },
                            issuer: {
                                errorMessage: "The issuer already exists.",
                                hint:
                                    "This specifies the unique identifier of the application. This is also the " +
                                    "<1>saml2:Issuer</1> value specified in the SAML authentication request issued " +
                                    "by the application.",
                                label: "Issuer",
                                placeholder: "Enter issuer",
                                validations: {
                                    empty: "Please provide the issuer"
                                }
                            },
                            metaURL: {
                                errorMessage: "The metadata URL is invalid",
                                hint: "URL for the meta file",
                                label: "Meta URL",
                                placeholder: "Enter the meta file url",
                                validations: {
                                    empty: "Please provide the meta file url",
                                    invalid: "Enter a valid URL"
                                }
                            },
                            mode: {
                                children: {
                                    manualConfig: {
                                        label: "Manual Configuration"
                                    },
                                    metadataFile: {
                                        label: "Metadata File"
                                    },
                                    metadataURL: {
                                        label: "Metadata URL"
                                    }
                                },
                                hint: "Select the mode to configure saml.",
                                label: "Mode"
                            },
                            qualifier: {
                                hint:
                                    "This value is needed only if you have to configure multiple SAML Single " +
                                    "Sign-On (SSO) inbound authentication configurations for the same Issuer value. " +
                                    "Qualifier that is defined here will be appended to the issuer internally to " +
                                    "identify a application uniquely at runtime.",
                                label: "Application qualifier",
                                placeholder: "Enter the application qualifier",
                                validations: {
                                    empty: "This is a required field."
                                }
                            }
                        },
                        sections: {
                            assertion: {
                                fields: {
                                    audience: {
                                        hint:
                                            "This specifies the audiences of the SAML assertion. " +
                                            "The issuer of the application will be added as the default audience.",
                                        label: "Audiences",
                                        placeholder: "Enter audience",
                                        validations: {
                                            invalid: "Please add valid URI"
                                        }
                                    },
                                    nameIdFormat: {
                                        hint:
                                            "This specifies the name identifier format that is used to " +
                                            "exchange information regarding the user in the SAML assertion.",
                                        label: "Name ID format",
                                        placeholder: "Enter name ID format",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    recipients: {
                                        hint: "This specifies recipients of the SAML assertion.",
                                        label: "Recipients",
                                        placeholder: "Enter recipient",
                                        validations: {
                                            invalid: "Please add valid URI"
                                        }
                                    }
                                },
                                heading: "Assertion"
                            },
                            attributeProfile: {
                                fields: {
                                    enable: {
                                        hint:
                                            "This specifies whether to include the user’s attributes in the " +
                                            "SAML assertions as part of the attribute statement.",
                                        label: "Enable attribute profile"
                                    },
                                    includeAttributesInResponse: {
                                        hint:
                                            "Once you select the checkbox to Include Attributes in the Response " +
                                            "Always, the identity provider always includes the attribute values " +
                                            "related to the selected claims in the SAML attribute statement.",
                                        label: "Always include attributes in response"
                                    },
                                    serviceIndex: {
                                        hint:
                                            "This is an optional field if not provided a value will be generated " +
                                            "automatically.",
                                        label: "Attribute consuming service index",
                                        placeholder: "Enter attribute consuming service index",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Attribute Profile"
                            },
                            certificates: {
                                disabledPopup:
                                    "Make sure request signature validation and" +
                                    " assertion encryption are disabled to proceed.",
                                certificateRemoveConfirmation: {
                                    header: "Remove current certificate?",
                                    content:
                                        "Setting the certificate type to none will remove the current " +
                                        "certificate provided for this application. Proceed with caution."
                                }
                            },
                            encryption: {
                                fields: {
                                    assertionEncryption: {
                                        hint:
                                            "Select to encrypt the SAML2 Assertions returned after authentication. " +
                                            "To use encryption configure the certificate of your application" +
                                            " in the Certificate section below.",
                                        label: "Enable encryption",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    assertionEncryptionAlgorithm: {
                                        label: "Assertion encryption algorithm",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    keyEncryptionAlgorithm: {
                                        label: "Key encryption algorithm",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Encryption"
                            },
                            idpInitiatedSLO: {
                                fields: {
                                    enable: {
                                        hint: "This specifies whether the application supports IdP initiated logout.",
                                        label: "Enable",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    returnToURLs: {
                                        hint:
                                            "This specifies the URLs to which the user should be redirected " +
                                            "after the logout.",
                                        label: "Return to URLs",
                                        placeholder: "Enter URL",
                                        validations: {
                                            invalid: "Please add valid URL"
                                        }
                                    }
                                },
                                heading: "IdP initiated single logout"
                            },
                            requestProfile: {
                                fields: {
                                    enable: {
                                        label: "Enable assertion query profile",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Assertion Query/Request Profile"
                            },
                            requestValidation: {
                                fields: {
                                    signatureValidation: {
                                        hint:
                                            "This specifies whether {{productName}} must validate the " +
                                            "signature of the SAML authentication request and the SAML logout " +
                                            "request that are sent by the application.",
                                        label: "Enable request signature validation",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    signatureValidationCertAlias: {
                                        hint:
                                            "If application certificate is provided then it will be used and above " +
                                            "selected certificate will be ignored.",
                                        label: "Request validation certificate alias",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Request Validation"
                            },
                            responseSigning: {
                                fields: {
                                    digestAlgorithm: {
                                        label: "Digest algorithm",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    responseSigning: {
                                        hint:
                                            "This specifies whether the SAML responses generated by " +
                                            "{{productName}} should be signed.",
                                        label: "Sign SAML responses"
                                    },
                                    signingAlgorithm: {
                                        label: "Signing algorithm",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Response Signing"
                            },
                            sloProfile: {
                                fields: {
                                    enable: {
                                        hint:
                                            "This specifies whether the application supports Single Logout (SLO) " +
                                            "profile.",
                                        label: "Enable SLO",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    logoutMethod: {
                                        label: "Logout method",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    requestURL: {
                                        hint:
                                            "This specifies the endpoint of the application to where the " +
                                            "single logout request should be sent. If you do not specify this " +
                                            "URL, {{productName}} will use the ACS URL.",
                                        label: "Single logout request URL",
                                        placeholder: "Enter single logout request URL",
                                        validations: {
                                            empty: "This is a required field.",
                                            invalid: "Enter a valid URL"
                                        }
                                    },
                                    responseURL: {
                                        hint:
                                            "This specifies the endpoint of the application to where the " +
                                            "single logout response should be sent. If you do not specify this " +
                                            "URL, {{productName}} will use the ACS URL.",
                                        label: "Single logout response URL",
                                        placeholder: "Enter single logout response URL",
                                        validations: {
                                            empty: "This is a required field.",
                                            invalid: "Enter a valid URL"
                                        }
                                    }
                                },
                                heading: "Single Logout Profile"
                            },
                            ssoProfile: {
                                fields: {
                                    artifactBinding: {
                                        hint:
                                            "This specifies whether the artifact resolve request signature " +
                                            "should be validated against the application certificate. If you enable " +
                                            "this option, make sure to provide the application certificate below.",
                                        label: "Enable signature validation for artifact binding"
                                    },
                                    bindings: {
                                        hint:
                                            "This specifies the mechanisms to transport SAML messages in " +
                                            "communication protocols.",
                                        label: "Bindings",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    },
                                    idpInitiatedSSO: {
                                        hint:
                                            "This specifies whether to initiate Single Sign-On (SSO) from the " +
                                            "IdP instead of the application.",
                                        label: "Enable IdP initiated SSO",
                                        validations: {
                                            empty: "This is a required field."
                                        }
                                    }
                                },
                                heading: "Single Sign-On Profile"
                            }
                        }
                    },
                    inboundSTS: {
                        fields: {
                            realm: {
                                hint: "Enter realm identifier for ws-federation",
                                label: "Realm",
                                placeholder: "Enter realm.",
                                validations: {
                                    empty: "This is a required field."
                                }
                            },
                            replyTo: {
                                hint: "Enter RP endpoint URL that handles the response.",
                                label: "Reply URL",
                                placeholder: "Enter Reply URL",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "Enter a valid URL"
                                }
                            },
                            replyToLogout: {
                                hint: "Enter RP endpoint URL that handles the response at logout.",
                                label: "Reply Logout URL",
                                placeholder: "Enter Reply Logout URL",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "Enter a valid URL"
                                }
                            }
                        }
                    },
                    inboundWSTrust: {
                        fields: {
                            audience: {
                                hint: "The trusted relying party's endpoint address.",
                                label: "Audience",
                                placeholder: "Enter audience",
                                validations: {
                                    empty: "Enter the audience.",
                                    invalid: "Enter a valid URL"
                                }
                            },
                            certificateAlias: {
                                hint: "Public certificate of the trusted relying party.",
                                label: "Certificate alias",
                                placeholder: "Enter audience",
                                validations: {
                                    empty: "Select the certificate alias"
                                }
                            }
                        }
                    },
                    outboundProvisioning: {
                        fields: {
                            blocking: {
                                hint: "Block the authentication flow until the provisioning is completed.",
                                label: "Blocking"
                            },
                            connector: {
                                label: "Provisioning Connector",
                                placeholder: "Select provisioning connector",
                                validations: {
                                    empty: "It is mandatory to select a provisioning connector."
                                }
                            },
                            idp: {
                                label: "Identity Provider",
                                placeholder: "Select identity provider",
                                validations: {
                                    empty: "It is mandatory to select an IDP."
                                }
                            },
                            jit: {
                                hint: "Provision users to the store authenticated using just-in-time provisioning.",
                                label: "JIT Outbound"
                            },
                            rules: {
                                hint: "Provision users based on the pre-defined XACML rules",
                                label: "Enable Rules"
                            }
                        }
                    },
                    provisioningConfig: {
                        fields: {
                            proxyMode: {
                                hint:
                                    "Users/Groups are not provisioned to the user store. They are only outbound " +
                                    "provisioned.",
                                label: "Proxy mode"
                            },
                            userstoreDomain: {
                                hint: "Select user store domain name to provision users and groups.",
                                label: "Provisioning user store domain"
                            }
                        }
                    },
                    spaProtocolSettingsWizard: {
                        fields: {
                            callBackUrls: {
                                label: "Authorized redirect URLs",
                                validations: {
                                    empty: "This is a required field.",
                                    invalid: "The entered URL is neither HTTP nor HTTPS. Please add a valid URL."
                                }
                            },
                            name: {
                                label: "Name",
                                validations: {
                                    invalid:
                                        "{{appName}} is not a valid name. It can contain up to " +
                                        "{{characterLimit}} characters, including alphanumerics, periods (.), " +
                                        "dashes (-), underscores (_) and spaces."
                                }
                            },
                            urlDeepLinkError: "The entered URL is not a deep link."
                        }
                    }
                },
                helpPanel: {
                    tabs: {
                        configs: {
                            content: {
                                subTitle:
                                    "Update the pre defined configurations through the template or add new " +
                                    "configurations depending on the protocol (OIDC, SAML, WS-Trust, etc.) " +
                                    "configured for the application.",
                                title: "Application Configurations"
                            },
                            heading: "Configurations Guide"
                        },
                        docs: {
                            content: null,
                            heading: "Docs"
                        },
                        samples: {
                            content: {
                                sample: {
                                    configurations: {
                                        btn: "Download the Configuration",
                                        subTitle:
                                            "In order to integrate the application created in the server with " +
                                            "the sample application, you need to initialise the client with " +
                                            "following configurations.",
                                        title: "Initialize the client"
                                    },
                                    downloadSample: {
                                        btn: "Download the sample",
                                        subTitle:
                                            "This sample application will show case the usage of the of WSO2 " +
                                            "Identity Server SDK and how you can integrate any application with " +
                                            "Identity Server.",
                                        title: "Try out the sample"
                                    },
                                    goBack: "Go back",
                                    subTitle:
                                        "Quickly start prototyping by downloading our preconfigured sample " +
                                        "application.",
                                    title: "Sample Applications"
                                },
                                technology: {
                                    subTitle:
                                        "Sample and required SDKs along with useful information will be " +
                                        "provided once you select a technology",
                                    title: "Select a technology"
                                }
                            },
                            heading: "Samples"
                        },
                        sdks: {
                            content: {
                                sdk: {
                                    goBack: "Go back",
                                    subTitle:
                                        "Following software development kits can be used to jump start your " +
                                        "application development.",
                                    title: "Software Development Kits (SDKs)"
                                }
                            },
                            heading: "SDKs"
                        },
                        start: {
                            content: {
                                endpoints: {
                                    subTitle:
                                        "If you implement your application without using a WSO2 SDK, the " +
                                        "following server endpoints will be useful for you to implement " +
                                        "authentication for the app.",
                                    title: "Server endpoints"
                                },
                                oidcConfigurations: {
                                    labels: {
                                        authorize: "Authorize",
                                        dynamicClientRegistration: "Dynamic Client Registration",
                                        endSession: "Logout",
                                        introspection: "Introspection",
                                        issuer: "Issuer",
                                        jwks: "JWKS",
                                        keystore: "Key Set",
                                        openIdServer: "OpenID Server",
                                        pushedAuthorizationRequest: "Pushed Authorization Request",
                                        revoke: "Revoke",
                                        sessionIframe: "Session Iframe",
                                        token: "Token",
                                        userInfo: "UserInfo",
                                        webFinger: "Web Finger",
                                        wellKnown: "Discovery"
                                    }
                                },
                                samlConfigurations: {
                                    buttons: {
                                        certificate: "Download Certificate",
                                        metadata: "Download IdP Metadata"
                                    },
                                    labels: {
                                        certificate: "IdP certificate",
                                        issuer: "Issuer",
                                        metadata: "IdP Metadata",
                                        slo: "Single Logout",
                                        sso: "Single Sign-On",
                                        destinationURL: "Destination URLs",
                                        artifactResolutionUrl: "Artifact Resolution URL"
                                    }
                                },
                                trySample: {
                                    btn: "Explore samples",
                                    subTitle:
                                        "You can try out the samples which will demonstrate the authentication " +
                                        "flow. Click the button below to download and deploy the sample application.",
                                    title: "Try with a sample"
                                },
                                useSDK: {
                                    btns: {
                                        withSDK: "Using SDK",
                                        withoutSDK: "Manually"
                                    },
                                    subTitle:
                                        "Install and use our SDKs to integrate authentication to your " +
                                        "application with minimum number of code lines.",
                                    title: "Integrate your own app"
                                },
                                wsFedConfigurations: {
                                    labels: {
                                        passiveSTSUrl: "WS-Federation URL"
                                    }
                                }
                            },
                            heading: "What's Next?"
                        }
                    }
                },
                list: {
                    actions: {
                        add: "New Application",
                        custom: "Custom",
                        predefined: "Use Predefined"
                    },
                    columns: {
                        actions: "",
                        name: "Name",
                        inboundKey: "Inbound Key"
                    },
                    labels: {
                        fragment: "Shared app"
                    }
                },
                myaccount: {
                    description: "Self-service portal for your users.",
                    popup:
                        "Share this link with your users to allow access to My Account" +
                        " and to manage their accounts.",
                    title: "My Account",
                    enable: {
                        0: "Enabled",
                        1: "Disabled"
                    },
                    Confirmation: {
                        enableConfirmation: {
                            content:
                                "The My Account portal is in preview mode and it is recommended to disable it " +
                                "when your organization goes into production.",
                            heading: "Are you sure?",
                            message: "Enable My Account portal."
                        },
                        disableConfirmation: {
                            content:
                                "The My Account portal is in preview mode and it is recommended to disable it " +
                                "when your organization goes into production. When My Account portal is disabled, " +
                                "users of your organization will not be able to access it.",
                            heading: "Are you sure?",
                            message: "Disable My Account portal."
                        }
                    },
                    notifications: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "Failed to update My Account portal status.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated My Account portal status.",
                            message: "Update successful"
                        }
                    },
                    fetchMyAccountStatus: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve My Account portal status.",
                            message: "Something went wrong"
                        }
                    }
                },
                notifications: {
                    addApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Creation error"
                        },
                        genericError: {
                            description: "Failed to create the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully created the application.",
                            message: "Creation successful"
                        }
                    },
                    apiLimitReachedError: {
                        error: {
                            description: "You have reached the maximum number of applications allowed.",
                            message: "Failed to create the application"
                        }
                    },
                    authenticationStepDeleteErrorDueToSecondFactors: {
                        genericError: {
                            description:
                                "Second factor authenticators require having a Username & " +
                                "Password authenticator in a prior step.",
                            message: "Step cannot be deleted"
                        }
                    },
                    authenticationStepDeleteErrorDueToAppShared: {
                        genericError: {
                            description: "This authenticator is required for the shared application.",
                            message: "Cannot delete this authenticator"
                        }
                    },
                    authenticationStepMin: {
                        genericError: {
                            description: "At least one authentication step is required.",
                            message: "Step cannot be deleted"
                        }
                    },
                    conditionalScriptLoopingError: {
                        description:
                            "Looping constructs such as <1>for</1>, <3>while</3>, and" +
                            " <5>forEach</5> are not allowed in the conditional authentication" +
                            " script.",
                        message: "Failed to update the script"
                    },
                    deleteApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Removal Error"
                        },
                        genericError: {
                            description: "Failed to delete the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully deleted the application.",
                            message: "Application deleted"
                        }
                    },
                    deleteCertificateGenericError: {
                        description: "Something went wrong. We were unable to delete the application certificate.",
                        message: "Failed to update the application"
                    },
                    deleteCertificateSuccess: {
                        description: "Successfully deleted the application certificate.",
                        message: "Deleted certificate"
                    },
                    deleteOptionErrorDueToSecondFactorsOnRight: {
                        error: {
                            description: "{{description}}",
                            message: "Cannot delete this authenticator"
                        },
                        genericError: {
                            description:
                                "There are authenticators in other steps that depend on " + "this authenticator.",
                            message: "Cannot delete this authenticator"
                        },
                        success: {
                            description: "Successfully deleted the authenticator from step {{stepNo}}.",
                            message: "Delete successful"
                        }
                    },
                    deleteProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "Removal Error"
                        },
                        genericError: {
                            description: "An error occurred while deleting inbound protocol configurations.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully deleted the {{protocol}} protocol configurations.",
                            message: "Configurations deleted"
                        }
                    },
                    duplicateAuthenticationStep: {
                        genericError: {
                            description: "The same authenticator is not allowed more than once in a single step.",
                            message: "Not allowed"
                        }
                    },
                    emptyAuthenticationStep: {
                        genericError: {
                            description:
                                "There are empty authentication steps. Please remove them or add " +
                                "authenticators to proceed.",
                            message: "Update error"
                        }
                    },
                    fetchAllowedCORSOrigins: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve allowed CORS Origins.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved allowed CORS Origins.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve application details.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved application details.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchMyAccountApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve the My Account application details.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the My Account application details.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchApplications: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve applications",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the applications.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchCustomInboundProtocols: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving the custom inbound protocols.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the custom inbound protocols.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchInboundProtocols: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving the available inbound protocols.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the inbound protocols.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchOIDCIDPConfigs: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description:
                                "An error occurred while retrieving the IDP configurations for the OIDC " +
                                "application.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the IDP configurations for the OIDC application.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchOIDCServiceEndpoints: {
                        genericError: {
                            description:
                                "An error occurred while retrieving the server endpoints for " + "OIDC applications.",
                            message: "Something went wrong"
                        }
                    },
                    fetchProtocolMeta: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving the protocol metadata.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the protocol metadata.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchSAMLIDPConfigs: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description:
                                "An error occurred while retrieving the IDP configurations for the SAML" +
                                " application.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the IDP configurations for the SAML application.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchTemplate: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving application template data.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the application template data.",
                            message: "Retrieval successful"
                        }
                    },
                    fetchTemplates: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "Couldn't retrieve application templates.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the application templates.",
                            message: "Retrieval successful"
                        }
                    },
                    firstFactorAuthenticatorToSecondStep: {
                        genericError: {
                            description: "This authenticator can only be added to the first step.",
                            message: "Cannot add to this step"
                        }
                    },
                    getInboundProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving the protocol configurations.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "Successfully retrieved the inbound protocol configurations.",
                            message: "Retrieval successful"
                        }
                    },
                    regenerateSecret: {
                        error: {
                            description: "{{description}}",
                            message: "Regenerate error"
                        },
                        genericError: {
                            description: "An error occurred while regenerating the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully regenerated the application.",
                            message: "Regenerate successful"
                        }
                    },
                    revokeApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Revoke error"
                        },
                        genericError: {
                            description: "An error occurred while revoking the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully revoked the application.",
                            message: "Revoke successful"
                        }
                    },
                    secondFactorAuthenticatorToFirstStep: {
                        genericError: {
                            description:
                                "Second factor authenticators require having a basic " +
                                "authenticator in a prior step.",
                            message: "Cannot add to this step"
                        }
                    },
                    tierLimitReachedError: {
                        emptyPlaceholder: {
                            action: "View Plans",
                            subtitles:
                                "You can contact the organization administrator or (if you are the " +
                                "administrator) upgrade your subscription to increase the allowed limit.",
                            title: "You have reached the maximum number of apps allowed " + "for this organization."
                        },
                        heading: "You’ve reached the maximum limit for apps"
                    },
                    updateAdvancedConfig: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving the advanced configurations.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the advanced configurations.",
                            message: "Update successful"
                        }
                    },
                    updateApplication: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "Failed to update the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the application.",
                            message: "Update successful"
                        }
                    },
                    updateAuthenticationFlow: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the authentication flow of the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the authentication flow of the application.",
                            message: "Update successful"
                        }
                    },
                    updateClaimConfig: {
                        error: {
                            description: "Mapped user attributes cannot be duplicated.",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the attribute settings.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the attribute settings.",
                            message: "Update successful"
                        }
                    },
                    updateInboundProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the inbound protocol configurations.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the inbound protocol configurations.",
                            message: "Update successful"
                        }
                    },
                    updateInboundProvisioningConfig: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the provisioning configurations.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully updated the provisioning configurations.",
                            message: "Update successful"
                        }
                    },
                    updateOnlyIdentifierFirstError: {
                        description:
                            "Identifier First authenticator cannot be the only authenticator. " +
                            "It needs an additional step.",
                        message: "Update error"
                    },
                    updateIdentifierFirstInFirstStepError: {
                        description:
                            "The Identifier First authenticator requires multiple authentication steps in the sign-in flow.",
                        message: "Update error"
                    },
                    updateOutboundProvisioning: {
                        genericError: {
                            description: "The outbound provisioning IDP already exists.",
                            message: "Update error"
                        }
                    },
                    updateProtocol: {
                        error: {
                            description: "{{description}}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the application.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully added new protocol configurations.",
                            message: "Update successful"
                        }
                    }
                },
                placeholders: {
                    emptyAttributesList: {
                        action: "Add User Attribute",
                        subtitles: "There are no user attributes selected for the application at the moment.",
                        title: "No user attributes added"
                    },
                    emptyAuthenticatorStep: {
                        subtitles: {
                            0: "Click on the above button to add options to this step."
                        },
                        title: null
                    },
                    emptyAuthenticatorsList: {
                        subtitles: "Could not find any {{type}} authenticators",
                        title: null
                    },
                    emptyList: {
                        action: "New Application",
                        subtitles: {
                            0: "There are no applications available at the moment.",
                            1: "You can add a new application easily by following the",
                            2: "steps in the application creation wizard."
                        },
                        title: "Add a new Application"
                    },
                    emptyOutboundProvisioningIDPs: {
                        action: "New Provisioner",
                        subtitles:
                            "This Application has no outbound provisioners configured." +
                            " Add a provisioner to view it here.",
                        title: "No outbound provisioners"
                    },
                    emptyProtocolList: {
                        action: "New Protocol",
                        subtitles: {
                            0: "There are currently no protocols available.",
                            1: "You can add protocol easily by using the",
                            2: "predefined templates."
                        },
                        title: "Add a protocol"
                    }
                },
                popups: {
                    appStatus: {
                        active: {
                            content: "The application is active.",
                            header: "Active",
                            subHeader: ""
                        },
                        notConfigured: {
                            content: "The application is not configured. Please configure access configurations.",
                            header: "Not Configured",
                            subHeader: ""
                        },
                        revoked: {
                            content:
                                "The application is revoked. Please reactivate the application in access " +
                                "configurations.",
                            header: "Revoked",
                            subHeader: ""
                        }
                    }
                },
                templates: {
                    manualSetup: {
                        heading: "Manual Setup",
                        subHeading: "Create an application with custom configurations."
                    },
                    quickSetup: {
                        heading: "Quick Setup",
                        subHeading: "Predefined set of application templates to speed up your application creation."
                    }
                },
                wizards: {
                    applicationCertificateWizard: {
                        emptyPlaceHolder: {
                            description1: "This Application has no certificate added.",
                            description2: "Add a certificate to view it here.",
                            title: "No certificate"
                        },
                        heading: "Add New Certificate",
                        subHeading: "Add new certificate to the application"
                    },
                    minimalAppCreationWizard: {
                        help: {
                            heading: "Help",
                            subHeading: "Use the guide below",
                            template: {
                                common: {
                                    authorizedRedirectURLs: {
                                        example: "E.g., https://myapp.io/login",
                                        subTitle:
                                            "The URL to which the authorization code is sent to upon" +
                                            " authentication and where the user is redirected to upon logout.",
                                        title: "Authorized redirect URLs"
                                    },
                                    heading: {
                                        example: "E.g., My App",
                                        subTitle: "A unique name to identify your application.",
                                        title: "Name"
                                    },
                                    protocol: {
                                        subTitle:
                                            "The access configuration protocol which will be used to log in to" +
                                            " the application using SSO.",
                                        title: "Protocol"
                                    }
                                },
                                label: "Minimal application create wizard help panel templates.",
                                samlWeb: {
                                    assertionResponseURLs: {
                                        example: "E.g., https://my-app.com/home.jsp",
                                        subTitle:
                                            "The URLs to which the browser is redirected to upon successful" +
                                            " authentication. Also known as the Assertion Consumer Service (ACS) URL" +
                                            " of the service provider.",
                                        title: "Assertion consumer service URLs"
                                    },
                                    issuer: {
                                        example: "E.g., my-app.com",
                                        subTitle:
                                            "The <1>saml:Issuer</1> element that contains the unique" +
                                            " identifier of the application. The value added here should be" +
                                            " specified in the SAML authentication request sent from the client" +
                                            " application.",
                                        title: "Issuer"
                                    },
                                    metaFile: {
                                        subTitle: "Upload the meta file for the SAML configuration.",
                                        title: "Upload Metadata File"
                                    },
                                    metaURL: {
                                        subTitle: "Meta URL link from which SAML configurations can be fetched.",
                                        title: "Meta URL"
                                    }
                                }
                            }
                        }
                    }
                },
                resident: {
                    provisioning: {
                        outbound: {
                            actions: {
                                addIdp: "New Provisioner"
                            },
                            addIdpWizard: {
                                heading: "Add Outbound Provisioner",
                                steps: {
                                    details: "Provisioner Details"
                                },
                                subHeading: "Select the provisioner to provision users."
                            },
                            emptyPlaceholder: {
                                action: "New Provisioner",
                                subtitles: "No outbound provisioners configured. Add a provisioner to view it here.",
                                title: "No outbound provisioners"
                            },
                            form: {
                                fields: {
                                    connection: {
                                        label: "Connection",
                                        placeholder: "Select connection",
                                        validations: {
                                            empty: "It is mandatory to select connection."
                                        }
                                    }
                                }
                            },
                            heading: "Outbound Provisioning Configuration",
                            notifications: {
                                create: {
                                    genericError: {
                                        description:
                                            "Something went wrong while adding the outbound provisioning configuration.",
                                        message: "Creation error"
                                    },
                                    success: {
                                        description: "Successfully added the outbound provisioning configuration.",
                                        message: "Creation successful"
                                    },
                                    error: {
                                        description:
                                            "Outbound provisioning configuration already exists for the resident application.",
                                        message: "Creation error"
                                    }
                                },
                                delete: {
                                    genericError: {
                                        description:
                                            "Something went wrong while deleting the outbound provisioning configuration.",
                                        message: "Deletion error"
                                    },
                                    success: {
                                        description: "Successfully removed the outbound provisioning configuration.",
                                        message: "Deletion successful"
                                    }
                                },
                                fetch: {
                                    genericError: {
                                        description:
                                            "Something went wrong while getting the outbound provisioning configurations.",
                                        message: "Something went wrong"
                                    }
                                },
                                update: {
                                    genericError: {
                                        description:
                                            "Something went wrong while updating the outbound provisioning configuration.",
                                        message: "Update error"
                                    },
                                    success: {
                                        description: "Successfully updated the outbound provisioning configuration.",
                                        message: "Update successful"
                                    }
                                }
                            },
                            subHeading: "Configure outbound provisioning settings for the resident application."
                        }
                    }
                }
            },
            authenticationProvider: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "E.g. Name, Enabled etc."
                            },
                            filterCondition: {
                                placeholder: "E.g. Starts with etc."
                            },
                            filterValue: {
                                placeholder: "Enter value to search"
                            }
                        }
                    },
                    placeholder: "Search by name"
                },
                buttons: {
                    addAttribute: "Add Attribute",
                    addAuthenticator: "New Authenticator",
                    addCertificate: "New Certificate",
                    addConnector: "New Connector",
                    addIDP: "New Connection"
                },
                confirmations: {
                    deleteAuthenticator: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this authenticator, you will not be able to get it back. All the " +
                            "applications depending on this also might stop working. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the authenticator."
                    },
                    deleteConnector: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this connector, you will not be able to get it back. Please " +
                            "proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the connector."
                    },
                    deleteIDP: {
                        assertionHint: "Please confirm your action.",
                        content:
                            "If you delete this connection, you will not be able to recover it. " +
                            "Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the connection."
                    },
                    deleteIDPWithConnectedApps: {
                        assertionHint: "",
                        content: "Remove the associations from these applications before deleting:",
                        header: "Unable to Delete",
                        message: "There are applications using this connection."
                    },
                    deleteCertificate: {
                        assertionHint: "Please confirm your action.",
                        content:
                            "This is the only certificate available for this trusted token issuer. " +
                            "If this certificate is deleted, {{productName}} will no longer be able to validate tokens " +
                            "issued from this issuer.<1> Proceed with caution.</1>",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the certificate."
                    }
                },
                dangerZoneGroup: {
                    deleteIDP: {
                        actionTitle: "Delete",
                        header: "Delete connection",
                        subheader: "Once you delete it, it cannot be recovered. Please be certain."
                    },
                    disableIDP: {
                        actionTitle: "{{ state }} Connection",
                        header: "{{ state }} connection",
                        subheader: "Once you disable it, it can no longer be used until you enable it again.",
                        subheader2: "Enable the connection to use it with your applications."
                    },
                    header: "Danger Zone"
                },
                edit: {
                    common: {
                        settings: {
                            tabName: "Settings"
                        }
                    },
                    emailOTP: {
                        emailTemplate: {
                            tabName: "Email Template <1>(Coming Soon)</1>"
                        }
                    },
                    smsOTP: {
                        smsProvider: {
                            tabName: "SMS Provider <1>(Coming Soon)</1>"
                        }
                    }
                },
                forms: {
                    advancedConfigs: {
                        alias: {
                            hint:
                                "If the resident identity provider is known by an alias at the federated " +
                                "identity provider, specify it here.",
                            label: "Alias",
                            placeholder: "Enter value for Alias."
                        },
                        certificateType: {
                            certificateJWKS: {
                                label: "Use JWKS endpoint",
                                placeholder: "Value should be the certificate in JWKS format.",
                                validations: {
                                    empty: "Certificate value is required",
                                    invalid: "JWKS endpoint should be a valid URI."
                                }
                            },
                            certificatePEM: {
                                label: "Provide certificate",
                                placeholder: "Value should be a PEM URL.",
                                validations: {
                                    empty: "Certificate value is required"
                                }
                            },
                            hint:
                                "If the type is JWKS, the value should be a JWKS URL. If the type is PEM, the" +
                                " value should be the certificate in PEM format.",
                            label: "Select Certificate Type"
                        },
                        federationHub: {
                            hint: "Check if this points to a federation hub identity provider",
                            label: "Federation Hub"
                        },
                        homeRealmIdentifier: {
                            hint: "Enter the home realm identifier for this identity provider",
                            label: "Home Realm Identifier",
                            placeholder: "Enter value for Home Realm Identifier."
                        }
                    },
                    attributeSettings: {
                        attributeListItem: {
                            validation: {
                                empty: "Please enter a value"
                            }
                        },
                        attributeMapping: {
                            attributeColumnHeader: "Attribute",
                            attributeMapColumnHeader: "Identity Provider attribute",
                            attributeMapInputPlaceholderPrefix: "eg: IdP's attribute for ",
                            componentHeading: "Attributes Mapping",
                            hint: "Add attributes supported by Identity Provider"
                        },
                        attributeProvisioning: {
                            attributeColumnHeader: {
                                0: "Attribute",
                                1: "Identity Provider attribute"
                            },
                            attributeMapColumnHeader: "Default value",
                            attributeMapInputPlaceholderPrefix: "eg: a default value for the ",
                            componentHeading: "Provisioning Attributes Selection",
                            hint: "Specify required attributes for provisioning"
                        },
                        attributeSelection: {
                            searchAttributes: {
                                placeHolder: "Search attributes"
                            }
                        }
                    },
                    authenticatorAccordion: {
                        default: {
                            0: "Default",
                            1: "Make default"
                        },
                        enable: {
                            0: "Enabled",
                            1: "Disabled"
                        }
                    },
                    authenticatorSettings: {
                        apple: {
                            additionalQueryParameters: {
                                hint: "Additional query parameters to be sent to Apple.",
                                label: "Additional Query Parameters",
                                placeholder: "Enter additional query parameters.",
                                validations: {
                                    required: "Additional query parameters is not a required field."
                                }
                            },
                            callbackUrl: {
                                hint: "The authorized redirect URI used to obtain Apple credentials.",
                                label: "Authorized redirect URI",
                                placeholder: "Enter the Authorized redirect URI.",
                                validations: {
                                    required: "Authorized redirect URI is a required field."
                                }
                            },
                            clientId: {
                                hint: "The unique identifier which is provided when creating the Apple Services ID.",
                                label: "Services ID",
                                placeholder: "Enter the Services ID registered for the Apple application.",
                                validations: {
                                    required: "Services ID is a required field."
                                }
                            },
                            keyId: {
                                hint:
                                    "The key identifier which is generated when registering the private key for " +
                                    "the Apple application.",
                                label: "Key ID",
                                placeholder: "Enter the the Key ID of the application's private key.",
                                validations: {
                                    required: "Key ID is a required field."
                                }
                            },
                            privateKey: {
                                hint: "The generated private key for the Apple application.",
                                label: "Private Key",
                                placeholder: "Enter the Private Key generated for the Apple application.",
                                validations: {
                                    required: "Private Key is a required field."
                                }
                            },
                            secretValidityPeriod: {
                                hint:
                                    "The validity period of the generated client secret in seconds. A new client secret " +
                                    "will be generated after this time.",
                                label: "Client Secret Validity Period",
                                placeholder: "Enter the Validity Period for the Client Secret.",
                                validations: {
                                    required: "Client Secret Validity Period is not a required field."
                                }
                            },
                            scopes: {
                                heading: "Scopes",
                                hint:
                                    "The type of access provided for the connected apps to access data " +
                                    "from Apple. Click <1>here</1> to learn more.",
                                list: {
                                    email: {
                                        description: "Grants read access to a user's email address."
                                    },
                                    name: {
                                        description: "Grants read access to a user's name fields."
                                    }
                                }
                            },
                            teamId: {
                                hint: "The generated unique ID which is assigned to the Apple developer team.",
                                label: "Team ID",
                                placeholder: "Enter the Team ID of the Apple developer team.",
                                validations: {
                                    required: "Team ID is a required field."
                                }
                            }
                        },
                        emailOTP: {
                            enableBackupCodes: {
                                hint: "Allow users to authenticate with backup codes.",
                                label: "Enable authenticate with backup codes",
                                validations: {
                                    required: "Enable authenticate with backup codes is a required field."
                                }
                            },
                            expiryTime: {
                                hint: "Please pick a value between <1>1 minute</1> & <3>1440 minutes (1 day)</3>.",
                                label: "Email OTP expiry time",
                                placeholder: "Enter Email OTP expiry time.",
                                unit: "minutes",
                                validations: {
                                    invalid: "Email OTP expiry time should be an integer.",
                                    range: "Email OTP expiry time should be between 1 minute & 1440 minutes (1 day).",
                                    required: "Email OTP expiry time is a required field."
                                }
                            },
                            tokenLength: {
                                hint:
                                    "The number of allowed characters in the OTP. Please " +
                                    "pick a value between <1>4-10</1>.",
                                label: "Email OTP length",
                                placeholder: "Enter Email OTP length.",
                                unit: {
                                    digits: "digits",
                                    characters: "characters"
                                },
                                validations: {
                                    invalid: "Email OTP length should be an integer.",
                                    range: {
                                        characters: "Email OTP length should be between 4 & 10 characters.",
                                        digits: "Email OTP length should be between 4 & 10 digits."
                                    },
                                    required: "Email OTP length is a required field."
                                }
                            },
                            useAlphanumericChars: {
                                hint:
                                    "Please check this checkbox to enable alphanumeric characters. Otherwise numeric characters will be used.",
                                label: "Use alphanumeric characters for OTP",
                                validations: {
                                    required: "Use alphanumeric characters for OTP is a required field."
                                }
                            }
                        },
                        smsOTP: {
                            hint:
                                "Ensure that an <1>SMS Provider</1> is configured for the OTP feature to work properly.",
                            expiryTime: {
                                hint: "Please pick a value between <1>1 minute</1> & <3> 1440 minutes (1 day)</3>.",
                                label: "SMS OTP expiry time",
                                placeholder: "Enter SMS OTP expiry time.",
                                unit: "minutes",
                                validations: {
                                    invalid: "SMS OTP expiry time should be an integer.",
                                    range: "SMS OTP expiry time should be between 1 minutes & 1440 minutes (1 day).",
                                    required: "SMS OTP expiry time is a required field."
                                }
                            },
                            tokenLength: {
                                hint:
                                    "The number of allowed characters in the OTP. Please " +
                                    "pick a value between <1>4-10</1>.",
                                label: "SMS OTP length",
                                placeholder: "Enter SMS OTP length.",
                                validations: {
                                    invalid: "SMS OTP length should be an integer.",
                                    range: {
                                        digits: "SMS OTP length should be between 4 & 10 digits.",
                                        characters: "SMS OTP length should be between 4 & 10 characters."
                                    },
                                    required: "SMS OTP length is a required field."
                                },
                                unit: {
                                    digits: "digits",
                                    characters: "characters"
                                }
                            },
                            useNumericChars: {
                                hint: "Please clear this checkbox to enable alphanumeric characters.",
                                label: "Use only numeric characters for OTP",
                                validations: {
                                    required: "Use only numeric characters for OTP token is a required field."
                                }
                            },
                            allowedResendAttemptCount: {
                                hint: "The number of allowed OTP resend attempts.",
                                label: "Allowed OTP resend attempt count",
                                placeholder: "Enter allowed resend attempt count.",
                                validations: {
                                    required: "Allowed OTP resend attempt count is a required field.",
                                    invalid: "Allowed OTP resend attempt count should be an integer.",
                                    range: "Allowed OTP resend attempt count should be between 0 & 100."
                                }
                            }
                        },
                        fido2: {
                            allowProgressiveEnrollment: {
                                label: "Allow passkey progressive enrollment",
                                hint: "Please clear this checkbox to disable passkey progressive enrollment."
                            },
                            allowUsernamelessAuthentication: {
                                label: "Allow passkey usernameless authentication",
                                hint: "Please clear this checkbox to disable usernameless authentication."
                            }
                        },
                        facebook: {
                            callbackUrl: {
                                hint: "The redirect URI specified as valid in the Facebook OAuth app.",
                                label: "Valid OAuth redirect URI",
                                placeholder: "Enter Valid OAuth redirect URIs.",
                                validations: {
                                    required: "Valid OAuth redirect URIs is a required field."
                                }
                            },
                            clientId: {
                                hint:
                                    "The generated unique ID which is generated when the Facebook OAuth app is " +
                                    "created.",
                                label: "App ID",
                                placeholder: "Enter App ID from Facebook application.",
                                validations: {
                                    required: "App ID is a required field."
                                }
                            },
                            clientSecret: {
                                hint: "The <1>App secret</1> value of the Facebook OAuth app.",
                                label: "App secret",
                                placeholder: "Enter App secret from Facebook application.",
                                validations: {
                                    required: "App secret is a required field."
                                }
                            },
                            scopes: {
                                heading: "Permissions",
                                hint:
                                    "Permissions granted for the connected apps to access data from Facebook. " +
                                    "Click <1>here</> to learn more.",
                                list: {
                                    email: {
                                        description: "Grants read access to a user's primary email address."
                                    },
                                    profile: {
                                        description: "Grants read access to a user's default public profile fields."
                                    }
                                }
                            },
                            userInfo: {
                                heading: "User information fields",
                                hint:
                                    "Requested default public profile fields of a user. These information can " +
                                    "provide authenticated app users with a personalized in-app experience. Click " +
                                    "<1>here</1> to learn more.",
                                list: {
                                    ageRange: {
                                        description:
                                            "The age segment for this person expressed as a minimum and " +
                                            "maximum age."
                                    },
                                    email: {
                                        description: "The User's primary email address listed on their profile."
                                    },
                                    firstName: {
                                        description: "The person's first name."
                                    },
                                    gender: {
                                        description: "The gender selected by this person, male or female."
                                    },
                                    id: {
                                        description: "The app user's App-Scoped User ID."
                                    },
                                    lastName: {
                                        description: "The person's last name."
                                    },
                                    link: {
                                        description: "A link to the person's Timeline."
                                    },
                                    name: {
                                        description: "The person's full name."
                                    }
                                },
                                placeholder: "Enter fields to extract from user's profile."
                            }
                        },
                        github: {
                            callbackUrl: {
                                hint: "The set of redirect URIs specified as valid in the GitHub for your OAuth app.",
                                label: "Authorization callback URL",
                                placeholder: "Enter Authorization callback URL.",
                                validations: {
                                    required: "Authorization callback URL is a required field."
                                }
                            },
                            clientId: {
                                hint: "The <1>Client ID</1> you received from GitHub for your OAuth app.",
                                label: "Client ID",
                                placeholder: "Enter Client ID from Github application.",
                                validations: {
                                    required: "Client ID is a required field."
                                }
                            },
                            clientSecret: {
                                hint: "The <1>Client secret</1> you received from GitHub for your OAuth app.",
                                label: "Client secret",
                                placeholder: "Enter Client secret from Github application.",
                                validations: {
                                    required: "Client secret is a required field."
                                }
                            },
                            scopes: {
                                heading: "Scopes",
                                hint:
                                    "The type of access provided for the connected apps to access data " +
                                    "from GitHub. Click <1>here</1> to learn more.",
                                list: {
                                    email: {
                                        description: "Grants read access to a user's email addresses."
                                    },
                                    profile: {
                                        description: "Grants access to read a user's profile data."
                                    }
                                }
                            }
                        },
                        google: {
                            AdditionalQueryParameters: {
                                ariaLabel: "Google authenticator additional query parameters",
                                hint: "Additional query parameters to be sent to Google.",
                                label: "Additional Query Parameters",
                                placeholder: "Enter additional query parameters.",
                                validations: {
                                    required: "Client secret is not a required field."
                                }
                            },
                            callbackUrl: {
                                hint: "The authorized redirect URI used to obtain Google credentials.",
                                label: "Authorized redirect URI",
                                placeholder: "Enter Authorized redirect URI.",
                                validations: {
                                    required: "Authorized redirect URI is a required field."
                                }
                            },
                            clientId: {
                                hint: "The <1>Client ID</1> you received from Google for your OAuth app.",
                                label: "Client ID",
                                placeholder: "Enter Client ID from Google application.",
                                validations: {
                                    required: "Client ID is a required field."
                                }
                            },
                            clientSecret: {
                                hint: "The <1>Client secret</1> you received from Google for your OAuth app.",
                                label: "Client secret",
                                placeholder: "Enter Client secret from Google application.",
                                validations: {
                                    required: "Client secret is a required field."
                                }
                            },
                            enableGoogleOneTap: {
                                hint: "Enabling Google One Tap as a sign in option",
                                label: "Google One Tap",
                                placeholder: "Google one tap as a sign in option"
                            },
                            scopes: {
                                heading: "Scopes",
                                hint:
                                    "The type of access provided for the connected apps to access data " +
                                    "from Google. Click <1>here</1> to learn more.",
                                list: {
                                    email: {
                                        description: "Allows to view user's email address."
                                    },
                                    openid: {
                                        description: "Allows to authenticate using OpenID Connect."
                                    },
                                    profile: {
                                        description: "Allows to view user's basic profile data."
                                    }
                                }
                            }
                        },
                        microsoft: {
                            commonAuthQueryParams: {
                                ariaLabel: "Microsoft authenticator additional query parameters",
                                hint: "Additional query parameters to be sent to Microsoft.",
                                label: "Additional Query Parameters",
                                placeholder: "Enter additional query parameters.",
                                validations: {
                                    required: "Client secret is not a required field."
                                }
                            },
                            callbackUrl: {
                                hint: "The authorized redirect URI used to obtain Microsoft credentials.",
                                label: "Authorized redirect URI",
                                placeholder: "Enter Authorized redirect URI.",
                                validations: {
                                    required: "Authorized redirect URI is a required field."
                                }
                            },
                            clientId: {
                                hint: "The <1>Client ID</1> you received from Microsoft for your OAuth app.",
                                label: "Client ID",
                                placeholder: "Enter Client ID from Microsoft application.",
                                validations: {
                                    required: "Client ID is a required field."
                                }
                            },
                            clientSecret: {
                                hint: "The <1>Client secret</1> you received from Microsoft for your OAuth app.",
                                label: "Client secret",
                                placeholder: "Enter Client secret from Microsoft application.",
                                validations: {
                                    required: "Client secret is a required field."
                                }
                            },
                            scopes: {
                                ariaLabel: "Scopes provided by Microsoft Authenticator",
                                heading: "Scopes",
                                hint:
                                    "The type of access provided for the connected apps to access data " +
                                    "from Microsoft. Click <1>here</1> to learn more.",
                                label: "Scopes",
                                list: {
                                    email: {
                                        description: "Allows to view user's email address."
                                    },
                                    openid: {
                                        description: "Allows to authenticate using OpenID Connect."
                                    },
                                    profile: {
                                        description: "Allows to view user's basic profile data."
                                    }
                                },
                                placeholder: "e.g: openid"
                            }
                        },
                        hypr: {
                            appId: {
                                hint: "The <1>Application ID</1> you received from HYPR for your OAuth app.",
                                label: "Relying Party App ID",
                                placeholder: "Enter App ID from HYPR application.",
                                validations: {
                                    required: "Relying Party App ID is a required field."
                                }
                            },
                            apiToken: {
                                hint: "The relying party app access token generated in the control center.",
                                label: "API Token",
                                placeholder: "Enter API token from HYPR",
                                validations: {
                                    required: "API token is a required field."
                                }
                            },
                            baseUrl: {
                                hint: "The base URL of your HYPR server deployment.",
                                label: "Base URL",
                                placeholder: "Enter HYPR server base URL",
                                validations: {
                                    required: "Base URL is a required field."
                                }
                            }
                        },
                        saml: {
                            AuthRedirectUrl: {
                                ariaLabel: "SAML assertion consumer service URL",
                                hint:
                                    "The Assertion Consumer Service (ACS) URL determines where" +
                                    " {{productName}} expects the external identity provider to send the" +
                                    " SAML response.",
                                label: "Assertion Consumer Service (ACS) URL",
                                placeholder: "Assertion Consumer Service (ACS) URL"
                            },
                            DigestAlgorithm: {
                                ariaLabel: "Select the digest algorithm for description.",
                                label: "Select digest algorithm",
                                placeholder: "Select digest algorithm"
                            },
                            ISAuthnReqSigned: {
                                ariaLabel: "Is authentication request signed?",
                                hint:
                                    "When enabled {{productName}} will sign the SAML2 authentication" +
                                    " request to the external IdP.",
                                label: "Authentication request signing"
                            },
                            IdPEntityId: {
                                ariaLabel: "Identity provider entity ID",
                                hint:
                                    "This is the <1>&lt;saml2:Issuer&gt;</1> value specified in" +
                                    " the SAML responses issued by the external IdP. Also, this needs to" +
                                    " be a unique value to identify the external IdP within your organization.",
                                label: "Identity provider entity ID",
                                placeholder: "Enter identity provider entity ID"
                            },
                            IncludeProtocolBinding: {
                                ariaLabel: "Include protocol binding in the request",
                                hint:
                                    "Specifies whether the transport mechanism should be included in the" +
                                    " small authentication request.",
                                label: "Include protocol binding in the request"
                            },
                            IsAuthnRespSigned: {
                                ariaLabel: "Authentication response must be signed always?",
                                hint:
                                    "Specifies if SAML2 authentication response from the external" +
                                    " IdP must be signed or not.",
                                label: "Strictly verify authentication response signature info"
                            },
                            IsLogoutEnabled: {
                                ariaLabel: "Specify whether logout is enabled for IdP",
                                hint: "Specify whether logout is supported by the external IdP.",
                                label: "Identity provider logout enabled"
                            },
                            IsLogoutReqSigned: {
                                ariaLabel: "Specify whether logout is enabled for IdP",
                                hint:
                                    "When enabled {{productName}} will sign the SAML2 logout" +
                                    " request sent to the external IdP.",
                                label: "Logout request signing",
                                placeholder: ""
                            },
                            IsSLORequestAccepted: {
                                ariaLabel: "Specify whether logout is enabled for IdP",
                                hint:
                                    "Specify whether single logout request from the" +
                                    " IdP must be accepted by {{productName}}.",
                                label: "Accept identity provider logout request"
                            },
                            IsUserIdInClaims: {
                                ariaLabel: "Use Name ID as the user identifier.",
                                hint:
                                    "To specify an attribute from the SAML 2.0 assertion as the user" +
                                    " identifier, configure the subject attribute from the attributes section.",
                                label: "Find user ID from attributes"
                            },
                            LogoutReqUrl: {
                                ariaLabel: "Specify SAML 2.0 IdP Logout URL",
                                hint:
                                    "Enter the IdP's logout URL value if it's different from the Single Sign-On URL" +
                                    " mentioned above.",
                                label: "IdP logout URL",
                                placeholder: "Enter logout URL"
                            },
                            NameIDType: {
                                ariaLabel: "Choose NameIDFormat for SAML 2.0 assertion",
                                hint:
                                    "This specifies the name identifier format that is used to " +
                                    "exchange information regarding the user in the SAML " +
                                    "assertion sent from the external IdP.",
                                label: "Identity provider NameID format",
                                placeholder: "Select identity provider NameIDFormat"
                            },
                            RequestMethod: {
                                ariaLabel: "HTTP protocol for SAML 2.0 bindings",
                                hint:
                                    "This specifies the mechanisms to transport SAML" +
                                    " messages in communication protocols.",
                                label: "HTTP protocol binding",
                                placeholder: "Select HTTP protocol binding"
                            },
                            SPEntityId: {
                                ariaLabel: "Service provider entity ID",
                                hint:
                                    "This value will be used as the <1><saml2:Issuer></1> in the" +
                                    " SAML requests initiated from {{productName}} to" +
                                    " external Identity Provider (IdP). You need to provide" +
                                    " a unique value as the Service Provider (SP) entity ID.",
                                label: "Service provider entity ID",
                                placeholder: "Enter service provider entity ID"
                            },
                            SSOUrl: {
                                ariaLabel: "Single Sign-On URL",
                                hint:
                                    "Single sign-on URL of the external IdP. This is " +
                                    "where {{productName}} will send its authentication requests.",
                                label: "Identity provider Single Sign-On URL",
                                placeholder: "https://ENTERPRISE_IDP/samlsso"
                            },
                            SignatureAlgorithm: {
                                ariaLabel: "Select the signature algorithm for request signing.",
                                label: "Signature algorithm",
                                placeholder: "Select signature algorithm."
                            },
                            commonAuthQueryParams: {
                                ariaLabel: "SAML request additional query parameters",
                                label: "Additional query parameters"
                            },
                            isAssertionSigned: {
                                ariaLabel: "Enable assertion signing",
                                hint: "Specify if SAMLAssertion element is signed",
                                label: "Enable assertion signing"
                            },
                            includeCert: {
                                ariaLabel: "Include public certificate",
                                hint: "Include public certificate in the request",
                                label: "Include public certificate"
                            },
                            includeNameIDPolicy: {
                                ariaLabel: "Include Name ID Policy",
                                hint: "Include NameIDPolicy in the request",
                                label: "Include Name ID Policy"
                            },
                            isEnableAssertionEncryption: {
                                ariaLabel: "Enable assertion encryption",
                                hint: "Specify if SAMLAssertion element is encrypted",
                                label: "Enable assertion encryption"
                            },
                            authenticationContextClass: {
                                ariaLabel: "Authentication context class",
                                hint: "Authentication context class",
                                label: "Authentication context class",
                                placeholder: "Search available authentication context classes"
                            },
                            customAuthenticationContextClass: {
                                ariaLabel: "Custom Authentication context class",
                                hint: "Specify the custom authentication context class",
                                label: "Custom authentication context class",
                                placeholder: "Enter custom authentication context class"
                            },
                            attributeConsumingServiceIndex: {
                                ariaLabel: "Attribute consuming service index",
                                hint: "Specify the Attribute Consuming Service Index",
                                label: "Attribute consuming service index",
                                placeholder: "Enter attribute consuming service index"
                            },
                            isArtifactBindingEnabled: {
                                ariaLabel: "Enable artifact binding",
                                hint: "Enable artifact binding",
                                label: "Enable artifact binding"
                            },
                            artifactResolveEndpointUrl: {
                                ariaLabel: "Artifact resolve endpoint URL",
                                hint: "Specify the artifact resolve endpoint URL",
                                label: "Artifact resolve endpoint URL",
                                placeholder: "Enter artifact resolve endpoint URL"
                            },
                            isArtifactResolveReqSigned: {
                                ariaLabel: "Sign artifact resolve request",
                                hint: "Sign artifact resolve request",
                                label: "Sign artifact resolve request"
                            },
                            isArtifactResponseSigned: {
                                ariaLabel: "Sign artifact response",
                                hint: "Sign artifact response",
                                label: "Sign artifact response"
                            },
                            authContextComparisonLevel: {
                                ariaLabel: "Authentication context comparison level",
                                hint: "Authentication context comparison level",
                                label: "Authentication context comparison level",
                                placeholder: ""
                            }
                        }
                    },
                    common: {
                        customProperties: "Custom Properties",
                        invalidQueryParamErrorMessage: "These are not valid query parameters",
                        invalidScopesErrorMessage: "Scopes must contain 'openid'",
                        invalidURLErrorMessage: "Enter a valid URL",
                        requiredErrorMessage: "This field cannot be empty"
                    },
                    generalDetails: {
                        description: {
                            hint: "A text description of the connection.",
                            label: "Description",
                            placeholder: "Enter a description of the connection."
                        },
                        image: {
                            hint:
                                "A URL for the image of the connection for display purposes. If not provided" +
                                " a generated thumbnail will be displayed. Recommended size is 200x200 pixels.",
                            label: "Logo",
                            placeholder: "https://myapp-resources.io/my_app_image.png"
                        },
                        name: {
                            hint: "Enter a unique name for this connection.",
                            label: "Name",
                            placeholder: "Enter a name for the connection.",
                            validations: {
                                duplicate: "A connection already exists with this name",
                                empty: "Connection name is required",
                                maxLengthReached: "Connection name cannot exceed {{ maxLength }} characters.",
                                required: "Connection name is required"
                            }
                        },
                        issuer: {
                            hint: "A unique issuer value of the trusted token issuer.",
                            label: "Issuer",
                            placeholder: "Enter the issuer."
                        },
                        alias: {
                            hint: "Alias value for {{productName}} in the trusted token issuer.",
                            label: "Alias",
                            placeholder: "Enter the alias."
                        }
                    },
                    jitProvisioning: {
                        associateLocalUser: {
                            label: "Associate provisioned users with existing local users",
                            hint:
                                "When enabled, users that are provisioned with this identity " +
                                "provider will be linked to the local users who are already registered " +
                                "with the same email address."
                        },
                        enableJITProvisioning: {
                            disabledMessageContent:
                                "You cannot disable the Just-in-Time User" +
                                " Provisioning setting because the following applications" +
                                " require it to be enabled.",
                            disabledMessageHeader: "Operation Not Allowed",
                            hint: "Specify if users federated from this identity provider need to be proxied.",
                            label: "Just-in-Time (JIT) User Provisioning"
                        },
                        provisioningScheme: {
                            children: {
                                0: "Prompt for username, password and consent",
                                1: "Prompt for password and consent",
                                2: "Prompt for consent",
                                3: "Provision silently"
                            },
                            hint: "Select the scheme to be used, when users are provisioned.",
                            label: "Provisioning scheme"
                        },
                        provisioningUserStoreDomain: {
                            hint: "Select user store domain name to provision users.",
                            label: "User store domain to always provision users"
                        }
                    },
                    outboundConnectorAccordion: {
                        default: {
                            0: "Default",
                            1: "Make default"
                        },
                        enable: {
                            0: "Enabled",
                            1: "Disabled"
                        }
                    },
                    outboundProvisioningRoles: {
                        heading: "OutBound Provisioning Roles",
                        hint: "Select and add as identity provider outbound provisioning roles",
                        label: "Role",
                        placeHolder: "Select Role",
                        popup: {
                            content: "Add Role"
                        }
                    },
                    roleMapping: {
                        heading: "Role Mapping",
                        hint: "Map local roles with the Identity Provider roles",
                        keyName: "Local Role",
                        validation: {
                            duplicateKeyErrorMsg: "This role is already mapped. Please select another role",
                            keyRequiredMessage: "Please enter the local role",
                            valueRequiredErrorMessage: "Please enter an IDP role to map to"
                        },
                        valueName: "Identity Provider Role"
                    },
                    uriAttributeSettings: {
                        group: {
                            heading: "Group",
                            hint: "Specifies the attribute that identifies the groups at the connection.",
                            label: "Group Attribute",
                            mappedRolesAbsentMessage:
                                "With your current configuration, <1>Group Attribute</1> is not configured. " +
                                "You can select an attribute from the dropdown.",
                            mappedRolesPresentMessage:
                                "Please note that <1>{{ mappedRolesClaim }}</1> which is mapped to the <1>{{ rolesClaim }}</1> attribute " +
                                "will be considered as the default <1>Group Attribute</1> with the current configuration. " +
                                "You can select an attribute from the dropdown.",
                            messageOIDC:
                                "Please note that OpenID Connect attribute named <1>{{ attribute }}</1> will be considered as the default " +
                                "<1>Group Attribute</1> as you have not added a custom attribute mapping.",
                            messageSAML:
                                "Please note that <1>{{ attribute }}</1> attribute will be considered as the default " +
                                "<1>Group Attribute</1> as you have not added a custom attribute mapping.",
                            placeHolder: "Select the attribute",
                            roleMappingDisabledMessage:
                                "<1>Custom Attribute Mapping</1> is disabled in " +
                                "your system configuration. This might affect certain flows related to " +
                                "the connection. Proceed with caution.",
                            validation: {
                                empty: "Please select an attribute for groups"
                            }
                        },
                        subject: {
                            heading: "Subject",
                            hint:
                                "The attribute that identifies the user at the enterprise connection. " +
                                "When attributes are configured based on the authentication response of " +
                                "this connection, you can use one of them as the subject. " +
                                "Otherwise, the default <1>saml2:Subject</1> in the SAML response is used " +
                                "as the subject attribute.",
                            label: "Subject Attribute",
                            placeHolder: "Default Subject",
                            validation: {
                                empty: "Please select an attribute for subject"
                            }
                        }
                    },
                    certificateSection: {
                        certificateEditSwitch: {
                            jwks: "Use JWKS Endpoint",
                            pem: "Provide Certificates"
                        },
                        noCertificateAlert:
                            "There are no certificates available for this trusted token issuer. " +
                            "Therefore {{productName}} will no longer be able to validate tokens issued from this issuer."
                    }
                },
                helpPanel: {
                    tabs: {
                        samples: {
                            content: {
                                docs: {
                                    goBack: "Go back",
                                    hint:
                                        "Click on the following  Identity Provider types to check out the " +
                                        "corresponding documentation.",
                                    title: "Select a Template Type"
                                }
                            },
                            heading: "Docs"
                        }
                    }
                },
                list: {
                    actions: "Actions",
                    name: "Name"
                },
                modals: {
                    addAuthenticator: {
                        subTitle: "Add new authenticator to the connection",
                        title: "Add New Authenticator"
                    },
                    addCertificate: {
                        subTitle: "Add new certificate to the connection",
                        title: "Configure Certificates"
                    },
                    addProvisioningConnector: {
                        subTitle: "Follow the steps to add new outbound provisioning connector",
                        title: "Create outbound provisioning connector"
                    },
                    attributeSelection: {
                        content: {
                            searchPlaceholder: "Search Attributes"
                        },
                        subTitle: "Add new attributes or remove existing attributes.",
                        title: "Update attribute selection"
                    }
                },
                notifications: {
                    addFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Create error"
                        },
                        genericError: {
                            description: "An error occurred while adding the authenticator.",
                            message: "Create error"
                        },
                        success: {
                            description: "Successfully added the authenticator.",
                            message: "Create successful"
                        }
                    },
                    addIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Create error"
                        },
                        genericError: {
                            description: "An error occurred while creating the connection.",
                            message: "Create error"
                        },
                        success: {
                            description: "Successfully created the connection.",
                            message: "Create successful"
                        }
                    },
                    apiLimitReachedError: {
                        error: {
                            description: "You have reached the maximum number of connections allowed.",
                            message: "Failed to create the connection"
                        }
                    },
                    changeCertType: {
                        jwks: {
                            description:
                                "Please note that the certificates will be overridden " + "by the the JWKS endpoint.",
                            message: "Warning!"
                        },
                        pem: {
                            description:
                                "Please note that the JWKS endpoint will be overridden " + "by the certificates.",
                            message: "Warning!"
                        }
                    },
                    deleteCertificate: {
                        error: {
                            description: "{{ description }}",
                            message: "Certificate delete error"
                        },
                        genericError: {
                            description: "An error occurred while deleting the certificate.",
                            message: "Certificate delete error"
                        },
                        success: {
                            description: "Successfully deleted the certificate.",
                            message: "Delete successful"
                        }
                    },
                    deleteConnection: {
                        error: {
                            description: "{{ description }}",
                            message: "Connection Delete Error"
                        },
                        genericError: {
                            description: "An error occurred while deleting the connection.",
                            message: "Connection Delete Error"
                        },
                        success: {
                            description: "Successfully deleted the connection.",
                            message: "Delete Successful"
                        }
                    },
                    deleteDefaultAuthenticator: {
                        error: {
                            description: "The default federated authenticator cannot be deleted.",
                            message: "Federated Authenticator Deletion Error"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteDefaultConnector: {
                        error: {
                            description: "The default outbound provisioning connector cannot be deleted.",
                            message: "Outbound Connector Deletion error"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Connection Delete Error"
                        },
                        genericError: {
                            description: "An error occurred while deleting the connection.",
                            message: "Connection Delete Error"
                        },
                        success: {
                            description: "Successfully deleted the connection.",
                            message: "Delete successful"
                        }
                    },
                    deleteIDPWithConnectedApps: {
                        error: {
                            description: "There are applications using this connection.",
                            message: "Cannot Delete"
                        }
                    },
                    disableAuthenticator: {
                        error: {
                            description: "You cannot disable the default authenticator.",
                            message: "Data validation error"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    disableIDPWithConnectedApps: {
                        error: {
                            description: "There are applications using this connection.",
                            message: "Cannot Disable"
                        }
                    },
                    disableOutboundProvisioningConnector: {
                        error: {
                            description: "You cannot disable the default outbound provisioning connector.",
                            message: "Data validation error"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    duplicateCertificateUpload: {
                        error: {
                            description: "The certificate already exists for the IDP: {{idp}}",
                            message: "Certificate duplication error "
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getAllLocalClaims: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving attributes.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getConnectionDetails: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection details.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving authenticator metadata.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection details.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connections.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplate: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving IDP template.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplateList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection template list.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connector details.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connector metadata.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connectors list.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getRolesList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving roles.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    submitAttributeSettings: {
                        error: {
                            description: "Need to configure all the mandatory properties.",
                            message: "Cannot perform update"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    updateAttributes: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating connection attributes.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated connection attributes.",
                            message: "Update successful"
                        }
                    },
                    updateClaimsConfigs: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating claim configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated claim configurations.",
                            message: "Update successful"
                        }
                    },
                    updateEmailOTPAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating Email OTP connector.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the Email OTP connector.",
                            message: "Update successful"
                        }
                    },
                    updateSMSOTPAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the SMS OTP connector.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the SMS OTP connector.",
                            message: "Update successful"
                        }
                    },
                    updateGenericAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the connector.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the connector.",
                            message: "Update successful"
                        }
                    },
                    updateFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the federated authenticator.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the federated authenticator.",
                            message: "Update successful"
                        }
                    },
                    updateFederatedAuthenticators: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the federated authenticators.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the federated authenticators.",
                            message: "Update successful"
                        }
                    },
                    updateIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the connection.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the connection.",
                            message: "Update successful"
                        }
                    },
                    updateIDPCertificate: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the connection certificate.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the connection certificate.",
                            message: "Update successful"
                        }
                    },
                    updateIDPRoleMappings: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating outbound provisioning role configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated outbound provisioning role configurations.",
                            message: "Update successful"
                        }
                    },
                    updateJITProvisioning: {
                        error: {
                            description: "",
                            message: ""
                        },
                        genericError: {
                            description: "An error occurred while the updating JIT provisioning configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the JIT provisioning configurations.",
                            message: "Update successful"
                        }
                    },
                    updateOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating the outbound provisioning connector.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the outbound provisioning connector.",
                            message: "Update successful"
                        }
                    },
                    updateOutboundProvisioningConnectors: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating the outbound provisioning connectors.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the outbound provisioning connectors.",
                            message: "Update Successful"
                        }
                    }
                },
                placeHolders: {
                    emptyAuthenticatorList: {
                        subtitles: {
                            0: "There are currently no authenticators available.",
                            1: "You can add a new authenticator easily by using the",
                            2: "predefined templates."
                        },
                        title: "Add an authenticator"
                    },
                    emptyCertificateList: {
                        subtitles: {
                            0: "This IDP has no certificates added.",
                            1: "Add a certificate to view it here."
                        },
                        title: "No certificates"
                    },
                    emptyConnectionTypeList: {
                        subtitles: {
                            0: "There are currently no connection types available.",
                            1: "for configuration."
                        },
                        title: "No connection types found"
                    },
                    emptyConnectorList: {
                        subtitles: {
                            0: "This IDP has no outbound provisioning connectors configured.",
                            1: "Add a connector to view it here."
                        },
                        title: "No outbound provisioning connectors"
                    },
                    emptyIDPList: {
                        subtitles: {
                            0: "There are no connections available at the moment.",
                            1: "You can add a new connection by following",
                            2: "the steps in the creation wizard."
                        },
                        title: "Add a new Connection"
                    },
                    emptyIDPSearchResults: {
                        subtitles: {
                            0: "We couldn't find any results for '{{ searchQuery }}'",
                            1: "Please try a different search term."
                        },
                        title: "No results found"
                    },
                    noAttributes: {
                        subtitles: {
                            0: "There are no attributes selected at the moment."
                        },
                        title: "No attributes added"
                    }
                },
                popups: {
                    appStatus: {
                        disabled: {
                            content:
                                "The connection is disabled. Please enable the authentication " +
                                "provider to use it's services.",
                            header: "Disabled",
                            subHeader: ""
                        },
                        enabled: {
                            content: "The connection is enabled.",
                            header: "Enabled",
                            subHeader: ""
                        }
                    }
                },
                templates: {
                    apple: {
                        wizardHelp: {
                            clientId: {
                                description: "Provide the <1>Services ID</1> created at Apple.",
                                heading: "Services ID"
                            },
                            heading: "Help",
                            keyId: {
                                description: "Provide the <1>Key Identifier</1> of the private key generated.",
                                heading: "Key ID"
                            },
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                idpDescription: "Provide a unique name for the connection.",
                                heading: "Name"
                            },
                            preRequisites: {
                                configureAppleSignIn:
                                    "See Apple's guide on configuring your environment for" + " Sign in with Apple.",
                                configureReturnURL: "Add the following URL as a <1>Return URL</1>.",
                                configureWebDomain: "Use the following as a <1>Web Domain</1>.",
                                getCredentials:
                                    "Before you begin, create a <1>Sign in With Apple</1> enabled" +
                                    " application on <3>Apple Developer Portal</3> with a <5>Services ID</5> and a" +
                                    " <5>Private Key</5>.",
                                heading: "Prerequisite"
                            },
                            privateKey: {
                                description: "Provide the <1>Private Key</1> generated for the application.",
                                heading: "Private Key"
                            },
                            subHeading: "Use the guide below",
                            teamId: {
                                description: "Provide the Apple developer <1>Team ID</1>.",
                                heading: "Team ID"
                            }
                        }
                    },
                    enterprise: {
                        addWizard: {
                            subtitle: "Configure an IDP to connect with standard authentication protocols.",
                            title: "Standard based Connections"
                        },
                        saml: {
                            preRequisites: {
                                configureIdp: "See Asgardeo guide on configuring SAML IdP",
                                configureRedirectURL:
                                    "Use the following URL as the " + "<1>Assertion Consumer Service (ACS) URL</1>.",
                                heading: "Prerequisite",
                                hint:
                                    "The Assertion Consumer Service (ACS) URL determines" +
                                    " where {{productName}} expects the external identity" +
                                    " provider to send the SAML response."
                            }
                        },
                        validation: {
                            invalidName:
                                "{{idpName}} is not a valid name. It should not contain any other" +
                                " alphanumerics except for periods (.), dashes (-), underscores (_) and spaces.",
                            name: "Identity verification provider name is not valid"
                        }
                    },
                    trustedTokenIssuer: {
                        addWizard: {
                            title: "Trusted token issuer",
                            subtitle:
                                "Register a trusted token issuer to exchange its token for a token issued by {{productName}}"
                        },
                        forms: {
                            steps: {
                                general: "General Settings",
                                certificate: "Certificates"
                            },
                            name: {
                                label: "Trusted token issuer name",
                                placeholder: "Enter a name for the trusted token isser"
                            },
                            issuer: {
                                label: "Issuer",
                                placeholder: "Enter the issuer",
                                hint: "A unique issuer value of the trusted token issuer.",
                                validation: {
                                    notValid: "{{issuer}} is not a valid issuer."
                                }
                            },
                            alias: {
                                label: "Alias",
                                placeholder: "Enter the alias",
                                hint: "Alias value for {{productName}} in the trusted token issuer.",
                                validation: {
                                    notValid: "{{alias}} is not a valid alias."
                                }
                            },
                            certificateType: {
                                label: "Mode of certificate configuration",
                                requiredCertificate: "A certificate is required to create a trusted token issuer."
                            },
                            jwksUrl: {
                                optionLabel: "JWKS endpoint",
                                placeholder: "Enter JWKS endpoint URL",
                                label: "JWKS endpoint URL",
                                hint:
                                    "{{productName}} will use this URL to obtain keys to verify the signed responses from " +
                                    "your trusted token issuer.",
                                validation: {
                                    notValid: "Please enter a valid URL"
                                }
                            },
                            pem: {
                                optionLabel: "Use PEM certificate",
                                hint:
                                    "{{productName}} will use this certificate to verify the signed responses from " +
                                    "your trusted token issuer.",
                                uploadCertificateButtonLabel: "Upload certificate file",
                                dropzoneText: "Drag and drop a certificate file here.",
                                pasteAreaPlaceholderText: "Paste trusted token issuer certificate in PEM format."
                            }
                        }
                    },
                    expert: {
                        wizardHelp: {
                            description: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            heading: "Help",
                            name: {
                                connectionDescription:
                                    "Provide a description for the connection to explain more about it.",
                                heading: "Description",
                                idpDescription: "Provide a description for the connection to explain more about it."
                            },
                            subHeading: "Use the guide below"
                        }
                    },
                    facebook: {
                        wizardHelp: {
                            clientId: {
                                description:
                                    "Provide the <1>App ID</1> you received from Facebook when you " +
                                    "registered the OAuth app.",
                                heading: "App ID"
                            },
                            clientSecret: {
                                description:
                                    "Provide the <1>App secret</1> you received from Facebook when you " +
                                    "registered the OAuth app.",
                                heading: "App secret"
                            },
                            heading: "Help",
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            preRequisites: {
                                configureOAuthApps: "See Facebooks's guide on configuring apps.",
                                configureRedirectURL: "Add the following URL as a <1>Valid OAuth Redirect URI</1>.",
                                configureSiteURL: "Use the following as the <1>Site URL</1>.",
                                getCredentials:
                                    "Before you begin, create an <1>app</1> " +
                                    "<3>on Facebook</3>, and obtain an <5>App ID & secret</5>.",
                                heading: "Prerequisite"
                            },
                            subHeading: "Use the guide below"
                        }
                    },
                    github: {
                        wizardHelp: {
                            clientId: {
                                description:
                                    "Provide the <1>Client ID</1> you received from GitHub when you " +
                                    "registered the OAuth app.",
                                heading: "Client ID"
                            },
                            clientSecret: {
                                description:
                                    "Provide the <1>Client secret</1> you received from GitHub when you " +
                                    "registered the OAuth app.",
                                heading: "Client secret"
                            },
                            heading: "Help",
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            preRequisites: {
                                configureHomePageURL: "Use the following as the <1>HomePage URL</1>.",
                                configureOAuthApps: "See GitHub's guide on configuring OAuth Apps.",
                                configureRedirectURL: "Add the following URL as the <1>Authorization callback URL</1>.",
                                getCredentials:
                                    "Before you begin, create an <1>OAuth application</1> " +
                                    "<3>on GitHub</3>, and obtain a <5>client ID & secret</5>.",
                                heading: "Prerequisite"
                            },
                            subHeading: "Use the guide below"
                        }
                    },
                    google: {
                        wizardHelp: {
                            clientId: {
                                description:
                                    "Provide the <1>Client ID</1> you received from Google when you " +
                                    "registered the OAuth app.",
                                heading: "Client ID"
                            },
                            clientSecret: {
                                description:
                                    "Provide the <1>Client secret</1> you received from Google when you " +
                                    "registered the OAuth app.",
                                heading: "Client secret"
                            },
                            heading: "Help",
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            preRequisites: {
                                configureOAuthApps: "See Google's guide on configuring OAuth Apps.",
                                configureRedirectURL: "Add the following URL as the <1>Authorized Redirect URI</1>.",
                                getCredentials:
                                    "Before you begin, create an <1>OAuth application</1> " +
                                    "<3>on Google Console</3>, and obtain a <5>client ID & secret</5>.",
                                heading: "Prerequisite"
                            },
                            subHeading: "Use the guide below"
                        }
                    },
                    organizationIDP: {
                        wizardHelp: {
                            name: {
                                description:
                                    "Provide a unique name for the enterprise authentication provider so" +
                                    " that it can be easily identified.",
                                heading: "Name"
                            },
                            description: {
                                description:
                                    "Provide a description for the enterprise authentication provider to" +
                                    " explain more about it.",
                                heading: "Description",
                                example: "E.g., This is the authenticator for MyOrg, which acts as the IDP for MyApp."
                            }
                        }
                    },
                    microsoft: {
                        wizardHelp: {
                            clientId: {
                                description:
                                    "Provide the <1>Client ID</1> you received from Microsoft when you " +
                                    "registered the OAuth app.",
                                heading: "Client ID"
                            },
                            clientSecret: {
                                description:
                                    "Provide the <1>Client secret</1> you received from Microsoft when you " +
                                    "registered the OAuth app.",
                                heading: "Client secret"
                            },
                            heading: "Help",
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            preRequisites: {
                                configureOAuthApps: "See Microsoft's guide on configuring OAuth Apps.",
                                configureRedirectURL: "Add the following URL as the <1>Authorized Redirect URI</1>.",
                                getCredentials:
                                    "Before you begin, create an <1>OAuth application</1> " +
                                    "<3>on Microsoft</3>, and obtain a <5>client ID & secret</5>.",
                                heading: "Prerequisite"
                            },
                            subHeading: "Use the guide below"
                        }
                    },
                    hypr: {
                        wizardHelp: {
                            apiToken: {
                                description:
                                    "Provide the <1>API Token</1> obtained from HYPR. This will be used to access HYPR's APIs.",
                                heading: "API Token"
                            },
                            appId: {
                                description:
                                    "Provide the <1>Application ID</1> of the application registered in the HYPR control center.",
                                heading: "App ID"
                            },
                            baseUrl: {
                                description: "Provide the <1>base URL</1> of your HYPR server deployment.",
                                heading: "Base URL"
                            },
                            heading: "Help",
                            name: {
                                connectionDescription: "Provide a unique name for the connection.",
                                heading: "Name",
                                idpDescription: "Provide a unique name for the connection."
                            },
                            preRequisites: {
                                rpDescription:
                                    "Before you begin, create a relying party application in the <1>HYPR control center</1>, and obtain the application ID.",
                                tokenDescription:
                                    "You also have to obtain an <1>API token</1> for your application created on HYPR.",
                                heading: "Prerequisite"
                            }
                        }
                    },
                    manualSetup: {
                        heading: "Manual Setup",
                        subHeading: "Create a connection with custom configurations."
                    },
                    quickSetup: {
                        heading: "Quick Setup",
                        subHeading: "Predefined set of templates to speed up your connection creation."
                    }
                },
                wizards: {
                    addAuthenticator: {
                        header: "Fill the basic information about the authenticator.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "Authenticator Configuration"
                            },
                            authenticatorSelection: {
                                manualSetup: {
                                    subTitle: "Add a new authenticator with custom configurations.",
                                    title: "Manual Setup"
                                },
                                quickSetup: {
                                    subTitle: "Predefined authenticator templates to speed up the process.",
                                    title: "Quick Setup"
                                },
                                title: "Authenticator Selection"
                            },
                            authenticatorSettings: {
                                emptyPlaceholder: {
                                    subtitles: [
                                        "This authenticator does not have any settings available to be",
                                        "configured at this level. Simply click on <1>Finish</1>."
                                    ],
                                    title: "No Settings available for this Authenticator."
                                }
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    addIDP: {
                        header: "Fill the basic information about the connection.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "Authenticator Configuration"
                            },
                            generalSettings: {
                                title: "General settings"
                            },
                            provisioningConfiguration: {
                                title: "Provisioning Configuration"
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    addProvisioningConnector: {
                        header: "Fill the basic information about the provisioning connector.",
                        steps: {
                            connectorConfiguration: {
                                title: "Connector Details"
                            },
                            connectorSelection: {
                                defaultSetup: {
                                    subTitle: "Select the type of the new outbound provisioning connector",
                                    title: "Connector Types"
                                },
                                title: "Connector selection"
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    buttons: {
                        finish: "Finish",
                        next: "Next",
                        previous: "Previous"
                    }
                }
            },

            idp: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "E.g. Name, Enabled etc."
                            },
                            filterCondition: {
                                placeholder: "E.g. Starts with etc."
                            },
                            filterValue: {
                                placeholder: "Enter value to search"
                            }
                        }
                    },
                    placeholder: "Search by connection name"
                },
                buttons: {
                    addAttribute: "Add Attribute",
                    addAuthenticator: "New Authenticator",
                    addCertificate: "New Certificate",
                    addConnector: "New Connector",
                    addIDP: "New Connection"
                },
                confirmations: {
                    deleteAuthenticator: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this authenticator, you will not be able to get it back. All the " +
                            "applications depending on this also might stop working. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the authenticator."
                    },
                    deleteConnector: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this connector, you will not be able to get it back. Please " +
                            "proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the connector."
                    },
                    deleteIDP: {
                        assertionHint: "Please type <1>{{ name }}</1> to confirm.",
                        content:
                            "If you delete this connection, you will not be able to recover it. " +
                            "Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently delete the connection."
                    },
                    deleteIDPWithConnectedApps: {
                        assertionHint: "",
                        content: "Remove the associations from these applications before deleting:",
                        header: "Unable to Delete",
                        message: "There are applications using this connection. "
                    }
                },
                connectedApps: {
                    action: "Go to Login Flow",
                    header: "Connected Application(s) of {{idpName}}.",
                    subHeader: "Applications connected to {{idpName}} are listed here.",
                    placeholders: {
                        search: "Search by application name",
                        emptyList: "There are no applications connected to {{idpName}} at the moment."
                    },
                    applicationEdit: {
                        back: "Go back to {{idpName}}"
                    },
                    genericError: {
                        description: "Error occurred while trying to retrieve connected applications.",
                        message: "Error Occurred."
                    }
                },
                dangerZoneGroup: {
                    deleteIDP: {
                        actionTitle: "Delete Connection",
                        header: "Delete Connection",
                        subheader: "Once you delete the connection, it cannot be recovered. Please be certain."
                    },
                    disableIDP: {
                        actionTitle: "Disable Connection",
                        header: "Disable Connection",
                        subheader:
                            "Once you disable the connection, it can no longer be used until " + "you enable it again.",
                        subheader2: "Enable the connection to use it with your applications."
                    },
                    header: "Danger Zone"
                },
                forms: {
                    advancedConfigs: {
                        alias: {
                            hint:
                                "If the resident connection is known by an alias at the federated identity " +
                                "provider, specify it here.",
                            label: "Alias"
                        },
                        certificateType: {
                            certificateJWKS: {
                                label: "Use JWKS endpoint",
                                placeholder: "Value should be the certificate in JWKS format.",
                                validations: {
                                    empty: "Certificate value is required",
                                    invalid: "JWKS endpoint should be a valid URI."
                                }
                            },
                            certificatePEM: {
                                label: "Provide certificate",
                                placeholder: "Value should be a PEM URL.",
                                validations: {
                                    empty: "Certificate value is required"
                                }
                            },
                            hint:
                                "If the type is JWKS, the value should be a JWKS URL. If the type is PEM, the" +
                                " value should be the certificate in PEM format.",
                            label: "Select Certificate Type"
                        },
                        federationHub: {
                            hint: "Check if this points to a federation hub connection",
                            label: "Federation Hub"
                        },
                        homeRealmIdentifier: {
                            hint: "Enter the home realm identifier for this connection",
                            label: "Home Realm Identifier"
                        },
                        implicitAssociation: {
                            enable: {
                                label: "Implicit account linking",
                                hint:
                                    "During token exchange if there is a matching local account found," +
                                    " it will be linked implicitly"
                            },
                            primaryAttribute: {
                                label: "Primary lookup attribute",
                                hint:
                                    "Select the primary attribute that will be used to check if" +
                                    " there is a matching local user account"
                            },
                            secondaryAttribute: {
                                label: "Secondary lookup attribute",
                                hint:
                                    "Secondary attribute will be used if a unique user is not found using the primary attribute"
                            },
                            warning: "Ensure that the selected attributes are verified by the token issuer"
                        }
                    },
                    attributeSettings: {
                        attributeListItem: {
                            validation: {
                                empty: "Please enter a value"
                            }
                        },
                        attributeMapping: {
                            attributeColumnHeader: "Attribute",
                            attributeMapColumnHeader: "Connection attribute",
                            attributeMapInputPlaceholderPrefix: "eg: Connection's attribute for ",
                            componentHeading: "Attributes Mapping",
                            hint: "Add attributes supported by connection",
                            placeHolder: {
                                title: "No mapped attributes found",
                                subtitle: "There are no mapped attributes added for this connection at the moment.",
                                action: "Add Attribute Mapping"
                            },
                            attributeMapTable: {
                                mappedAttributeColumnHeader: "Mapped Attribute",
                                externalAttributeColumnHeader: "External Connection Attribute"
                            },
                            heading: "Connection Attribute Mappings",
                            subheading: "Add and map the supported attributes from external connection.",
                            search: {
                                placeHolder: "Search mapped attributes"
                            },
                            attributeDropdown: {
                                label: "Maps to",
                                placeHolder: "Select mapping attribute",
                                noResultsMessage: "Try another attribute search."
                            },
                            externalAttributeInput: {
                                label: "External IdP Attribute",
                                placeHolder: "Enter external IdP attribute",
                                existingErrorMessage: "There's already a attribute mapped with this name."
                            },
                            addAttributeButtonLabel: "Add Attribute Mapping",
                            modal: {
                                header: "Add Attribute Mappings",
                                placeholder: {
                                    title: "You haven't selected any attributes",
                                    subtitle: "Map attributes and click Add Attribute Mapping to get started."
                                }
                            }
                        },
                        attributeProvisioning: {
                            attributeColumnHeader: {
                                0: "Attribute",
                                1: "Connection attribute"
                            },
                            attributeMapColumnHeader: "Default value",
                            attributeMapInputPlaceholderPrefix: "eg: a default value for the ",
                            componentHeading: "Provisioning Attributes Selection",
                            hint: "Specify required attributes for provisioning"
                        },
                        attributeSelection: {
                            searchAttributes: {
                                placeHolder: "Search attributes"
                            }
                        }
                    },
                    authenticatorAccordion: {
                        default: {
                            0: "Default",
                            1: "Make default"
                        },
                        enable: {
                            0: "Enabled",
                            1: "Disabled"
                        }
                    },
                    common: {
                        customProperties: "Custom Properties",
                        internetResolvableErrorMessage: "URL must be internet resolvable.",
                        invalidQueryParamErrorMessage: "These are not valid query parameters",
                        invalidURLErrorMessage: "Enter a valid URL",
                        requiredErrorMessage: "This is required"
                    },
                    generalDetails: {
                        description: {
                            hint: "A meaningful description about the connection.",
                            label: "Description",
                            placeholder: "Enter a description of the connection."
                        },
                        image: {
                            hint: "A URL to query the image of the connection.",
                            label: "Connection Image URL",
                            placeholder: "E.g. https://example.com/image.png"
                        },
                        name: {
                            hint: "Enter a unique name for this connection.",
                            label: "Connection Name",
                            placeholder: "Enter a name for the connection.",
                            validations: {
                                duplicate: "A connection already exists with this name",
                                empty: "Connection name is required",
                                maxLengthReached: "Connection name cannot exceed {{ maxLength }} characters."
                            }
                        }
                    },
                    jitProvisioning: {
                        enableJITProvisioning: {
                            disabledMessageContent: {
                                1:
                                    "You cannot modify Proxy Mode settings since multiple applications" +
                                    " depend on this connection. To resolve this conflict, you need" +
                                    " to remove this connection from the listed resources.",
                                2:
                                    "You are not allowed to modify Proxy Mode settings as an application" +
                                    " depends on this connection. To resolve this conflict, you need to remove" +
                                    " this connection from the listed resource."
                            },
                            disabledMessageHeader: "Operation Not Allowed",
                            hint: "Specify if users federated from this identity provider need to be proxied.",
                            label: "Just-in-Time (JIT) User Provisioning"
                        },
                        provisioningScheme: {
                            children: {
                                0: "Prompt for username, password and consent",
                                1: "Prompt for password and consent",
                                2: "Prompt for consent",
                                3: "Provision silently"
                            },
                            hint: "Select the scheme to be used, when users are provisioned.",
                            label: "Provisioning scheme"
                        },
                        provisioningUserStoreDomain: {
                            hint: "Select user store domain name to provision users.",
                            label: "User store domain to always provision users"
                        }
                    },
                    outboundConnectorAccordion: {
                        default: {
                            0: "Default",
                            1: "Make default"
                        },
                        enable: {
                            0: "Enabled",
                            1: "Disabled"
                        }
                    },
                    outboundProvisioningRoles: {
                        heading: "OutBound Provisioning Roles",
                        hint: "Select and add as connection outbound provisioning roles",
                        label: "Role",
                        placeHolder: "Select Role",
                        popup: {
                            content: "Add Role"
                        }
                    },
                    outboundProvisioningTitle: "Outbound Provisioning Connectors",
                    roleMapping: {
                        heading: "Role Mapping",
                        hint: "Map local roles with the Identity Provider roles",
                        keyName: "Local Role",
                        validation: {
                            duplicateKeyErrorMsg: "This role is already mapped. Please select another role",
                            keyRequiredMessage: "Please enter the local role",
                            valueRequiredErrorMessage: "Please enter an IDP role to map to"
                        },
                        valueName: "Connection Role"
                    },
                    uriAttributeSettings: {
                        role: {
                            heading: "Role",
                            hint: "Specifies the attribute that identifies the roles at the connection",
                            label: "Role Attribute",
                            placeHolder: "Select Attribute",
                            validation: {
                                empty: "Please select an attribute for role"
                            }
                        },
                        subject: {
                            heading: "Subject",
                            hint: "Specifies the attribute that identifies the user at the connection",
                            label: "Subject Attribute",
                            placeHolder: "Select Attribute",
                            validation: {
                                empty: "Please select an attribute for subject"
                            }
                        }
                    }
                },
                helpPanel: {
                    tabs: {
                        samples: {
                            content: {
                                docs: {
                                    goBack: "Go back",
                                    hint:
                                        "Click on the following  connection types to check out the " +
                                        "corresponding documentation.",
                                    title: "Select a Template Type"
                                }
                            },
                            heading: "Docs"
                        }
                    }
                },
                list: {
                    actions: "Actions",
                    name: "Name"
                },
                modals: {
                    addAuthenticator: {
                        subTitle: "Add new authenticator to the connection: {{ idpName }}",
                        title: "Add New Authenticator"
                    },
                    addCertificate: {
                        subTitle: "Add new certificate to the connection: {{ idpName }}",
                        title: "Configure Certificates"
                    },
                    addProvisioningConnector: {
                        subTitle: "Follow the steps to add new outbound provisioning connector",
                        title: "Create outbound provisioning connector"
                    },
                    attributeSelection: {
                        content: {
                            searchPlaceholder: "Search Attributes"
                        },
                        subTitle: "Add new attributes or remove existing attributes.",
                        title: "Update attribute selection"
                    }
                },
                notifications: {
                    addFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Create error"
                        },
                        genericError: {
                            description: "An error occurred while adding the authenticator.",
                            message: "Create error"
                        },
                        success: {
                            description: "Successfully added the authenticator.",
                            message: "Create successful"
                        }
                    },
                    addIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Create error"
                        },
                        genericError: {
                            description: "An error occurred while creating the connection.",
                            message: "Create error"
                        },
                        success: {
                            description: "Successfully created the connection.",
                            message: "Create successful"
                        }
                    },
                    apiLimitReachedError: {
                        error: {
                            description: "You have reached the maximum number of connections allowed.",
                            message: "Failed to create the connection"
                        }
                    },
                    changeCertType: {
                        jwks: {
                            description:
                                "Please note that the certificates will be overridden ." + "by the the JWKS endpoint.",
                            message: "Warning!"
                        },
                        pem: {
                            description:
                                "Please note that the JWKS endpoint will be overridden ." + "by the certificates.",
                            message: "Warning!"
                        }
                    },
                    deleteCertificate: {
                        error: {
                            description: "{{ description }}",
                            message: "Certificate delete error"
                        },
                        genericError: {
                            description: "An error occurred while deleting the certificate.",
                            message: "Certificate delete error"
                        },
                        success: {
                            description: "Successfully deleted the certificate.",
                            message: "Delete successful"
                        }
                    },
                    deleteDefaultAuthenticator: {
                        error: {
                            description: "The default federated authenticator cannot be deleted.",
                            message: "Federated Authenticator Deletion Error"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteDefaultConnector: {
                        error: {
                            description: "The default outbound provisioning connector cannot be deleted.",
                            message: "Outbound Connector Deletion error"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Connection Delete Error"
                        },
                        genericError: {
                            description: "An error occurred while deleting the connection.",
                            message: "Connection Delete Error"
                        },
                        success: {
                            description: "Successfully deleted the connection.",
                            message: "Delete successful"
                        }
                    },
                    disableAuthenticator: {
                        error: {
                            description: "You cannot disable the default authenticator.",
                            message: "Data validation error"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    disableOutboundProvisioningConnector: {
                        error: {
                            description: "You cannot disable the default outbound provisioning connector.",
                            message: "Data validation error"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    duplicateCertificateUpload: {
                        error: {
                            description: "The certificate already exists for the IDP: {{idp}}",
                            message: "Certificate duplication error "
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getAllLocalClaims: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving attributes.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving authenticator metadata.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection details.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connections.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplate: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection template.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplateList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving connection template list.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connector details.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connector metadata.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval error"
                        },
                        genericError: {
                            description: "An error occurred retrieving the outbound provisioning connectors list.",
                            message: "Retrieval error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getRolesList: {
                        error: {
                            description: "{{ description }}",
                            message: "Retrieval Error"
                        },
                        genericError: {
                            description: "An error occurred while retrieving roles.",
                            message: "Retrieval Error"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    submitAttributeSettings: {
                        error: {
                            description: "Need to configure all the mandatory properties.",
                            message: "Cannot perform update"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    tierLimitReachedError: {
                        emptyPlaceholder: {
                            action: "View Plans",
                            subtitles:
                                "You can contact the organization administrator or (if you are the " +
                                "administrator) upgrade your subscription to increase the allowed limit.",
                            title: "You have reached the maximum number of IdPs allowed " + "for this organization."
                        },
                        heading: "You’ve reached the maximum limit for IdPs"
                    },
                    updateClaimsConfigs: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating claim configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated claim configurations.",
                            message: "Update successful"
                        }
                    },
                    updateFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the federated authenticator.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the federated authenticator.",
                            message: "Update successful"
                        }
                    },
                    updateFederatedAuthenticators: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the federated authenticators.",
                            message: "Update error"
                        },
                        success: {
                            description: "Successfully updated the federated authenticators.",
                            message: "Update successful"
                        }
                    },
                    updateIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the connection.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the connection.",
                            message: "Update successful"
                        }
                    },
                    updateIDPCertificate: {
                        error: {
                            description: "{{ description }}",
                            message: "Update error"
                        },
                        genericError: {
                            description: "An error occurred while updating the connection certificate.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the connection certificate.",
                            message: "Update successful"
                        }
                    },
                    updateIDPRoleMappings: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating outbound provisioning role configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated outbound provisioning role configurations.",
                            message: "Update successful"
                        }
                    },
                    updateJITProvisioning: {
                        error: {
                            description: "",
                            message: ""
                        },
                        genericError: {
                            description: "An error occurred while the updating JIT provisioning configurations.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the JIT provisioning configurations.",
                            message: "Update successful"
                        }
                    },
                    updateOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating the outbound provisioning connector.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the outbound provisioning connector.",
                            message: "Update successful"
                        }
                    },
                    updateOutboundProvisioningConnectors: {
                        error: {
                            description: "{{ description }}",
                            message: "Update Error"
                        },
                        genericError: {
                            description: "An error occurred while updating the outbound provisioning connectors.",
                            message: "Update Error"
                        },
                        success: {
                            description: "Successfully updated the outbound provisioning connectors.",
                            message: "Update Successful"
                        }
                    }
                },
                placeHolders: {
                    emptyAuthenticatorList: {
                        subtitles: {
                            0: "There are currently no authenticators available.",
                            1: "You can add a new authenticator easily by using the",
                            2: "predefined templates."
                        },
                        title: "Add an authenticator"
                    },
                    emptyCertificateList: {
                        subtitles: {
                            0: "This connection has no certificates added.",
                            1: "Add a certificate to view it here."
                        },
                        title: "No certificates"
                    },
                    emptyConnectorList: {
                        subtitles: {
                            0: "This connection has no outbound provisioning connectors configured.",
                            1: "Add a connector to view it here."
                        },
                        title: "No outbound provisioning connectors"
                    },
                    emptyIDPList: {
                        subtitles: {
                            0: "There are no connections available at the moment.",
                            1: "You can add a new connection easily by following the",
                            2: "steps in the connection creation wizard."
                        },
                        title: "Add a new Connection"
                    },
                    emptyIDPSearchResults: {
                        subtitles: {
                            0: "We couldn't find any results for '{{ searchQuery }}'",
                            1: "Please try a different search term."
                        },
                        title: "No results found"
                    },
                    noAttributes: {
                        subtitles: {
                            0: "There are no attributes selected at the moment."
                        },
                        title: "No attributes added"
                    }
                },
                templates: {
                    manualSetup: {
                        heading: "Manual Setup",
                        subHeading: "Create a connection with custom configurations."
                    },
                    quickSetup: {
                        heading: "Quick Setup",
                        subHeading: "Predefined set of templates to speed up your connection creation."
                    }
                },
                wizards: {
                    addAuthenticator: {
                        header: "Fill the basic information about the authenticator.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "Authenticator Configuration"
                            },
                            authenticatorSelection: {
                                manualSetup: {
                                    subTitle: "Add a new authenticator with custom configurations.",
                                    title: "Manual Setup"
                                },
                                quickSetup: {
                                    subTitle: "Predefined authenticator templates to speed up the process.",
                                    title: "Quick Setup"
                                },
                                title: "Authenticator Selection"
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    addIDP: {
                        header: "Fill the basic information about the connection.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "Authenticator Configuration"
                            },
                            generalSettings: {
                                title: "General settings"
                            },
                            provisioningConfiguration: {
                                title: "Provisioning Configuration"
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    addProvisioningConnector: {
                        header: "Fill the basic information about the provisioning connector.",
                        steps: {
                            connectorConfiguration: {
                                title: "Connector Details"
                            },
                            connectorSelection: {
                                defaultSetup: {
                                    subTitle: "Select the type of the new outbound provisioning connector",
                                    title: "Connector Types"
                                },
                                title: "Connector selection"
                            },
                            summary: {
                                title: "Summary"
                            }
                        }
                    },
                    buttons: {
                        finish: "Finish",
                        next: "Next",
                        previous: "Previous"
                    }
                }
            }
        },
        pages: {
            applicationTemplate: {
                backButton: "Go back to Applications",
                subTitle:
                    "Create an application using one of the templates given below. If nothing matches your " +
                    "application type, start with the Standard-Based Application template.",
                title: "Create a New Application"
            },
            applications: {
                alternateSubTitle: "Manage your applications and customize login flows.",
                subTitle: "Create and manage your applications and configure sign-in.",
                title: "Applications"
            },
            applicationsEdit: {
                backButton: "Go back to Applications",
                subTitle: null,
                title: null
            },
            authenticationProvider: {
                subTitle: "Create and manage connections to use in the login flow of your applications.",
                title: "Connections"
            },
            authenticationProviderTemplate: {
                backButton: "Go back to Connections",
                disabledHint: {
                    apple:
                        "The Sign in with Apple feature cannot be configured with localhost or 127.0.0.1. Attempting this setup results in an invalid domain error from Apple's configuration step. For testing, use a real or DNS-resolvable domain name. For local development, domain mappings in the `etc/hosts` file can be utilized."
                },
                search: {
                    placeholder: "Search by name"
                },
                subTitle: "Select a connection type and create a new connection.",
                supportServices: {
                    authenticationDisplayName: "Authentication",
                    provisioningDisplayName: "Provisioning"
                },
                title: "Create a New Connection"
            },
            idp: {
                subTitle: "Manage connections to allow users to log in to your application through them.",
                title: "Connections"
            },
            idpTemplate: {
                backButton: "Go back to connections",
                subTitle: "Choose one of the following connections.",
                supportServices: {
                    authenticationDisplayName: "Authentication",
                    provisioningDisplayName: "Provisioning"
                },
                title: "Select Connection"
            },
            idvp: {
                subTitle:
                    "Manage Identity Verification Providers to allow users to verify their identities " +
                    "through them.",
                title: "Identity Verification Providers"
            },
            idvpTemplate: {
                backButton: "Go back to Identity Verification Providers",
                subTitle: "Choose one of the following identity verification providers.",
                title: "Select Identity Verification Provider",
                search: {
                    placeholder: "Search by name"
                }
            },
            overview: {
                subTitle:
                    "Configure and manage applications, connections, users and roles, attribute " + "dialects, etc.",
                title: "Welcome, {{firstName}}"
            }
        },
        placeholders: {
            emptySearchResult: {
                action: "Clear search query",
                subtitles: {
                    0: 'We couldn\'t find any results for "{{query}}"',
                    1: "Please try a different search term."
                },
                title: "No results found"
            },
            underConstruction: {
                action: "Back to home",
                subtitles: {
                    0: "We're doing some work on this page.",
                    1: "Please bare with us and come back later. Thank you for your patience."
                },
                title: "Page under construction"
            }
        }
    },
    manage: {
        features: {
            certificates: {
                keystore: {
                    advancedSearch: {
                        error: "Filter query format incorrect",
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "E.g. alias etc."
                                },
                                filterCondition: {
                                    placeholder: "E.g. Starts with etc."
                                },
                                filterValue: {
                                    placeholder: "E.g. wso2carbon etc."
                                }
                            }
                        },
                        placeholder: "Search by alias"
                    },
                    attributes: {
                        alias: "Alias"
                    },
                    certificateModalHeader: "View Certificate",
                    confirmation: {
                        content: "This action is irreversible and will permanently delete the certificate.",
                        header: "Are you sure?",
                        hint: "Please type <1>{{id}}</1> to confirm.",
                        message: "This action is irreversible and will permanently delete the certificate.",
                        primaryAction: "Confirm",
                        tenantContent:
                            "This will delete the tenant certificate permanently." +
                            "Once deleted, unless you import a new tenant certificate," +
                            "you won't be able to access the portal applications." +
                            "To continue deleting, enter the alias of the certificate and click delete."
                    },
                    errorCertificate:
                        "An error occurred while decoding the certificate." +
                        " Please ensure the certificate is valid.",
                    errorEmpty: "Either add a certificate file or paste the content of a PEM-encoded certificate.",
                    forms: {
                        alias: {
                            label: "Alias",
                            placeholder: "Enter an alias",
                            requiredErrorMessage: "Alias is required"
                        }
                    },
                    list: {
                        columns: {
                            actions: "Actions",
                            name: "Name"
                        }
                    },
                    notifications: {
                        addCertificate: {
                            genericError: {
                                description: "An error occurred while importing the certificate.",
                                message: "Something went wrong!"
                            },
                            success: {
                                description: "The certificate has been imported successfully.",
                                message: "Certificate import success"
                            }
                        },
                        deleteCertificate: {
                            genericError: {
                                description: "There was an error while deleting the certificate.",
                                message: "Something went wrong!"
                            },
                            success: {
                                description: "The certificate has been successfully deleted.",
                                message: "Certificate deleted successfully"
                            }
                        },
                        download: {
                            success: {
                                description: "The certificate has started downloading.",
                                message: "Certificate download started"
                            }
                        },
                        getAlias: {
                            genericError: {
                                description: "An error occurred while fetching the certificate.",
                                message: "Something went wrong"
                            }
                        },
                        getCertificate: {
                            genericError: {
                                description: "There was an error while fetching ." + "the certificate",
                                message: "Something went wrong!"
                            }
                        },
                        getCertificates: {
                            genericError: {
                                description: "An error occurred while fetching certificates.",
                                message: "Something went wrong"
                            }
                        },
                        getPublicCertificate: {
                            genericError: {
                                description: "There was an error while fetching the organization certificate.",
                                message: "Something went wrong!"
                            }
                        }
                    },
                    pageLayout: {
                        description: "Manage certificates in the keystore.",
                        primaryAction: "Import Certificate",
                        title: "Certificates"
                    },
                    placeholders: {
                        emptyList: {
                            action: "Import Certificate",
                            subtitle:
                                "There are currently no certificates available." +
                                "You can import a new certificate by clicking on" +
                                "the button below.",
                            title: "Import Certificate"
                        },
                        emptySearch: {
                            action: "Clear search query",
                            subtitle:
                                "We couldn't find any results for {{searchQuery}}," +
                                "Please try a different search term.",
                            title: "No results found"
                        }
                    },
                    summary: {
                        issuerDN: "Issuer DN",
                        sn: "Serial Number:",
                        subjectDN: "Subject DN",
                        validFrom: "Not valid before",
                        validTill: "Not valid after",
                        version: "Version"
                    },
                    wizard: {
                        dropZone: {
                            action: "Upload Certificate",
                            description: "Drag and drop a certificate file here."
                        },
                        header: "Import Certificate",
                        panes: {
                            paste: "Paste",
                            upload: "Upload"
                        },
                        pastePlaceholder: "Paste the content of a PEM certificate",
                        steps: {
                            summary: "Summary",
                            upload: "Upload certificate"
                        }
                    }
                },
                truststore: {
                    advancedSearch: {
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "E.g. alias, certificate etc."
                                },
                                filterCondition: {
                                    placeholder: "E.g. Starts with etc."
                                },
                                filterValue: {
                                    placeholder: "E.g. wso2carbon etc."
                                }
                            }
                        },
                        placeholder: "Search by group name"
                    }
                }
            },

            roles: {
                addRoleWizard: {
                    buttons: {
                        finish: "Finish",
                        next: "Next",
                        previous: "Previous"
                    },
                    forms: {
                        roleBasicDetails: {
                            domain: {
                                label: {
                                    group: "User Store",
                                    role: "Role Type"
                                },
                                placeholder: "Domain",
                                validation: {
                                    empty: {
                                        group: "Select user store",
                                        role: "Select Role Type"
                                    }
                                }
                            },
                            roleName: {
                                hint: "A name for the {{type}}.",
                                label: "{{type}} Name",
                                placeholder: "Enter {{type}} name",
                                validations: {
                                    duplicate: "A {{type}} already exists with the given {{type}} name.",
                                    duplicateInAudience:
                                        "A role with this name already exists in the selected audience.",
                                    empty: "{{type}} Name is required to proceed.",
                                    invalid:
                                        "A {{type}} name can only contain alphanumeric characters, -, and _. " +
                                        "And must be of length between 3 to 30 characters."
                                }
                            },
                            roleAudience: {
                                hint:
                                    "Set the audience of the role. <1>Note that audience of the role cannot be changed.</1>",
                                label: "Select the role audience",
                                values: {
                                    organization: "Organization",
                                    application: "Application"
                                }
                            },
                            notes: {
                                orgNote:
                                    "When the role audience is organization, you can associate the role with an application which allows organization audience roles.",
                                appNote:
                                    "When the role audience is application, you can associate the role with an application which allows application audience roles.",
                                cannotCreateRole:
                                    "You cannot create a role with role audience as application because there are currently no applications that support application audience roles. Please <1>create an application</1> that supports application audience roles to proceed."
                            },
                            assignedApplication: {
                                hint:
                                    "Assign an application for the role. Note that assigned application for this role cannot be edited after the role is created.",
                                label: "Assigned application",
                                placeholder: "Select application to assign the role",
                                applicationSubTitle: {
                                    application: "Support application-scoped roles.",
                                    organization: "Support organization-scoped role. ",
                                    changeAudience: "Change the audience"
                                },
                                validations: {
                                    empty: "Assigned application is required to create an application-scoped role."
                                },
                                note:
                                    "Note that assigned application for this role cannot be edited after the role is created."
                            }
                        },
                        rolePermission: {
                            apiResource: {
                                label: "Select API Resource",
                                placeholder: "Select an API resource to assign permissions(scopes)",
                                hint: {
                                    empty:
                                        "There are no API resources authorized for the selected application. API Resources can be authorized through <1>here</1>."
                                }
                            },
                            permissions: {
                                label: "Select permissions(scopes) from the selected API resources",
                                placeholder: "Select permissions(scopes)",
                                tooltips: {
                                    noScopes: "No scopes available for the selected API resource",
                                    selectAllScopes: "Select all permissions(scopes)",
                                    removeAPIResource: "Remove API resource"
                                },
                                validation: {
                                    empty:
                                        "Permissions(scopes) list cannot be empty. Select at least one permission(scope)."
                                },
                                permissionsLabel: "Permissions (scopes)"
                            },
                            notes: {
                                applicationRoles:
                                    "Only the APIs and the permissions(scopes) that are authorized in the selected application(<1>{{applicationName}}</1>) will be listed to select."
                            },
                            notifications: {
                                fetchAPIResourceError: {
                                    error: {
                                        description:
                                            "Something went wrong while fetching API resources. Please try again.",
                                        message: "Something went wrong"
                                    }
                                }
                            }
                        }
                    },
                    heading: "Create {{type}}",
                    permissions: {
                        buttons: {
                            collapseAll: "Collapse All",
                            expandAll: "Expand All",
                            update: "Update"
                        }
                    },
                    subHeading: "Create a new {{type}} in the system.",
                    back: "Go back",
                    summary: {
                        labels: {
                            domain: {
                                group: "User Store",
                                role: "Role Type"
                            },
                            groups: "Assigned Group(s)",
                            permissions: "Permission(s)",
                            roleName: "{{type}} Name",
                            roles: "Assigned Role(s)",
                            users: "Assigned User(s)"
                        }
                    },
                    users: {
                        assignUserModal: {
                            heading: "Manage Users",
                            hint: "Select users to add them to the user group.",
                            list: {
                                listHeader: "Name",
                                searchPlaceholder: "Search users",
                                searchByEmailPlaceholder: "Search users by email address"
                            },
                            subHeading: "Add new users or remove existing users assigned to the {{type}}."
                        }
                    },
                    wizardSteps: {
                        0: "Basic Details",
                        1: "Permission Selection",
                        2: "Assign Users",
                        3: "Summary",
                        4: "Groups & Users",
                        5: "Assign Roles"
                    }
                },
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "E.g. role name."
                            },
                            filterCondition: {
                                placeholder: "E.g. Starts with etc."
                            },
                            filterValue: {
                                placeholder: "Enter value to search"
                            }
                        }
                    },
                    placeholder: "Search by role name"
                },
                edit: {
                    placeholders: {
                        errorPlaceHolder: {
                            action: "Go back",
                            subtitles: {
                                0: "An error occurred while retrieving the requested role, possibly because the role does not exist.",
                                1: "Please try again."
                            },
                            title: "Something went wrong"
                        }
                    },
                    basics: {
                        buttons: {
                            update: "Update"
                        },
                        confirmation: {
                            assertionHint: "Please confirm your action.",
                            content:
                                "If you delete this {{type}}, the permissions attached to it will be " +
                                "deleted and the users attached to it will no longer be able to perform intended " +
                                "actions which were previously allowed. Please proceed with caution",
                            header: "Are you sure?",
                            message: "This action is irreversible and will permanently delete the selected {{type}}"
                        },
                        dangerZone: {
                            actionTitle: "Delete {{type}}",
                            buttonDisableHint:
                                "Delete option is disabled because this {{type}} is managed in a" +
                                " remote user store.",
                            header: "Delete {{type}}",
                            subheader: "Once you delete the {{type}}, it cannot be recovered."
                        },
                        fields: {
                            roleName: {
                                name: "Role Name",
                                placeholder: "Enter role name",
                                required: "Role name is required"
                            }
                        }
                    },
                    groups: {
                        addGroupsModal: {
                            heading: "Update Role Groups",
                            subHeading: "Add new groups or remove existing groups assigned to the role."
                        },
                        placeholders: {
                            emptyPlaceholder: {
                                action: "Assign Groups",
                                subtitles: {
                                    0: "There are no groups assigned to this role at the moment."
                                },
                                title: "No groups assigned to the role."
                            },
                            errorPlaceholder: {
                                action: "Refresh",
                                subtitles: {
                                    0: "An error occurred while fetching groups assigned to this role.",
                                    1: "Please try again."
                                },
                                title: "Something went wrong"
                            }
                        },
                        notifications: {
                            error: {
                                description: "{{description}}",
                                message: "Error occurred while updating the groups assigned to the role."
                            },
                            success: {
                                message: "Role updated successfully",
                                description: "The groups assigned to the role have been successfully updated."
                            },
                            genericError: {
                                message: "Something went wrong",
                                description: "We were unable to update the groups assigned to the role."
                            },
                            fetchError: {
                                message: "Something went wrong",
                                description: "We were unable to fetch the groups assigned to the role."
                            }
                        },
                        externalGroupsHeading: "External Groups",
                        heading: "Assigned Groups",
                        localGroupsHeading: "Local Groups",
                        subHeading:
                            "Add or remove the groups assigned to this role. Note that this " +
                            "will affect performing certain tasks.",
                        actions: {
                            search: {
                                placeholder: "Search groups"
                            },
                            assign: {
                                placeholder: "Assign groups"
                            },
                            remove: {
                                label: "Removing groups",
                                placeholder: "Restore groups"
                            }
                        }
                    },
                    menuItems: {
                        basic: "Basics",
                        connectedApps: "Connected Apps",
                        groups: "Groups",
                        permissions: "Permissions",
                        roles: "Roles",
                        users: "Users"
                    },
                    users: {
                        heading: "Assigned Users",
                        subHeading:
                            "Add or remove the users assigned to this role. Note that this will affect performing certain tasks.",
                        actions: {
                            search: {
                                placeholder: "Search users"
                            },
                            assign: {
                                placeholder: "Type username/s to search and assign users"
                            },
                            remove: {
                                label: "Removing users",
                                placeholder: "Restore users"
                            }
                        },
                        placeholders: {
                            emptyPlaceholder: {
                                action: "Assign Users",
                                subtitles: {
                                    0: "There are no users assigned to this role at the moment."
                                },
                                title: "No users assigned to the role."
                            },
                            errorPlaceholder: {
                                action: "Refresh",
                                subtitles: {
                                    0: "An error occurred while fetching users assigned to this role.",
                                    1: "Please try again."
                                },
                                title: "Something went wrong"
                            }
                        },
                        notifications: {
                            error: {
                                description: "{{description}}",
                                message: "Error occurred while updating the users assigned to the role."
                            },
                            success: {
                                message: "Role updated successfully",
                                description: "The users assigned to the role have been successfully updated."
                            },
                            genericError: {
                                message: "Something went wrong",
                                description: "We were unable to update the users assigned to the role."
                            },
                            fetchError: {
                                message: "Something went wrong",
                                description: "We were unable to fetch the users assigned to the role."
                            }
                        },
                        list: {
                            emptyPlaceholder: {
                                action: "Assign User",
                                subtitles: "There are no users assigned to the {{type}} at the moment.",
                                title: "No Users Assigned"
                            },
                            user: "User",
                            organization: "Managed By"
                        }
                    },
                    permissions: {
                        heading: "Assigned Permissions",
                        readOnlySubHeading: "View the assigned permissions of the role.",
                        removedPermissions: "Removed Permissions",
                        subHeading: "Manage assigned permissions in the role."
                    }
                },
                list: {
                    buttons: {
                        addButton: "New {{type}}",
                        filterDropdown: "Filter By"
                    },
                    columns: {
                        actions: "Actions",
                        audience: "Audience",
                        lastModified: "Modified Time",
                        managedByApp: {
                            label: "Can be used only in the application: ",
                            header: "Managed By"
                        },
                        managedByOrg: {
                            label: "Can be used within the organization: ",
                            header: "Managed By"
                        },
                        name: "Role"
                    },
                    confirmations: {
                        deleteItem: {
                            assertionHint: "Please confirm your action.",
                            content:
                                "If you delete this {{type}}, the permissions attached to it will be " +
                                "deleted and the users attached to it will no longer be able to perform " +
                                "intended actions which were previously allowed. Please proceed with caution.",
                            header: "Are you sure?",
                            message: "This action is irreversible and will permanently delete the selected {{type}}"
                        },
                        deleteItemError: {
                            content: "Remove the associations from following application before deleting:",
                            header: "Unable to Delete",
                            message: "There is an application using this role."
                        }
                    },
                    emptyPlaceholders: {
                        emptyRoleList: {
                            action: "New {{type}}",
                            emptyRoles: "No {{type}} found",
                            subtitles: {
                                0: "There are currently no {{type}} available.",
                                1: "You can add a new {{type}} easily by following the",
                                2: "steps in the {{type}} creation wizard."
                            },
                            title: "Add a new {{type}}"
                        },
                        search: {
                            action: "Clear search query",
                            subtitles: {
                                0: "We couldn't find any results for {{searchQuery}}",
                                1: "Please try a different search term."
                            },
                            title: "No results found"
                        }
                    },
                    popups: {
                        delete: "Delete {{type}}",
                        edit: "Edit {{type}}"
                    },
                    filterOptions: {
                        all: "Show All",
                        applicationRoles: "Application Roles",
                        organizationRoles: "Organization Roles"
                    },
                    filterAttirbutes: {
                        name: "Name",
                        audience: "Role Audience"
                    }
                },
                readOnlyList: {
                    emptyPlaceholders: {
                        searchAndFilter: {
                            subtitles: {
                                0: "We couldn't find any results for the specified role name and audience combination.",
                                1: "Please try a different combination."
                            },
                            title: "No results found"
                        }
                    }
                },
                notifications: {
                    createPermission: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while adding permission to role."
                        },
                        genericError: {
                            description: "Couldn't add permissions to role.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Permissions were successfully added to the role.",
                            message: "Role created successfully."
                        }
                    },
                    createRole: {
                        error: {
                            description: "{{description}}",
                            message: "Error occurred while creating the role."
                        },
                        genericError: {
                            description: "Couldn't create the role.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The role was created successfully.",
                            message: "Role created successfully."
                        }
                    },
                    deleteRole: {
                        error: {
                            description: "{{description}}",
                            message: "Unable to delete the selected role."
                        },
                        genericError: {
                            description: "Couldn't remove the selected role.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The selected role was deleted successfully.",
                            message: "Role deleted successfully"
                        }
                    },
                    fetchRoles: {
                        genericError: {
                            description: "An error occurred while retrieving roles.",
                            message: "Something went wrong"
                        }
                    },
                    fetchRole: {
                        genericError: {
                            description: "An error occurred while retrieving the role.",
                            message: "Something went wrong"
                        }
                    },
                    updateRole: {
                        error: {
                            description: "{{description}}",
                            message: "Error updating the selected role."
                        },
                        genericError: {
                            description: "Couldn't update the selected role.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The selected role was updated successfully.",
                            message: "Role updated successfully"
                        }
                    }
                }
            },

            transferList: {
                list: {
                    emptyPlaceholders: {
                        default: "There are no items in this list at the moment.",
                        groups: {
                            selected: "There are no {{type}} assigned to this group.",
                            unselected: "There are no {{type}} available to assign to this group.",
                            common: "No {{type}} found"
                        },
                        roles: {
                            selected: "There are no {{type}} assigned with this role.",
                            unselected: "There are no {{type}} available to assign to this group.",
                            common: "No {{type}} found"
                        },
                        users: {
                            roles: {
                                selected: "There are no {{type}} assigned to this user.",
                                unselected: "There are no {{type}} available to assign to this user."
                            }
                        }
                    },
                    headers: {
                        0: "Domain",
                        1: "Name",
                        2: "Audience"
                    }
                },
                searchPlaceholder: "Search {{type}}"
            },

            users: {
                addUserType: {
                    createUser: {
                        title: "Create user",
                        description: "Create a user in your organization."
                    },
                    inviteParentUser: {
                        title: "Invite parent user",
                        description: "Invite user from the parent organization."
                    }
                },
                advancedSearch: {
                    form: {
                        dropdown: {
                            filterAttributeOptions: {
                                email: "Email",
                                username: "Username"
                            }
                        },
                        inputs: {
                            filterAttribute: {
                                placeholder: "E.g. Username, Email etc."
                            },
                            filterCondition: {
                                placeholder: "E.g. Starts with etc."
                            },
                            filterValue: {
                                placeholder: "Enter value to search"
                            }
                        }
                    },
                    placeholder: "Search by Username"
                },
                all: {
                    heading: "Users",
                    subHeading: "Add and manage user accounts, assign roles to the users and maintain user identities."
                },
                buttons: {
                    addNewUserBtn: "New User",
                    assignUserRoleBtn: "Assign roles",
                    metaColumnBtn: "Columns"
                },
                addUserDropDown: {
                    addNewUser: "Single User",
                    bulkImport: "Multiple Users"
                },
                confirmations: {
                    terminateAllSessions: {
                        assertionHint: "Please confirm your action.",
                        content:
                            "If you proceed with this action, the user will be logged out of all active " +
                            "sessions. They will loose the progress of any ongoing tasks. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently terminate all the active sessions."
                    },
                    terminateSession: {
                        assertionHint: "Please confirm your action.",
                        content:
                            "If you proceed with this action, the user will be logged out of the selected " +
                            "session. They will loose the progress of any ongoing tasks. Please proceed with caution.",
                        header: "Are you sure?",
                        message: "This action is irreversible and will permanently terminate the session."
                    },
                    addMultipleUser: {
                        header: "Before you proceed",
                        message: "Invite users option is disabled",
                        content:
                            "Invite User to Set Password should be enabled to add multiple users. " +
                            "Please enable email invitations for user password setup from Login & Registration settings.",
                        assertionHint: "Please confirm your action."
                    }
                },
                consumerUsers: {
                    fields: {
                        username: {
                            label: "Username",
                            placeholder: "Enter the username",
                            validations: {
                                empty: "Username is a required field",
                                invalid: "A user already exists with this username.",
                                invalidCharacters: "Username seems to contain invalid characters.",
                                regExViolation: "Please enter a valid email address."
                            }
                        }
                    }
                },
                editUser: {
                    tab: {
                        menuItems: {
                            0: "Profile",
                            1: "Groups",
                            2: "Roles",
                            3: "Active Sessions"
                        }
                    },
                    placeholders: {
                        undefinedUser: {
                            action: "Go back to users",
                            subtitles: "It looks like the requested user does not exist.",
                            title: "User not found"
                        }
                    }
                },
                forms: {
                    validation: {
                        dateFormatError:
                            "The format of the {{field}} entered is incorrect. Valid format is " + "YYYY-MM-DD.",
                        formatError: "The format of the {{field}} entered is incorrect.",
                        futureDateError: "The date you entered for the {{field}} field is invalid.",
                        mobileFormatError:
                            "The format of the {{field}} entered is incorrect.  Valid format is " +
                            "[+][country code][area code][local phone number]."
                    }
                },
                guestUsers: {
                    fields: {
                        username: {
                            label: "Username",
                            placeholder: "Enter the username",
                            validations: {
                                empty: "Username is a required field",
                                invalid: "A user already exists with this username.",
                                invalidCharacters: "Username seems to contain invalid characters.",
                                regExViolation: "Please enter a valid email address."
                            }
                        }
                    }
                },
                list: {
                    columns: {
                        actions: "Actions",
                        name: "Name"
                    }
                },
                notifications: {
                    addUser: {
                        error: {
                            description: "{{description}}",
                            message: "Error adding the new user"
                        },
                        genericError: {
                            description: "Couldn't add the new user",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The new user was added successfully.",
                            message: "User added successfully"
                        }
                    },
                    addUserPendingApproval: {
                        error: {
                            description: "{{description}}",
                            message: "Error adding the new user"
                        },
                        genericError: {
                            description: "Couldn't add the new user",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The new user was accepted and pending approval.",
                            message: "User accepted for creation"
                        }
                    },
                    bulkImportUser: {
                        validation: {
                            emptyRowError: {
                                description: "Selected file contains no data.",
                                message: "Empty File"
                            },
                            columnMismatchError: {
                                description:
                                    "Some data rows of the file does not match the required column count. " +
                                    "Please review and correct the data.",
                                message: "Column Count Mismatch"
                            },
                            emptyHeaderError: {
                                description: "Ensure that the first row contains the headers for each column.",
                                message: "Missing Column Headers"
                            },
                            missingRequiredHeaderError: {
                                description:
                                    "The following header(s) are required but are missing in the CSV file: " +
                                    "{{ headers }}.",
                                message: "Missing Required Column Headers"
                            },
                            blockedHeaderError: {
                                description: "The following header(s) are not allowed: {{headers}}.",
                                message: "Blocked Column Headers"
                            },
                            duplicateHeaderError: {
                                description: "The following headers are duplicated: {{headers}}.",
                                message: "Duplicate Column Headers"
                            },
                            invalidHeaderError: {
                                description: "The following headers are invalid: {{headers}}.",
                                message: "Invalid Column Headers"
                            },
                            emptyDataField: {
                                description: "The data field '{{dataField}}' must not be empty.",
                                message: "Empty Data Field"
                            },
                            invalidRole: {
                                description: "{{role}} does not exist.",
                                message: "Role Not Found"
                            },
                            invalidGroup: {
                                description: "{{group}} does not exist.",
                                message: "Group Not Found"
                            }
                        },
                        submit: {
                            error: {
                                description: "{{description}}",
                                message: "Error occured while importing users"
                            },
                            genericError: {
                                description: "Unable to import users",
                                message: "Error occured while importing users"
                            },
                            success: {
                                description: "The users were imported successfully.",
                                message: "Users Imported Successfully"
                            }
                        },
                        timeOut: {
                            description: "Some users may not have been created.",
                            message: "The request has timed out"
                        }
                    },
                    deleteUser: {
                        error: {
                            description: "{{description}}",
                            message: "Error deleting the user"
                        },
                        genericError: {
                            description: "Couldn't delete the user",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "The user was deleted successfully.",
                            message: "User deleted successfully"
                        }
                    },
                    fetchUsers: {
                        error: {
                            description: "{{description}}",
                            message: "Error retrieving users"
                        },
                        genericError: {
                            description: "Couldn't retrieve users",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the users.",
                            message: "Users retrieval successful"
                        }
                    },
                    getAdminRole: {
                        error: {
                            description: "{{description}}",
                            message: "Error retrieving the admin role"
                        },
                        genericError: {
                            description: "Couldn't retrieve the admin roles.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully retrieved the admin roles.",
                            message: "Role retrieval successful"
                        }
                    },
                    revokeAdmin: {
                        error: {
                            description: "{{description}}",
                            message: "Error revoking the admin privileges"
                        },
                        genericError: {
                            description: "Couldn't revoke the admin privileges.",
                            message: "Something went wrong"
                        },
                        success: {
                            description: "Successfully revoked the admin privileges.",
                            message: "Privileges revoked successfully"
                        }
                    }
                },
                placeholders: {
                    emptyList: {
                        action: "Refresh list",
                        subtitles: {
                            0: "The users list returned empty.",
                            1: "Something went wrong while fetching the user list"
                        },
                        title: "No Users Found"
                    },
                    userstoreError: {
                        subtitles: {
                            0: "Couldn't fetch users from the user store",
                            1: "Please try again"
                        },
                        title: "Something went wrong"
                    }
                },
                userSessions: {
                    components: {
                        sessionDetails: {
                            actions: {
                                terminateAllSessions: "Terminate All",
                                terminateSession: "Terminate Session"
                            },
                            labels: {
                                activeApplication: "Active Applications",
                                browser: "Browser",
                                deviceModel: "Device Model",
                                ip: "IP Address",
                                lastAccessed: "Last Accessed {{ date }}",
                                loggedInAs: "Logged in on <1>{{ app }}</1> as <3>{{ user }}</3>",
                                loginTime: "Login Time",
                                os: "Operating System",
                                recentActivity: "Recent Activity"
                            }
                        }
                    },
                    dangerZones: {
                        terminate: {
                            actionTitle: "Terminate",
                            header: "Terminate session",
                            subheader: "You will be logged out of the session on the particular device."
                        }
                    },
                    notifications: {
                        getAdminUser: {
                            error: {
                                description: "{{ description }}",
                                message: "Retrieval Error"
                            },
                            genericError: {
                                description: "An error occurred while retrieving the current user type.",
                                message: "Retrieval Error"
                            }
                        },
                        getUserSessions: {
                            error: {
                                description: "{{ description }}",
                                message: "Retrieval Error"
                            },
                            genericError: {
                                description: "An error occurred while retrieving user sessions.",
                                message: "Retrieval Error"
                            },
                            success: {
                                description: "Successfully retrieved user sessions.",
                                message: "Retrieval Successful"
                            }
                        },
                        terminateAllUserSessions: {
                            error: {
                                description: "{{ description }}",
                                message: "Termination Error"
                            },
                            genericError: {
                                description: "An error occurred while terminating the user sessions.",
                                message: "Termination Error"
                            },
                            success: {
                                description: "Successfully terminated all the user sessions.",
                                message: "Termination Successful"
                            }
                        },
                        terminateUserSession: {
                            error: {
                                description: "{{ description }}",
                                message: "Termination Error"
                            },
                            genericError: {
                                description: "An error occurred while terminating the user session.",
                                message: "Termination Error"
                            },
                            success: {
                                description: "Successfully terminated the user session.",
                                message: "Termination Successful"
                            }
                        }
                    },
                    placeholders: {
                        emptyListPlaceholder: {
                            subtitles: "There are no active sessions for this user.",
                            title: "No active sessions"
                        }
                    }
                },
                usersList: {
                    list: {
                        emptyResultPlaceholder: {
                            addButton: "New User",
                            emptyUsers: "No users found",
                            subTitle: {
                                0: "There are currently no users available.",
                                1: "You can add a new user easily by following the",
                                2: "steps in the user creation wizard."
                            },
                            title: "Add a new User"
                        },
                        iconPopups: {
                            delete: "Delete",
                            edit: "Edit"
                        }
                    },
                    metaOptions: {
                        columns: {
                            emails: "Email",
                            id: "User id",
                            lastModified: "Last modified",
                            name: "Name",
                            userName: "Username"
                        },
                        heading: "Show Columns"
                    },
                    search: {
                        emptyResultPlaceholder: {
                            clearButton: "Clear search query",
                            subTitle: {
                                0: "We couldn't find any results for {{query}}",
                                1: "Please try a different search term."
                            },
                            title: "No results found"
                        }
                    }
                },
                userstores: {
                    userstoreOptions: {
                        all: "All user stores",
                        primary: "Primary"
                    }
                }
            }
        },

        placeholders: {
            emptySearchResult: {
                action: "Clear search query",
                subtitles: {
                    0: 'We couldn\'t find any results for "{{query}}"',
                    1: "Please try a different search term."
                },
                title: "No results found"
            },
            underConstruction: {
                action: "Back to home",
                subtitles: {
                    0: "We're doing some work on this page.",
                    1: "Please bare with us and come back later. Thank you for your patience."
                },
                title: "Page under construction"
            }
        }
    },

    access: "Access",
    actions: "Actions",
    activate: "Activate",
    active: "Active",
    add: "Add",
    addKey: "Add secret",
    addURL: "Add URL",
    all: "All",
    applicationName: "Application name",
    applications: "Applications",
    approvalStatus: "Approval Status",
    approve: "Approve",
    apps: "Apps",
    assignee: "Assignee",
    assignees: "Assignees",
    authentication: "Authentication",
    authenticator: "Authenticator",
    authenticator_plural: "Authenticators",
    back: "Back",
    beta: "Beta",
    browser: "Browser",
    cancel: "Cancel",
    challengeQuestionNumber: "Challenge Question {{number}}",
    change: "Change",
    chunkLoadErrorMessage: {
        description: "An error occurred when serving the requested application. Please try reloading the app.",
        heading: "Something went wrong",
        primaryActionText: "Reload the App"
    },
    claim: "Claim",
    clear: "Clear",
    clientId: "Client ID",
    close: "Close",
    comingSoon: "Coming soon",
    completed: "Completed",
    configure: "Configure",
    confirm: "Confirm",
    contains: "Contains",
    continue: "Continue",
    copyToClipboard: "Copy to clipboard",
    create: "Create",
    createdOn: "Created on",
    dangerZone: "Danger Zone",
    darkMode: "Dark mode",
    delete: "Delete",
    description: "Description",
    deviceModel: "Device model",
    disable: "Disable",
    disabled: "Disabled",
    docs: "Docs",
    documentation: "Documentation",
    done: "Done",
    download: "Download",
    drag: "Drag",
    duplicateURLError: "This value is already added",
    edit: "Edit",
    enable: "Enable",
    enabled: "Enabled",
    endsWith: "Ends with",
    equals: "Equals",
    exitFullScreen: "Exit full-screen",
    explore: "Explore",
    export: "Export",
    featureAvailable: "This feature will be available soon!",
    filter: "Filter",
    finish: "Finish",
    generatePassword: "Generate password",
    goBackHome: "Go back home",
    goFullScreen: "Go full-screen",
    good: "Good",
    help: "Help",
    hide: "Hide",
    hidePassword: "Hide password",
    identityProviders: "Identity Providers",
    import: "Import",
    initiator: "Initiator",
    ipAddress: "IP address",
    issuer: "Issuer",
    lastAccessed: "Last accessed",
    lastModified: "Last modified",
    lastSeen: "Last seen",
    lastUpdatedOn: "Last updated on",
    learnMore: "Learn More",
    lightMode: "Light mode",
    loading: "Loading",
    loginTime: "Login time",
    logout: "Logout",
    maxValidation: "This value should be less than or equal to {{max}}.",
    maximize: "Maximize",
    minValidation: "This value should be greater than or equal to {{min}}.",
    minimize: "Minimize",
    more: "More",
    myAccount: "My Account",
    name: "Name",
    networkErrorMessage: {
        description: "Please try signing in again.",
        heading: "Your session has expired",
        primaryActionText: "Sign In"
    },
    new: "New",
    next: "Next",
    noResultsFound: "No results found",
    okay: "Okay",
    operatingSystem: "Operating system",
    operations: "Operations",
    overview: "Overview",
    personalInfo: "Personal Info",
    pin: "Pin",
    pinned: "Pinned",
    pressEnterPrompt: "Press <1>Enter</1> to select",
    preview: "Preview",
    previous: "Previous",
    priority: "Priority",
    privacy: "Privacy",
    properties: "Properties",
    ready: "Ready",
    regenerate: "Regenerate",
    register: "Register",
    reject: "Reject",
    release: "Release",
    remove: "Remove",
    removeAll: "Remove all",
    required: "This is required.",
    reserved: "Reserved",
    resetFilters: "Reset filters",
    retry: "Retry",
    revoke: "Revoke",
    revokeAll: "Revoke all",
    samples: "Samples",
    save: "Save",
    sdks: "SDKs",
    search: "Search",
    searching: "Searching",
    security: "Security",
    services: "Services",
    settings: "Settings",
    setup: "Set up",
    show: "Show",
    showAll: "Show all",
    showLess: "Show less",
    showMore: "Show more",
    showPassword: "Show password",
    skip: "Skip",
    startsWith: "Starts with",
    step: "Step",
    strong: "Strong",
    submit: "Submit",
    switch: "Switch",
    technologies: "Technologies",
    terminate: "Terminate",
    terminateAll: "Terminate all",
    terminateSession: "Terminate session",
    tooShort: "Too short",
    type: "Type",
    unpin: "Unpin",
    unpinned: "Unpinned",
    update: "Update",
    user: "User",
    verify: "Verify",
    view: "View",
    weak: "Weak",
    weakPassword: "The password strength should at least be good."
};
