export interface SchemaAttributeValueInterface {
    type?: string;
    value?: string | string[];
}

/**
 *  Captures the basic details of the user.
 */
export interface UserBasicInterface {
    /**
     * Display name of the user.
     */
    displayName?: string;
    /**
     * ID of the user.
     */
    id: string;
    /**
     * Username of the user.
     */
    userName: string;
    /**
     * Emails of the user.
     */
    emails?: string[] | MultiValueAttributeInterface[];
    /**
     * Name of the user.
     */
    name?: NameInterface;
    /**
     * Meta information of the user.
     */
    meta?: UserMetaInterface;
    /**
     * Profile URL of the user.
     */
    profileUrl?: string;
    /**
     * Groups of the user.
     */
    groups?: GroupsMemberInterface[];
}

export interface NameInterface {
    /**
     * User's first name
     */
    givenName: string;
    /**
     * User's surname
     */
    familyName: string;
}
 
export interface UserMetaInterface {
    created: string;
    location: string;
    lastModified: string;
    resourceType: string;
}

export interface MultiValueAttributeInterface {
    /**
     * Attribute type
     */
    type: string;
    /**
     * Attribute value
     */
    value: string;
}

export interface GroupsMemberInterface {
    display: string;
    value: string;
    $ref: string;
}