import React, { FunctionComponent, ReactElement } from "react";
import { BrandingPreferenceInterface } from "@wso2is/common.branding.v1/models";

interface ConsoleScreenSkeletonProps {
    brandingPreference: BrandingPreferenceInterface;
    "data-componentid"?: string;
}

export const ConsoleScreenSkeleton: FunctionComponent<ConsoleScreenSkeletonProps> = ({
    brandingPreference,
    "data-componentid": componentId = "branding-preference-preview-console-skeleton"
}): ReactElement => {
    // Render a simple mockup of the Console app using brandingPreference
    // You can make this as detailed as you want, using brandingPreference.theme, .layout, etc.
    return (
        <div className="console-preview-skeleton" data-componentid={componentId}>
            <header style={{
                background: brandingPreference.theme[brandingPreference.theme.activeTheme].colors.primary.main,
                color: brandingPreference.theme[brandingPreference.theme.activeTheme].colors.text.primary,
                padding: "1rem"
            }}>
                <img
                    src={brandingPreference.theme[brandingPreference.theme.activeTheme].images.logo.imgURL}
                    alt="Console Logo"
                    style={{ height: 40, marginRight: 16 }}
                />
                <span style={{ fontWeight: "bold", fontSize: 24 }}>Console</span>
            </header>
            <main style={{ padding: "2rem" }}>
                <h2>Welcome to the Console Preview</h2>
                <p>This is a preview of how the Console application will look with your current branding settings.</p>
            </main>
            <footer style={{

                color: brandingPreference.theme[brandingPreference.theme.activeTheme].colors.text.secondary,
                padding: "1rem",
                textAlign: "center"
            }}>

            </footer>
        </div>
    );
}; 