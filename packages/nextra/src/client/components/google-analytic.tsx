"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
    return (
        <>
            <GoogleAnalytics
                trackPageViews
                gaMeasurementId="GTM-5BGKS7RV" 
                debugMode={false} // Enable for debugging
            />
        </>
    );
};
