/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
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

import Chip from "@oxygen-ui/react/Chip";
import { TestableComponentInterface } from "@wso2is/core/models";
import { CommonUtils } from "@wso2is/core/utils";
import { Field, Form } from "@wso2is/form";
import { Heading, Hint } from "@wso2is/react-components";
import { FormValidation } from "@wso2is/validation";
import isEmpty from "lodash-es/isEmpty";
import React, { FunctionComponent, ReactElement, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Divider, Label } from "semantic-ui-react";
import { AppState } from "../../../admin.core.v1";
import { GovernanceConnectorConstants } from "../../constants/governance-connector-constants";
import { ServerConfigurationsConstants } from "../../constants/server-configurations-constants";
import {
    ConnectorPropertyInterface,
    GovernanceConnectorInterface
} from "../../models/governance-connectors";
import "./password-recovery-form.scss";

/**
 * Interface for Password Recovery Configuration Form props.
 */
interface PasswordRecoveryConfigurationFormPropsInterface extends TestableComponentInterface {
    /**
     * Connector's initial values.
     */
    initialValues: GovernanceConnectorInterface;
    /**
     * Callback for form submit.
     * @param values - Resolved Form Values.
     */
    onSubmit: (values) => void;
    /**
     * Is readonly.
     */
    readOnly?: boolean;
    /**
     * Whether the connector is enabled using the toggle button.
     */
    isConnectorEnabled?: boolean;
    /**
     * Specifies if the form is submitting.
     */
    isSubmitting?: boolean;
}

/**
 * Form initial values interface.
 */
interface PasswordRecoveryFormInitialValuesInterface {
    /**
     * Recovery link expiry time.
     */
    expiryTime: string;
    /**
     * Notify user on successful password recovery.
     */
    notifySuccess: boolean;
    /**
     * Whether email based recovery is enabled.
     */
    enableEmailBasedRecovery: boolean;
    /**
     * Whether SMS based recovery is enabled.
     */
    enableSMSBasedRecovery: boolean;
    /**
     * SMS OTP expiry time.
     */
    smsOtpExpiryTime: string;
    /**
     * Whether to use upper case letters in SMS OTP code.
     */
    passwordRecoveryOtpUseUppercase: boolean;
    /**
     * Whether to use lower case letters in SMS OTP code.
     */
    passwordRecoveryOtpUseLowercase: boolean;
    /**
     * Whether to use numeric characters in SMS OTP code.
     */
    passwordRecoveryOtpUseNumeric: boolean;
    /**
     * The length of the SMS OTP code.
     */
    smsOtpLength: string;
    /**
     * The maximum amount of times recovery code/link is resent.
     */
    maxResendCount: string;
    /**
     * The maximum allowed failed attempts for a recovery flow.
     */
    maxFailedAttemptCount: string;
}

/**
 * Proptypes for the Password Recovery Form error messages.
 */
export interface PasswordRecoveryFormErrorValidationsInterface {
    /**
     * Recovery link expiry time field.
     */
    expiryTime: string;
    /**
     * Sms otp expiry time field
     */
    smsOtpExpiryTime: string;
    /**
     * SMS OTP code length field.
     */
    smsOtpLength: string;
    /**
     * max resend count field.
     */
    maxResendCount: string;
    /**
     * Max allowed failed attempts count field.
     */
    maxFailedAttemptCount: string;
}

const allowedConnectorFields: string[] = [
    ServerConfigurationsConstants.NOTIFY_SUCCESS,
    ServerConfigurationsConstants.RECOVERY_LINK_EXPIRY_TIME,
    ServerConfigurationsConstants.RECOVERY_EMAIL_LINK_ENABLE,
    ServerConfigurationsConstants.RECOVERY_SMS_OTP_ENABLE,
    ServerConfigurationsConstants.RECOVERY_SMS_EXPIRY_TIME,
    ServerConfigurationsConstants.RECOVERY_OTP_USE_UPPERCASE,
    ServerConfigurationsConstants.RECOVERY_OTP_USE_LOWERCASE,
    ServerConfigurationsConstants.RECOVERY_OTP_USE_NUMERIC,
    ServerConfigurationsConstants.RECOVERY_OTP_LENGTH,
    ServerConfigurationsConstants.RECOVERY_MAX_RESEND_COUNT,
    ServerConfigurationsConstants.RECOVERY_MAX_FAILED_ATTEMPTS_COUNT
];

const FORM_ID: string = "governance-connectors-password-recovery-form";

/**
 * Password Recovery Configuration Form.
 *
 * @param props - Props injected to the component.
 * @returns Functional component.
 */
export const PasswordRecoveryConfigurationForm: FunctionComponent<PasswordRecoveryConfigurationFormPropsInterface> = (
    props: PasswordRecoveryConfigurationFormPropsInterface
): ReactElement => {

    const {
        initialValues,
        onSubmit,
        readOnly,
        isConnectorEnabled,
        isSubmitting,
        ["data-testid"]: testId
    } = props;

    const { t } = useTranslation();
    const [ initialConnectorValues, setInitialConnectorValues ]
        = useState<PasswordRecoveryFormInitialValuesInterface>(undefined);
    const [ isEmailRecoveryEnabled, setIsEmailRecoveryEnabled ] = useState<boolean>(false);
    const [ isSMSRecoveryEnabled, setIsSMSRecoveryEnabled ] = useState<boolean>(false);
    const [ isUpperCaseEnabled, setIsUpperCaseEnabled ] = useState<boolean>(false);
    const [ isLowerCaseEnabled, setIsLowerCaseEnabled ] = useState<boolean>(false);
    const [ isNumericEnabled, setIsNumericEnabled ] = useState<boolean>(false);
    const showSmsOtpPasswordRecoveryBetaChip: boolean =
        useSelector((state: AppState) => state?.config?.ui?.showSmsOtpPasswordRecoveryBetaChip);

    /**
     * Flattens and resolved form initial values and field metadata.
     */
    useEffect(() => {
        if (isEmpty(initialValues?.properties)) {
            return;
        }

        let resolvedInitialValues: PasswordRecoveryFormInitialValuesInterface = null;

        initialValues.properties.map((property: ConnectorPropertyInterface) => {
            if (allowedConnectorFields.includes(property.name)) {
                if (property.name === ServerConfigurationsConstants.NOTIFY_SUCCESS) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        notifySuccess: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_LINK_EXPIRY_TIME) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        expiryTime: property.value
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_EMAIL_LINK_ENABLE) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        enableEmailBasedRecovery: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_SMS_OTP_ENABLE) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        enableSMSBasedRecovery: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_SMS_EXPIRY_TIME) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        smsOtpExpiryTime: property.value
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_OTP_USE_UPPERCASE) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        passwordRecoveryOtpUseUppercase: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_OTP_USE_LOWERCASE) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        passwordRecoveryOtpUseLowercase: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_OTP_USE_NUMERIC) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        passwordRecoveryOtpUseNumeric: CommonUtils.parseBoolean(property.value)
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_OTP_LENGTH) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        smsOtpLength: property.value
                    };
                } else if (property.name === ServerConfigurationsConstants.RECOVERY_MAX_RESEND_COUNT) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        maxResendCount : property.value
                    };
                }  else if (property.name === ServerConfigurationsConstants.RECOVERY_MAX_FAILED_ATTEMPTS_COUNT) {
                    resolvedInitialValues = {
                        ...resolvedInitialValues,
                        maxFailedAttemptCount : property.value
                    };
                }
            }
        });
        setInitialConnectorValues(resolvedInitialValues);
        setIsEmailRecoveryEnabled(resolvedInitialValues?.enableEmailBasedRecovery);
        setIsSMSRecoveryEnabled(resolvedInitialValues?.enableSMSBasedRecovery);
        setIsUpperCaseEnabled(resolvedInitialValues?.passwordRecoveryOtpUseUppercase);
        setIsLowerCaseEnabled(resolvedInitialValues?.passwordRecoveryOtpUseLowercase);
        setIsNumericEnabled(resolvedInitialValues?.passwordRecoveryOtpUseNumeric);
    }, [ initialValues ]);

    /**
     * Validate input data.
     *
     * @param values - Form values.
     * @returns Form validation.
     */
    const validateForm = (values: any):
        PasswordRecoveryFormErrorValidationsInterface => {
        const errors: PasswordRecoveryFormErrorValidationsInterface = {
            expiryTime: undefined,
            maxFailedAttemptCount: undefined,
            maxResendCount: undefined,
            smsOtpExpiryTime: undefined,
            smsOtpLength: undefined
        };

        if (!values.expiryTime) {
            // Check for required error.
            errors.expiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.expiryTime.validations.empty");
        } else if (!FormValidation.isInteger(values.expiryTime as unknown as number)) {
            // Check for invalid input.
            errors.expiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.expiryTime.validations.invalid");
        } else if ((parseInt(values.expiryTime, 10) < GovernanceConnectorConstants
            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MIN_VALUE)
            || (parseInt(values.expiryTime, 10) > GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MAX_VALUE)) {
            // Check for invalid range.
            errors.expiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.expiryTime.validations.range");
        } else if (values.smsOtpExpiryTime &&
            !FormValidation.isLengthValid(values.smsOtpExpiryTime as string, GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_EXPIRY_TIME_MAX_LENGTH)) {
            // Check for invalid input length.
            errors.smsOtpExpiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.smsOtpExpiryTime.validations.maxLengthReached");
        } else if (values.expiryTime &&
            !FormValidation.isLengthValid(values.expiryTime as string, GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MAX_LENGTH)) {
            // Check for invalid input length.
            errors.expiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.expiryTime.validations.maxLengthReached");
        } else if (!values.smsOtpExpiryTime) {
            // Check for required error.
            errors.smsOtpExpiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.smsOtpExpiryTime.validations.empty");
        } else if (!FormValidation.isInteger(values.smsOtpExpiryTime as unknown as number)) {
            // Check for invalid input.
            errors.smsOtpExpiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.smsOtpExpiryTime.validations.invalid");
        } else if ((parseInt(values.smsOtpExpiryTime, 10) < GovernanceConnectorConstants
            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MIN_VALUE)
            || (parseInt(values.smsOtpExpiryTime, 10) > GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_EXPIRY_TIME_MAX_VALUE)) {
            // Check for invalid range.
            errors.smsOtpExpiryTime = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.smsOtpExpiryTime.validations.range");
        } else if (!values.smsOtpLength) {
            // Check for required error
            errors.smsOtpLength = t("extensions:manage.serverConfigurations.accountRecovery." +
            "passwordRecovery.form.fields.smsOtpLength.validations.empty");
        } else if (parseInt(values.smsOtpLength, 10) < GovernanceConnectorConstants
            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_CODE_LENGTH_MIN_VALUE ||
            parseInt(values.smsOtpLength, 10) > GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_CODE_LENGTH_MAX_VALUE) {
            // Check for invalid input length.
            errors.smsOtpLength = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.smsOtpLength.validations.maxLengthReached");
        } else if (!values.maxResendCount) {
            // Check for required error
            errors.smsOtpLength = t("extensions:manage.serverConfigurations.accountRecovery." +
            "passwordRecovery.form.fields.maxResendCount.validations.empty");
        } else if (parseInt(values.maxResendCount, 10) < GovernanceConnectorConstants
            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_RESEND_COUNT_MIN_VALUE ||
            parseInt(values.maxResendCount, 10) > GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_RESEND_COUNT_MAX_VALUE) {
            // Check for invalid range.
            errors.maxResendCount = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.maxResendCount.validations.range");
        } else if (!values.maxFailedAttemptCount) {
            // Check for required error
            errors.maxFailedAttemptCount = t("extensions:manage.serverConfigurations.accountRecovery." +
            "passwordRecovery.form.fields.maxFailedAttemptCount.validations.empty");
        } else if (parseInt(values.maxFailedAttemptCount, 10) < GovernanceConnectorConstants
            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_FAILED_ATTEMPT_COUNT_MIN_VALUE ||
            parseInt(values.maxFailedAttemptCount, 10) > GovernanceConnectorConstants
                .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_FAILED_ATTEMPT_COUNT_MAX_VALUE) {
            // Check for invalid range.
            errors.maxFailedAttemptCount = t("extensions:manage.serverConfigurations.accountRecovery." +
                "passwordRecovery.form.fields.maxFailedAttemptCount.validations.range");
        }

        return errors;
    };

    /**
     * Prepare form values for submitting.
     *
     * @param values - Form values.
     * @returns Sanitized form values.
     */
    const getUpdatedConfigurations = (values: Record<string, any>) => {
        const data: {
            "Recovery.ExpiryTime": any;
            "Recovery.Notification.Password.emailLink.Enable": boolean;
            "Recovery.Notification.Password.ExpiryTime.smsOtp": number;
            "Recovery.Notification.Password.MaxFailedAttempts": number;
            "Recovery.Notification.Password.MaxResendAttempts": number;
            "Recovery.Notification.Password.smsOtp.Enable": boolean;
            "Recovery.Notification.Password.OTP.UseUppercaseCharactersInOTP": number;
            "Recovery.Notification.Password.OTP.UseLowercaseCharactersInOTP": number;
            "Recovery.Notification.Password.OTP.UseNumbersInOTP": number;
            "Recovery.Notification.Password.OTP.OTPLength": number;
            "Recovery.NotifySuccess": boolean;
        } = {
            "Recovery.ExpiryTime": values.expiryTime !== undefined
                ? values.expiryTime
                : initialConnectorValues?.expiryTime,
            "Recovery.Notification.Password.ExpiryTime.smsOtp": values.smsOtpExpiryTime !== undefined
                ? values.smsOtpExpiryTime
                : initialConnectorValues?.smsOtpExpiryTime,
            "Recovery.Notification.Password.MaxFailedAttempts": values.maxFailedAttemptCount !== undefined
                ? values.maxFailedAttemptCount
                : initialConnectorValues?.maxFailedAttemptCount,
            "Recovery.Notification.Password.MaxResendAttempts": values.maxResendCount !== undefined
                ? values.maxResendCount
                : initialConnectorValues?.maxResendCount,
            "Recovery.Notification.Password.OTP.OTPLength": values.smsOtpLength !== undefined
                ? values.smsOtpLength
                : initialConnectorValues?.smsOtpLength,
            "Recovery.Notification.Password.OTP.UseLowercaseCharactersInOTP":
                values.passwordRecoveryOtpUseLowercase !== undefined
                    ? values.passwordRecoveryOtpUseLowercase
                    : initialConnectorValues?.passwordRecoveryOtpUseLowercase,
            "Recovery.Notification.Password.OTP.UseNumbersInOTP": values.passwordRecoveryOtpUseNumeric !== undefined
                ? values.passwordRecoveryOtpUseNumeric
                : initialConnectorValues?.passwordRecoveryOtpUseNumeric,
            "Recovery.Notification.Password.OTP.UseUppercaseCharactersInOTP":
                values.passwordRecoveryOtpUseUppercase !== undefined
                    ? values.passwordRecoveryOtpUseUppercase
                    : initialConnectorValues?.passwordRecoveryOtpUseUppercase,
            "Recovery.Notification.Password.emailLink.Enable": values.enableEmailBasedRecovery !== undefined
                ? !!values.enableEmailBasedRecovery
                : initialConnectorValues?.enableEmailBasedRecovery,
            "Recovery.Notification.Password.smsOtp.Enable": values.enableSMSBasedRecovery !== undefined
                ? !!values.enableSMSBasedRecovery
                : initialConnectorValues?.enableSMSBasedRecovery,
            "Recovery.NotifySuccess": values.notifySuccess !== undefined
                ? !!values.notifySuccess
                : initialConnectorValues?.notifySuccess
        };

        return data;
    };

    if (!initialConnectorValues) {
        return null;
    }

    return (
        <div className="connector-form password-recovery-form">
            <Form
                id={ FORM_ID }
                initialValues={ initialConnectorValues }
                onSubmit={ (values: Record<string, any>) => onSubmit(getUpdatedConfigurations(values)) }
                validate={ validateForm }
                uncontrolledForm={ false }
            >
                <Heading as="h4">
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.recoveryOptionHeading") as ReactNode }
                </Heading>
                <Heading as="h5">
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.recoveryOptionSubHeadingEmailLink") as ReactNode }
                </Heading>
                <Field.Checkbox
                    ariaLabel="enableEmailBasedRecovery"
                    name="enableEmailBasedRecovery"
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                "passwordRecovery.form.fields.enableEmailBasedRecovery.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    disabled={ !isConnectorEnabled }
                    listen={ (value: boolean) => setIsEmailRecoveryEnabled(value) }
                    data-testid={ `${ testId }-email-link-based-recovery` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.enableEmailBasedRecovery.hint") as ReactNode }
                </Hint>
                <Field.Checkbox
                    ariaLabel="notifyRecoverySuccess"
                    name="notifySuccess"
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.notifySuccess.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    disabled={ !isEmailRecoveryEnabled }
                    data-testid={ `${ testId }-notify-success` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.notifySuccess.hint") as ReactNode }
                </Hint>
                <Field.Input
                    ariaLabel="expiryTime"
                    inputType="number"
                    name="expiryTime"
                    min={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .EXPIRY_TIME_MIN_VALUE
                    }
                    max={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .EXPIRY_TIME_MAX_VALUE
                    }
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                "passwordRecovery.form.fields.expiryTime.label") }
                    placeholder={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                        "passwordRecovery.form.fields.expiryTime.placeholder") }
                    required={ false }
                    maxLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MAX_LENGTH
                    }
                    minLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MIN_LENGTH
                    }
                    readOnly={ readOnly }
                    width={ 10 }
                    labelPosition="right"
                    disabled={ !isEmailRecoveryEnabled }
                    data-testid={ `${ testId }-link-expiry-time` }
                >
                    <input/>
                    <Label
                        content={ "mins" }
                    />
                </Field.Input>
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.expiryTime.hint") as ReactNode }
                </Hint>

                <Heading as="h5">
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.recoveryOptionSubHeadingSMS") as ReactNode }
                    {
                        showSmsOtpPasswordRecoveryBetaChip ?
                            (<Chip
                                label="BETA"
                                className="oxygen-menu-item-chip oxygen-chip-beta" />)
                            : <></>
                    }
                </Heading>
                <Field.Checkbox
                    ariaLabel="enableSMSBasedRecovery"
                    name="enableSMSBasedRecovery"
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                "passwordRecovery.form.fields.enableSMSBasedRecovery.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    disabled={ !isConnectorEnabled }
                    listen={ (value: boolean) => setIsSMSRecoveryEnabled(value) }
                    data-testid={ `${ testId }-sms-based-recovery` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.enableSMSBasedRecovery.hint") as ReactNode }
                </Hint>
                <Field.Input
                    ariaLabel="smsOtpExpiryTime"
                    inputType="number"
                    name="smsOtpExpiryTime"
                    min={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .EXPIRY_TIME_MIN_VALUE
                    }
                    max={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .SMS_OTP_EXPIRY_TIME_MAX_VALUE
                    }
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                "passwordRecovery.form.fields.smsOtpExpiryTime.label") }
                    placeholder={ t("extensions:manage.serverConfigurations.accountRecovery." +
                                        "passwordRecovery.form.fields.smsOtpExpiryTime.placeholder") }
                    required={ false }
                    maxLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_EXPIRY_TIME_MAX_LENGTH
                    }
                    minLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.EXPIRY_TIME_MIN_LENGTH
                    }
                    readOnly={ readOnly }
                    width={ 10 }
                    labelPosition="right"
                    disabled={ !isSMSRecoveryEnabled }
                    data-testid={ `${ testId }-sms-otp-expiry-time` }
                >
                    <input/>
                    <Label
                        content={ "mins" }
                    />
                </Field.Input>
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.smsOtpExpiryTime.hint") as ReactNode }
                </Hint>
                <Divider/>
                <Heading as="h4">
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.otpConfigHeading") as ReactNode }
                    {
                        showSmsOtpPasswordRecoveryBetaChip ?
                            (<Chip
                                label="BETA"
                                className="oxygen-menu-item-chip oxygen-chip-beta" />)
                            : <></>
                    }
                </Heading>
                <Field.Checkbox
                    ariaLabel="passwordRecoveryOtpUseUppercase"
                    name="passwordRecoveryOtpUseUppercase"
                    label= { t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.passwordRecoveryOtpUseUppercase.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    // Disabling the last enabled option is not allowed
                    disabled={ !isConnectorEnabled
                        || (isUpperCaseEnabled && !isLowerCaseEnabled && !isNumericEnabled) }
                    listen={ (value: boolean) => setIsUpperCaseEnabled(value) }
                    data-testid={ `${ testId }-sms-otp-uppercase` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.passwordRecoveryOtpUseUppercase.hint") as ReactNode }
                </Hint>
                <Field.Checkbox
                    ariaLabel="passwordRecoveryOtpUseLowercase"
                    name="passwordRecoveryOtpUseLowercase"
                    label= { t("extensions:manage.serverConfigurations.accountRecovery." +
                    "passwordRecovery.form.fields.passwordRecoveryOtpUseLowercase.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    // Disabling the last enabled option is not allowed
                    disabled={ !isConnectorEnabled
                        || (!isUpperCaseEnabled && isLowerCaseEnabled && !isNumericEnabled) }
                    listen={ (value: boolean) => setIsLowerCaseEnabled(value) }
                    data-testid={ `${ testId }-sms-otp-lowercase` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.passwordRecoveryOtpUseLowercase.hint") as ReactNode }
                </Hint>
                <Field.Checkbox
                    ariaLabel="passwordRecoveryOtpUseNumeric"
                    name="passwordRecoveryOtpUseNumeric"
                    label= { t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.passwordRecoveryOtpUseNumeric.label") }
                    required={ false }
                    readOnly={ readOnly }
                    width={ 10 }
                    // Disabling the last enabled option is not allowed
                    disabled={ !isConnectorEnabled
                        || (!isUpperCaseEnabled && !isLowerCaseEnabled && isNumericEnabled) }
                    listen={ (value: boolean) => setIsNumericEnabled(value) }
                    data-testid={ `${ testId }-sms-otp-numeric` }
                />
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.passwordRecoveryOtpUseNumeric.hint") as ReactNode }
                </Hint>
                <Field.Input
                    ariaLabel="otpLength"
                    inputType="number"
                    name="smsOtpLength"
                    min={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .SMS_OTP_CODE_LENGTH_MIN_VALUE
                    }
                    max={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .SMS_OTP_CODE_LENGTH_MAX_VALUE
                    }
                    label= { t("extensions:manage.serverConfigurations.accountRecovery." +
                                    "passwordRecovery.form.fields.passwordRecoveryOtpLength.label") }
                    placeholder="SMS OTP Length"
                    required={ false }
                    maxLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_CODE_LENGTH_MAX_LENGTH
                    }
                    minLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.SMS_OTP_CODE_LENGTH_MIN_LENGTH
                    }
                    readOnly={ readOnly }
                    width={ 10 }
                    labelPosition="right"
                    disabled={ !isConnectorEnabled }
                    data-testid={ `${ testId }-otp-length` }
                >
                    <input/>
                    <Label
                        content={ "characters" }
                    />
                </Field.Input>
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.passwordRecoveryOtpLength.hint") as ReactNode }
                </Hint>
                <Divider/>
                <Heading as="h4">
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.failedAttemptConfigHeading") as ReactNode }
                    {
                        showSmsOtpPasswordRecoveryBetaChip ?
                            (<Chip
                                label="BETA"
                                className="oxygen-menu-item-chip oxygen-chip-beta" />)
                            : <></>
                    }
                </Heading>
                <Field.Input
                    ariaLabel="maxFailedAttemptCount"
                    inputType="number"
                    name="maxFailedAttemptCount"
                    min={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .MAX_FAILED_ATTEMPT_COUNT_MIN_VALUE
                    }
                    max={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .MAX_FAILED_ATTEMPT_COUNT_MAX_VALUE
                    }
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.maxFailedAttemptCount.label") }
                    placeholder={ t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.maxFailedAttemptCount.placeholder") }
                    required={ false }
                    maxLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_FAILED_ATTEMPT_COUNT_MAX_LENGTH
                    }
                    minLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_FAILED_ATTEMPT_COUNT_MIN_LENGTH
                    }
                    readOnly={ readOnly }
                    width={ 10 }
                    labelPosition="right"
                    disabled={ !isConnectorEnabled }
                    data-testid={ `${ testId }-max-fail-attempt-count` }
                >
                    <input/>
                    <Label
                        content={ "attempts" }
                    />
                </Field.Input>
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.maxFailedAttemptCount.hint") as ReactNode }
                </Hint>
                <Field.Input
                    ariaLabel="maxResendCount"
                    inputType="number"
                    name="maxResendCount"
                    min={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .MAX_RESEND_COUNT_MIN_VALUE
                    }
                    max={
                        GovernanceConnectorConstants.PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS
                            .MAX_RESEND_COUNT_MAX_VALUE
                    }
                    label={ t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.maxResendCount.label") }
                    placeholder={ t("extensions:manage.serverConfigurations.accountRecovery." +
                        "passwordRecovery.form.fields.maxResendCount.placeholder") }
                    required={ false }
                    maxLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_RESEND_COUNT_MAX_LENGTH
                    }
                    minLength={
                        GovernanceConnectorConstants
                            .PASSWORD_RECOVERY_FORM_FIELD_CONSTRAINTS.MAX_RESEND_COUNT_MIN_LENGTH
                    }
                    readOnly={ readOnly }
                    width={ 10 }
                    labelPosition="right"
                    disabled={ !isConnectorEnabled }
                    data-testid={ `${ testId }-otp-resend-count` }
                >
                    <input/>
                    <Label
                        content={ "attempts" }
                    />
                </Field.Input>
                <Hint>
                    { t("extensions:manage.serverConfigurations.accountRecovery." +
                            "passwordRecovery.form.fields.maxResendCount.hint") as ReactNode }
                </Hint>
                <Field.Button
                    form={ FORM_ID }
                    size="small"
                    buttonType="primary_btn"
                    ariaLabel="Password Recovery update button"
                    name="update-button"
                    data-testid={ `${ testId }-submit-button` }
                    disabled={ isSubmitting }
                    loading={ isSubmitting }
                    label={ t("common:update") }
                    hidden={ !isConnectorEnabled || readOnly }
                />
            </Form>
        </div>
    );
};

/**
 * Default props for the component.
 */
PasswordRecoveryConfigurationForm.defaultProps = {
    "data-testid": "password-recovery-edit-form"
};
