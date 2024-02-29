/**
 * Copyright (c) 2020-2023, WSO2 LLC. (https://www.wso2.com).
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

import { AuthParams, AuthProvider, ResponseMode, SPAUtils } from "@asgardeo/auth-react";
import { ThemeProvider } from "@oxygen-ui/react/theme";
import { AppConfigProvider } from "@wso2is/common/src/providers/app-config-provider";
import { ContextUtils, StringUtils } from "@wso2is/core/utils";
import axios, { AxiosResponse } from "axios";
import * as React from "react";
import { ReactElement } from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import { AsgardeoTheme } from "./branding/theme";
import { AuthenticateUtils } from "@wso2is/features/authentication";
import { AppConstants, Config, PreLoader, store } from "@wso2is/features/core";
import { UserPreferencesInterface } from "@wso2is/features/core/models/user-preferences";
import AppSettingsProvider from "@wso2is/features/core/providers/app-settings-provider";
import UserPreferencesProvider from "@wso2is/features/core/providers/user-preferences-provider";
import OrganizationsProvider from "@wso2is/features/organizations/providers/organizations-provider";
import { ProtectedApp } from "./protected-app";
import { RouteComponentProps } from 'react-router-dom';
import ApplicationPage from "./ApplicationPage";
import ConnectionPage from "./ConnectionPage";
import { RootWithConfig } from "./RootWithConfig"
//import PopupOpener from "./AppIFrame";
import { history } from "@wso2is/features/core";

// Set the runtime config in the context.

ContextUtils.setRuntimeConfig(Config.getDeploymentConfig());

export const getAuthParams = (): Promise<AuthParams> => {
    if (
        !SPAUtils.hasAuthSearchParamsInURL() &&
        Config.getDeploymentConfig()?.idpConfigs?.responseMode === ResponseMode.formPost
    ) {
        const contextPath: string = window["AppUtils"].getConfig().appBase
            ? `/${StringUtils.removeSlashesFromPath(window["AppUtils"].getConfig().appBase)}`
            : "";

        return axios.get(contextPath + "/auth").then((response: AxiosResponse) => {
            return Promise.resolve({
                authorizationCode: response?.data?.authCode,
                sessionState: response?.data?.sessionState,
                state: response?.data?.state
            });
        });
    }

    return;
};



const Root = (): ReactElement => {
    return (
        <RootWithConfig>
            <ProtectedApp>
                <Router history={history}>
                    <div>
                        <div> <h1> B2B Admin Portal </h1> </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home"> Home</Link>
                                </li>
                                <li>
                                    <Link to ={AppConstants.getPaths().get("APPLICATIONS")}>Applications Management</Link>
                                </li>
                                <li>
                                    <Link to={ AppConstants.getPaths().get("IDP")}> Connections Management</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/home" component={ApplicationsPage} />
                            <Route path="/about" component={ConnectionsPage} />
                            <Route path={AppConstants.getPaths().get("APPLICATIONS")} component={ApplicationPage} />
                            <Route path={AppConstants.getPaths().get("IDP")} component={ConnectionPage} />
                        </Switch>
                    </div>
                </Router>
            </ProtectedApp>
        </RootWithConfig>
    );
}


const ApplicationsPage = () => {
    return (
      <div>
        <h2>Home Page</h2>
        <p>This is the Home Page</p>
      </div>
    );
  }
  
  const ConnectionsPage = () => {
    return (
      <div>
        <h2>About Page</h2>
        <p>This is the About Page content.</p>
      </div>
    );
  }
  
  const HomePage = () => {
    return (
      <div>
        <h2>Home Page</h2>
        <p>This is the Home Page content.</p>
      </div>
    );
  }
  
const rootElement: HTMLElement = document.getElementById("root");

// Moved back to the legacy mode due to unpredictable state update issue.
// Tracked here: https://github.com/wso2/product-is/issues/14912
ReactDOM.render(<Root />, rootElement);


// Home Page
// <PopupOpener />

  {/* Home Page
 <PopupOpener /> */}

