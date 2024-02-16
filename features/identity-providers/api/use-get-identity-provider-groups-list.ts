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

import { HttpMethods } from "@wso2is/core/models";
import  {
    RequestConfigInterface,
    RequestErrorInterface,
    RequestResultInterface
} from "@wso2is/feature-hooks.common";
import useRequest from "@wso2is/feature-hooks.common/use-request";
import { store } from "@wso2is/feature-store.common";

import { IdentityProviderGroupInterface } from "../models/identity-provider";

/**
 * Hook to get the list of groups associated with an Identity Provider.
 * 
 * @param idpID - Identity Provider ID.
 * @param shouldFetch - Whether to fetch the data or not.
 */
export const useGetIdentityProviderGroupList = <Data = IdentityProviderGroupInterface[], Error = RequestErrorInterface>(
    idpID: string,
    shouldFetch?: boolean
): RequestResultInterface<Data, Error> => {

    const requestConfig: RequestConfigInterface = {
        headers: {
            "Content-Type": "application/json"
        },
        method: HttpMethods.GET,
        url: `${ store.getState().config.endpoints.identityProviders }/${ idpID }/groups`
    };

    const {
        data,
        error,
        isValidating,
        mutate,
        response
    } = useRequest<Data, Error>(shouldFetch ? requestConfig : null);

    return {
        data,
        error,
        isLoading: !error && !data,
        isValidating,
        mutate,
        response
    };
};
