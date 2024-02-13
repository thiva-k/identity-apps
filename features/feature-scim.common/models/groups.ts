export interface GroupsMemberInterface {
    display: string;
    value: string;
    $ref: string;
}
export interface GroupsInterface {
    displayName: string;
    id: string;
    meta?: GroupsMetaInterface;
    members?: GroupsMemberInterface[];
    roles?: RolesMemberInterface[];
    schemas?: string[];
}
export interface GroupsMetaInterface {
    created?: string;
    location: string;
    lastModified?: string;
}
export interface RolesMemberInterface {
    display: string;
    audienceType?: string;
    audienceDisplay?: string;
    value: string;
    orgId: string;
    orgName: string;
    $ref: string;
}
export interface PatchGroupDataInterface {
    schemas: string[];
    Operations: GroupSCIMOperationsInterface[];
}
export interface GroupSCIMOperationsInterface {
    op: string;
    value?: any;
    path?: string;
}
export interface CreateGroupMemberInterface {
    value: string;
    display?: string;
}

