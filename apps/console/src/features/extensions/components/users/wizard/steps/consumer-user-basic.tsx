/**
 * Copyright (c) 2021, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import { Field, FormValue, Forms, Validation } from "@wso2is/forms";
import { Button, Hint, PasswordValidation } from "@wso2is/react-components";
import { FormValidation } from "@wso2is/validation";
import React, { MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItemProps, DropdownProps, Form, Grid, Menu, Message, Radio } from "semantic-ui-react";
import { SharedUserStoreConstants } from "../../../../../features/core";
import { EventPublisher, SharedUserStoreUtils } from "../../../../../features/core/utils";
import { getUsersList } from "../../../../../features/users/api/users";
import { 
    BasicUserDetailsInterface,
    UserListInterface
} from "../../../../../features/users/models/user";
import {
    generatePassword, 
    getConfiguration, 
    getUsernameConfiguration
} from "../../../../../features/users/utils";
import { USERSTORE_REGEX_PROPERTIES } from "../../../../../features/userstores/constants/user-store-constants";
import { ValidationDataInterface, ValidationFormInterface } from "../../../../../features/validation/models";
import { CONSUMER_USERSTORE, UsersConstants } from "../../../users/constants";

/**
 * Proptypes for the add consumer user basic component.
 */
export interface AddConsumerUserBasicProps {
    initialValues: any;
    triggerSubmit: boolean;
    emailVerificationEnabled: boolean;
    onSubmit: (values: BasicUserDetailsInterface) => void;
    hiddenFields?: ("userStore" |"userName" | "firstName" | "lastName" | "password" | "email")[];
    requestedPasswordOption?: "ask-password" | "create-password";
    isFirstNameRequired?: boolean;
    isLastNameRequired?: boolean;
    isEmailRequired?: boolean;
    validationConfig?: ValidationDataInterface[];
    setUserSummaryEnabled: (toggle: boolean) => void;
    setAskPasswordFromUser?: (toggle: boolean) => void;
    setOfflineUser?: (toggle: boolean) => void;
    setSelectedUserStore?: (selectedUserStore: string) => void;
    isBasicDetailsLoading?: boolean;
    setBasicDetailsLoading?: (toggle: boolean) => void;
    isUserStoreError: boolean;
    readWriteUserStoresList: DropdownItemProps[];
}

/**
 * Add consumer user basic component.
 *
 * TODO: Add localization support. (https://github.com/wso2-enterprise/asgardeo-product/issues/209)
 *
 * @returns ReactElement
 */
export const AddConsumerUserBasic: React.FunctionComponent<AddConsumerUserBasicProps> = (
    props: AddConsumerUserBasicProps): ReactElement => {

    const {
        initialValues,
        triggerSubmit,
        emailVerificationEnabled,
        onSubmit,
        hiddenFields,
        requestedPasswordOption,
        isFirstNameRequired,
        isLastNameRequired,
        isEmailRequired,
        setUserSummaryEnabled,
        setAskPasswordFromUser,
        setSelectedUserStore,
        setOfflineUser,
        isBasicDetailsLoading,
        setBasicDetailsLoading,
        validationConfig,
        isUserStoreError,
        readWriteUserStoresList
    } = props;

    const [ passwordOption, setPasswordOption ] = useState(initialValues?.passwordOption);
    const [ askPasswordOption, setAskPasswordOption ] = useState<string>("email");
    const [ password, setPassword ] = useState<string>("");
    const [ userStoreRegex, setUserStoreRegex ] = useState<string>("");
    const [ passwordConfig, setPasswordConfig ] = useState<ValidationFormInterface>(undefined);
    const [ usernameConfig, setUsernameConfig ] = useState<ValidationFormInterface>(undefined);
    const [ isValidPassword, setIsValidPassword ] = useState<boolean>(true);
    const [ randomPassword, setRandomPassword ] = useState<string>(undefined);
    const [ userstore, setUserstore ] = useState<string>(CONSUMER_USERSTORE);
    const [ isValidEmail, setIsValidEmail ] = useState<boolean>(false);
    const [ isEmailFilled, setIsEmailFilled ] = useState<boolean>(false);

    const formBottomRef: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();
    const emailRef: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();

    const { t } = useTranslation();

    const [ , setRegExLoading ] = useState<boolean>(false);

    // Username input validation error messages.
    const USER_ALREADY_EXIST_ERROR_MESSAGE: string = t("console:manage.features.users.consumerUsers.fields." +
        "username.validations.invalid");
    const USERNAME_REGEX_VIOLATION_ERROR_MESSAGE: string = t("console:manage.features.users.consumerUsers.fields." +
        "username.validations.regExViolation");
    const USERNAME_HAS_INVALID_CHARS_ERROR_MESSAGE: string = t("console:manage.features.users.consumerUsers.fields." +
        "username.validations.invalidCharacters");
    const USERNAME_HAS_INVALID_SYMBOLS_ERROR_MESSAGE: string = t("extensions:manage.features.user.addUser.validation." +
        "usernameSymbols");
    const USERNAME_HAS_INVALID_LENGTH_ERROR_MESSAGE: string =
        t("extensions:manage.features.user.addUser.validation.usernameLength", {
            maxLength: usernameConfig?.maxLength,
            minLength: usernameConfig?.minLength
        });

    const eventPublisher: EventPublisher = EventPublisher.getInstance();

    //TODO: Re-enable this after reviewing the usage of the generate password feature.
    // /**
    //  * The following useEffect is triggered when a random password is generated.
    //  */
    // useEffect(() => {
    //     if (randomPassword && randomPassword !== "") {
    //         setIsPasswordGenerated(true);
    //     }
    // }, [ randomPassword ]);

    /**
     * Set the password setup option to 'ask-password'.
     */
    useEffect(() => {
        if (!passwordOption) {
            if (!requestedPasswordOption) {
                setPasswordOption("ask-password");

                return;
            }

            setPasswordOption(requestedPasswordOption);
        }
    }, [ requestedPasswordOption ]);

    useEffect(() => {
        if (passwordOption === "create-password") {
            setUserSummaryEnabled(true);
            setAskPasswordFromUser(true);
            setOfflineUser(false);
        } else {
            if (askPasswordOption === "offline") {
                setUserSummaryEnabled(true);
                setAskPasswordFromUser(false);
                setOfflineUser(true);

                return;
            }
            setUserSummaryEnabled(false);
            setAskPasswordFromUser(false);
            setOfflineUser(false);
        }
    }, [ passwordOption, askPasswordOption ]);

    useEffect(() => {
        if (validationConfig) {
            setPasswordConfig(getConfiguration(validationConfig));
            setUsernameConfig(getUsernameConfiguration(validationConfig));
        }
    }, [ validationConfig ]);

    useEffect(() => {
        if (!isAlphanumericUsernameEnabled()) {
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
            setAskPasswordOption("offline");
        }
    }, [ usernameConfig ]);

    /**
     * Check whether the alphanumeric usernames are enabled.
     *
     * @returns isAlphanumericUsernameEnabled - validation status.
     */
    const isAlphanumericUsernameEnabled= (): boolean => {

        return usernameConfig?.enableValidator === "true";
    };

    /**
     * Callback function to validate password.
     *
     * @param valid - validation status.
     * @param validationStatus - detailed validation status.
     */
    const onPasswordValidate = (valid: boolean): void => {

        setIsValidPassword(valid);
    };

    /**
     * The following function gets the user store regex that validates user name.
     */
    const getUserStoreRegex = async () => {
        setRegExLoading(true);
        await SharedUserStoreUtils.getUserStoreRegEx(userstore,
            SharedUserStoreConstants.USERSTORE_REGEX_PROPERTIES.UsernameRegEx)
            .then((response: string) => {
                setUserStoreRegex(response);
                setRegExLoading(false);
            });
    };

    useEffect(() => {
        getUserStoreRegex();
    }, [ userstore ]);

    const askPasswordOptionData: any = {
        "data-testid": "user-mgt-add-user-form-ask-password-option-radio-button",
        label: t("console:manage.features.user.forms.addUserForm.buttons.radioButton.options.askPassword"),
        value: "ask-password"
    };

    const createPasswordOptionData: any = {
        "data-testid": "user-mgt-add-user-form-create-password-option-radio-button",
        label: t("console:manage.features.user.forms.addUserForm.buttons.radioButton.options.createPassword"),
        value: "create-password"
    };

    /**
     * The following function handles the change of the password.
     *
     * @param values - Map of form values.
     */
    const handlePasswordChange = (values: Map<string, FormValue>): void => {
        const password: string = values.get("newPassword").toString();

        setPassword(password);
    };

    /**
     * The following function handles email empty validation.
     *
     * @param values - Map of form values.
     */
    const handleEmailEmpty = (values: Map<string, FormValue>): void => {
        if (values.get("email")?.toString() === "") {
            setIsEmailFilled(false);
        } else {
            setIsEmailFilled(true);
        }
    };

    //TODO: Re-enable this after reviewing the usage of the generate password feature.
    // /**
    //  * The following function generate a random password.
    //  */
    // const generateRandomPassword = (): void => {
    //     const genPasswrod = generate({ length: 11, numbers: true, symbols: true, uppercase: true });
    //     setPassword(genPasswrod);
    //     setRandomPassword(genPasswrod);
    // };

    const getFormValues = (values: Map<string, FormValue>): BasicUserDetailsInterface => {
        eventPublisher.publish("manage-users-customer-password-option", {
            type: values.get("passwordOption")?.toString()
        });

        return {
            domain: userstore,
            email: values.get("email")?.toString(),
            firstName: values.get("firstName")?.toString(),
            lastName: values.get("lastName")?.toString(),
            newPassword: values.get("newPassword") && values.get("newPassword") !== undefined
                ? values.get("newPassword").toString()
                : "",
            passwordOption: values.get("passwordOption")?.toString(),
            userName: values.get("username")?.toString()
        };
    };

    /**
     * Scrolls to the first field that throws an error.
     *
     * @param field - field The name of the field.
     */
    const scrollToInValidField = (field: string): void => {
        const options: ScrollIntoViewOptions = {
            behavior: "smooth",
            block: "center"
        };

        switch (field) {
            case "email":
                emailRef.current.scrollIntoView(options);

                break;
            case "formBottom":
                formBottomRef.current.scrollIntoView(options);

                break;
        }
    };

    /**
     * Verify whether the provided password is valid.
     *
     * @param password - The password to validate.
     */
    const isNewPasswordValid = async (password: string) => {

        if (passwordConfig) {
            return isValidPassword;
        }
        const passwordRegex: string = await SharedUserStoreUtils.getUserStoreRegEx(
            userstore,
            USERSTORE_REGEX_PROPERTIES.PasswordRegEx);

        return SharedUserStoreUtils.validateInputAgainstRegEx(password, passwordRegex);
    };

    /**
     * Validate password and display an error message when the password is invalid.
     *
     * @param value - The value of the password field.
     * @param validation - The validation object.
     */
    const validateNewPassword = async (value: string, validation: Validation) => {
        if (!await isNewPasswordValid(value)) {
            validation.isValid = false;
            validation.errorMessages.push(passwordConfig ?
                t(
                    "extensions:manage.features.user.addUser.validation.error.passwordValidation"
                ) : t(
                    "extensions:manage.features.user.addUser.validation.password"
                ));
        }
        scrollToInValidField("formBottom");
    };

    const renderAskPasswordOption = (): ReactElement => {
        return (
            <div className="mt-4 mb-4 ml-4">
                <Menu
                    compact={ true }
                    size="small"
                    className="mb-4"
                >
                    <Menu.Item
                        name="Invite via email"
                        active={ askPasswordOption === "email" }
                        onClick={ () => setAskPasswordOption("email") }
                        disabled={
                            (
                                !isValidEmail
                                || !isEmailFilled
                            ) && isAlphanumericUsernameEnabled()
                        }
                    />
                    <Menu.Item
                        name="Invite offline"
                        active={ askPasswordOption === "offline" }
                        onClick={ () => setAskPasswordOption("offline") }
                    />
                </Menu>
                {
                    resolveAskPasswordOption()
                }
            </div>
        );
    };

    const resolveAskPasswordOption = (): ReactElement => {
        if (askPasswordOption === "email") {
            return (
                (
                    (
                        isValidEmail
                        && isEmailFilled
                    ) || !isAlphanumericUsernameEnabled()
                ) && (
                    <Grid.Row columns={ 1 }>
                        <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                            <Message
                                icon="mail"
                                content={ t(
                                    "extensions:manage.features.user.addUser.inviteUserTooltip"
                                ) }
                                size="small"
                            />
                        </Grid.Column>
                    </Grid.Row>
                )
            );
        } else if (askPasswordOption === "offline") {
            return (
                <Grid.Row columns={ 1 }>
                    <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                        <Message
                            icon="copy"
                            content={ t(
                                "extensions:manage.features.user.addUser.inviteUserOfflineTooltip"
                            ) }
                            size="small"
                        />
                    </Grid.Column>
                </Grid.Row>
            );
        }

        return null;
    };

    const renderCreatePasswordOption = (): ReactElement => {
        return (
            <>
                <Grid.Row columns={ 2 }>
                    <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                        <div className={ "generate-password" }>
                            <Field
                                data-testid="user-mgt-add-user-form-newPassword-input"
                                className="addon-field-wrapper full-width"
                                hidePassword={ t("common:hidePassword") }
                                label={ t(
                                    "console:manage.features.user.forms.addUserForm.inputs.newPassword.label"
                                ) }
                                name="newPassword"
                                placeholder={ t(
                                    "console:manage.features.user.forms.addUserForm.inputs." +
                                    "newPassword.placeholder"
                                ) }
                                required={ true }
                                requiredErrorMessage={ t(
                                    "console:manage.features.user.forms.addUserForm." +
                                    "inputs.newPassword.validations.empty"
                                ) }
                                showPassword={ t("common:showPassword") }
                                type="password"
                                value={ randomPassword ? randomPassword : initialValues?.newPassword }
                                validation={ validateNewPassword }
                                tabIndex={ 5 }
                                enableReinitialize={ true }
                                listen={ handlePasswordChange }
                                maxWidth={ 60 }
                            />
                            { passwordConfig && (
                                <Button
                                    basic
                                    primary
                                    data-testid="user-mgt-password-generate-button"
                                    type="button"
                                    className="info add-user-step-button"
                                    onClick={ () => {
                                        const randomPass: string = generatePassword(Number(passwordConfig.minLength),
                                            Number(passwordConfig.minLowerCaseCharacters) > 0,
                                            Number(passwordConfig.minUpperCaseCharacters) > 0,
                                            Number(passwordConfig.minNumbers) > 0,
                                            Number(passwordConfig.minSpecialCharacters) > 0,
                                            Number(passwordConfig.minLowerCaseCharacters),
                                            Number(passwordConfig.minUpperCaseCharacters),
                                            Number(passwordConfig.minNumbers),
                                            Number(passwordConfig.minSpecialCharacters),
                                            Number(passwordConfig.minUniqueCharacters));

                                        setRandomPassword(randomPass);
                                        setPassword(randomPass);
                                    } }
                                >
                                    Generate
                                </Button>
                            ) }
                        </div>
                        { passwordConfig && (
                            <PasswordValidation
                                password={ password }
                                minLength={ Number(passwordConfig.minLength) }
                                maxLength={ Number(passwordConfig.maxLength) }
                                minNumbers={ Number(passwordConfig.minNumbers) }
                                minUpperCase={ Number(passwordConfig.minUpperCaseCharacters) }
                                minLowerCase={ Number(passwordConfig.minLowerCaseCharacters) }
                                minSpecialChr={ Number(passwordConfig.minSpecialCharacters) }
                                minUniqueChr={ Number(passwordConfig.minUniqueCharacters) }
                                maxConsecutiveChr={ Number(passwordConfig.maxConsecutiveCharacters) }
                                onPasswordValidate={ onPasswordValidate }
                                translations={ {
                                    case: (Number(passwordConfig?.minUpperCaseCharacters) > 0 &&
                                        Number(passwordConfig?.minLowerCaseCharacters) > 0) ?
                                        t("extensions:manage.features.user.addUser.validation.passwordCase", {
                                            minLowerCase: passwordConfig.minLowerCaseCharacters,
                                            minUpperCase: passwordConfig.minUpperCaseCharacters
                                        }) : (
                                            Number(passwordConfig?.minUpperCaseCharacters) > 0 ?
                                                t("extensions:manage.features.user.addUser.validation.upperCase", {
                                                    minUpperCase: passwordConfig.minUpperCaseCharacters
                                                }) : t("extensions:manage.features.user.addUser.validation" +
                                                    ".lowerCase", {
                                                    minLowerCase: passwordConfig.minLowerCaseCharacters
                                                })
                                        ),
                                    consecutiveChr: 
                                        t("extensions:manage.features.user.addUser.validation.consecutiveCharacters", {
                                            repeatedChr: passwordConfig.maxConsecutiveCharacters
                                        }),
                                    length: t("extensions:manage.features.user.addUser.validation.passwordLength", {
                                        max: passwordConfig.maxLength, min: passwordConfig.minLength
                                    }),
                                    numbers: 
                                        t("extensions:manage.features.user.addUser.validation.passwordNumeric", {
                                            min: passwordConfig.minNumbers
                                        }),
                                    specialChr: 
                                        t("extensions:manage.features.user.addUser.validation.specialCharacter", {
                                            specialChr: passwordConfig.minSpecialCharacters
                                        }),
                                    uniqueChr: 
                                        t("extensions:manage.features.user.addUser.validation.uniqueCharacters", {
                                            uniqueChr: passwordConfig.minUniqueCharacters
                                        })
                                } }
                            />
                        ) }
                    </Grid.Column>
                </Grid.Row>
                <div ref={ formBottomRef } />
            </>
        );
    };

    /**
     * Evaluate wheter to hide the user store field or not based on the `readWriteUserStoresList`
     * 
     * @returns hide the user store field or not
     */
    const hideUserStoreFromReadWriteUserStoresList = (): boolean => {
        if(readWriteUserStoresList) {
            return readWriteUserStoresList?.length === 0 || (readWriteUserStoresList?.length === 1 && 
                readWriteUserStoresList[0]?.value === CONSUMER_USERSTORE);
        }
        
        return true;
    };

    /**
     * The modal to add new user.
     */
    const addUserBasicForm = () => (
        <Forms
            data-testid="user-mgt-add-user-form"
            onSubmit={ async (values: Map<string, FormValue>) => {
                if (passwordOption === "create-password") {
                    // Check whether the new password is valid
                    if (await isNewPasswordValid(values.get("newPassword")
                        ? values.get("newPassword").toString()
                        : "")) {
                        onSubmit(getFormValues(values));
                    }
                }
                else {
                    onSubmit(getFormValues(values));
                }
            } }
            submitState={ triggerSubmit }
        >
            <Grid>
                {   
                    !hiddenFields.includes("userStore") && !hideUserStoreFromReadWriteUserStoresList() && 
                        !isUserStoreError && (
                        <Grid.Row>
                            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                <div ref={ emailRef }/>
                                <Form.Field required={ true }>
                                    <label>
                                        { t("console:manage.features.user.forms.addUserForm.inputs."+
                                        "domain.placeholder") }
                                    </label>
                                    <Dropdown
                                        fluid
                                        selection
                                        labeled
                                        options={ readWriteUserStoresList }
                                        loading={ isBasicDetailsLoading }
                                        data-testid="user-mgt-add-user-form-userstore-dropdown"
                                        name="userstore"
                                        disabled={ false }
                                        value={ userstore }
                                        onChange={
                                            (e: React.ChangeEvent<HTMLInputElement>, data: DropdownProps) => {
                                                setUserstore(data.value.toString());
                                                setSelectedUserStore(data.value.toString());
                                            }
                                        }
                                        tabIndex={ 1 }
                                        maxLength={ 60 }
                                    />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
                {
                    !hiddenFields.includes("userName")
                    && (!isAlphanumericUsernameEnabled())
                        ? (
                            <Grid.Row>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                    <div ref={ emailRef } />
                                    <Field
                                        loading={ isBasicDetailsLoading }
                                        data-testid="user-mgt-add-user-form-email-input"
                                        label={ t("extensions:manage.features.user.addUser.inputLabel" +
                                            ".emailUsername") }
                                        name="email"
                                        placeholder={ t(
                                            "console:manage.features.user.forms.addUserForm.inputs." +
                                        "email.placeholder"
                                        ) }
                                        required={ true }
                                        requiredErrorMessage={ t(
                                            "console:manage.features.user.forms.addUserForm.inputs.email." +
                                                "validations.empty"
                                        ) }
                                        validation={ async (value: string, validation: Validation) => {
                                            setBasicDetailsLoading(true);

                                            // Check username validity against userstore regex.
                                            if (value && (
                                                !SharedUserStoreUtils.validateInputAgainstRegEx(
                                                    value, userStoreRegex))
                                                    || !FormValidation.email(value)) {
                                                validation.isValid = false;
                                                validation.errorMessages.push(USERNAME_REGEX_VIOLATION_ERROR_MESSAGE);
                                                scrollToInValidField("email");
                                                setBasicDetailsLoading(false);
                                            }

                                            try {
                                                // Check for the existence of users in the userstore by the username.
                                                // Some characters disallowed by username
                                                // -regex cause failure in below request.
                                                // Therefore, existence of duplicates is
                                                // -checked only post regex validation success.
                                                if (value && validation.isValid === true) {
                                                    const usersList: UserListInterface
                                                    = await getUsersList(null, null,
                                                        "userName eq " + value, null,
                                                        userstore);

                                                    if (usersList?.totalResults > 0) {
                                                        validation.isValid = false;
                                                        validation.errorMessages.push(USER_ALREADY_EXIST_ERROR_MESSAGE);
                                                        scrollToInValidField("email");
                                                    }

                                                    setBasicDetailsLoading(false);
                                                }
                                            } catch (error) {
                                                // Some non ascii characters are not accepted by DBs
                                                // with certain charsets.
                                                // Hence, the API sends a `500` status code.
                                                // see below issue for more context.
                                                // https://github.com/wso2/product-is/issues/
                                                // 10190#issuecomment-719760318
                                                if (error?.response?.status === 500) {
                                                    validation.isValid = false;
                                                    validation.errorMessages.push(
                                                        USERNAME_HAS_INVALID_CHARS_ERROR_MESSAGE);
                                                    scrollToInValidField("email");
                                                }

                                                setBasicDetailsLoading(false);
                                            }
                                        } }
                                        type="email"
                                        value={ initialValues && initialValues.email }
                                        tabIndex={ 1 }
                                        maxLength={ 60 }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        ) : ( 
                            <Grid.Row>
                                <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                    <div ref={ emailRef } />
                                    <Field
                                        loading={ isBasicDetailsLoading }
                                        data-testid="user-mgt-add-user-form-username-input"
                                        label={ t("extensions:manage.features.user.addUser.inputLabel" +
                                            ".alphanumericUsername") }
                                        name="username"
                                        placeholder={ t("extensions:manage.features.user.addUser.inputLabel" +
                                            ".alphanumericUsernamePlaceholder") }
                                        required={ true }
                                        requiredErrorMessage={ t(
                                            "console:manage.features.user.forms.addUserForm.inputs.email." +
                                            "validations.empty"
                                        ) }
                                        validation={ async (value: string, validation: Validation) => {
                                            // Regular expression to validate having alphanumeric characters.
                                            const regExpInvalidUsername: RegExp
                                                = new RegExp(UsersConstants.USERNAME_VALIDATION_REGEX);

                                            // Check username length validations.
                                            if (value.length < Number(usernameConfig.minLength)
                                                || value.length > Number(usernameConfig.maxLength)) {
                                                validation.isValid = false;
                                                validation.errorMessages.push(
                                                    USERNAME_HAS_INVALID_LENGTH_ERROR_MESSAGE);
                                            // Check username validity against userstore regex.
                                            } else if (!regExpInvalidUsername.test(value)) {
                                                validation.isValid = false;
                                                validation.errorMessages.push(
                                                    USERNAME_HAS_INVALID_SYMBOLS_ERROR_MESSAGE);
                                            }
                                        } }
                                        type="text"
                                        value={ initialValues && initialValues.username }
                                        tabIndex={ 1 }
                                        maxLength={ 60 }
                                    />
                                    <Hint>
                                        { t("extensions:manage.features.user.addUser.validation.usernameHint", {
                                            maxLength: usernameConfig?.maxLength,
                                            minLength: usernameConfig?.minLength
                                        }) }
                                    </Hint>
                                    <Field
                                        loading={ isBasicDetailsLoading }
                                        data-testid="user-mgt-add-user-form-alphanumeric-email-input"
                                        label={ "Email" }
                                        name="email"
                                        placeholder={ t(
                                            "console:manage.features.user.forms.addUserForm.inputs." +
                                            "email.placeholder"
                                        ) }
                                        required={ isEmailRequired }
                                        requiredErrorMessage={ t(
                                            "console:manage.features.user.forms.addUserForm.inputs.email." +
                                            "validations.empty"
                                        ) }
                                        validation={ async (value: string, validation: Validation) => {
                                            setBasicDetailsLoading(true);

                                            // Check username validity against userstore regex.
                                            if (value && (
                                                !SharedUserStoreUtils.validateInputAgainstRegEx(
                                                    value, userStoreRegex))
                                                    || !FormValidation.email(value)) {
                                                validation.isValid = false;
                                                validation.errorMessages.push(USERNAME_REGEX_VIOLATION_ERROR_MESSAGE);
                                                scrollToInValidField("email");
                                                setIsValidEmail(false);
                                            } else {
                                                setIsValidEmail(true);
                                            }
                                            setBasicDetailsLoading(false);
                                        } }
                                        type="email"
                                        value={ initialValues && initialValues.email }
                                        tabIndex={ 1 }
                                        maxLength={ 60 }
                                        listen={ handleEmailEmpty }
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        )
                }
                {
                    !hiddenFields.includes("firstName") && (
                        <Grid.Row>
                            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                <Field
                                    data-testid="user-mgt-add-user-form-firstName-input"
                                    label={ t(
                                        "console:manage.features.user.forms.addUserForm.inputs.firstName.label"
                                    ) }
                                    name="firstName"
                                    placeholder={ t(
                                        "console:manage.features.user.forms.addUserForm.inputs." +
                                        "firstName.placeholder"
                                    ) }
                                    required={ isFirstNameRequired }
                                    requiredErrorMessage={ t(
                                        "console:manage.features.user.forms.addUserForm." +
                                        "inputs.firstName.validations.empty"
                                    ) }
                                    type="text"
                                    value={ initialValues && initialValues.firstName }
                                    tabIndex={ 2 }
                                    maxLength={ 30 }
                                    validation={ async (value: string, validation: Validation) => {
                                        if (value.includes("/")) {
                                            validation.isValid = false;
                                            validation.errorMessages.push("First Name cannot contain" +
                                                " the forward slash (/) character.");
                                        }
                                    } }
                                />
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
                {
                    !hiddenFields.includes("lastName") && (
                        <Grid.Row>
                            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                <Field
                                    data-testid="user-mgt-add-user-form-lastName-input"
                                    label={ t(
                                        "console:manage.features.user.forms.addUserForm.inputs.lastName.label"
                                    ) }
                                    name="lastName"
                                    placeholder={ t(
                                        "console:manage.features.user.forms.addUserForm.inputs." +
                                        "lastName.placeholder"
                                    ) }
                                    required={ isLastNameRequired }
                                    requiredErrorMessage={ t(
                                        "console:manage.features.user.forms.addUserForm." +
                                        "inputs.lastName.validations.empty"
                                    ) }
                                    type="text"
                                    value={ initialValues && initialValues.lastName }
                                    tabIndex={ 3 }
                                    maxLength={ 30 }
                                    validation={ async (value: string, validation: Validation) => {
                                        if (value.includes("/")) {
                                            validation.isValid = false;
                                            validation.errorMessages.push("Last Name cannot contain" +
                                                " the forward slash (/) character.");
                                        }
                                    } }
                                />
                            </Grid.Column>
                        </Grid.Row>
                    )
                }
                { emailVerificationEnabled && !hiddenFields.includes("password")
                    ? (
                        <Grid.Row columns={ 1 }>
                            <Grid.Column mobile={ 16 } tablet={ 16 } computer={ 10 }>
                                <Form.Field
                                >
                                    <label className="mb-3">
                                        { t("console:manage.features.user.forms.addUserForm" +
                                            ".buttons.radioButton.label") }
                                    </label>
                                    <Radio
                                        label={ askPasswordOptionData.label }
                                        data-testId={ askPasswordOptionData["data-testid"] }
                                        name="handlePasswordGroup"
                                        value={ askPasswordOptionData.value }
                                        checked={ passwordOption === askPasswordOptionData.value }
                                        onChange={
                                            (e: React.ChangeEvent<HTMLInputElement>, item: any) =>
                                                setPasswordOption(item?.value)
                                        }
                                    />
                                </Form.Field>
                                {
                                    passwordOption === askPasswordOptionData.value
                                        ? renderAskPasswordOption()
                                        : null
                                }
                                <Form.Field>
                                    <Radio
                                        label={ createPasswordOptionData.label }
                                        data-testId={ createPasswordOptionData["data-testid"] }
                                        name="handlePasswordGroup"
                                        value={ createPasswordOptionData.value }
                                        checked={ passwordOption === createPasswordOptionData.value }
                                        onChange={
                                            (e: React.ChangeEvent<HTMLInputElement>, item: any) =>
                                                setPasswordOption(item?.value)
                                        }
                                    />
                                </Form.Field>
                                {
                                    passwordOption === createPasswordOptionData.value
                                        ? renderCreatePasswordOption()
                                        : null
                                }
                            </Grid.Column>
                        </Grid.Row>
                    ) : null
                }
            </Grid>
        </Forms>
    );

    return (
        <>
            { addUserBasicForm() }
        </>
    );
};

AddConsumerUserBasic.defaultProps = {
    hiddenFields: [],
    requestedPasswordOption: "ask-password"
};
