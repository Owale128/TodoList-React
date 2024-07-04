import OneSignal from "react-onesignal";

export const initializeOneSignal = async () => {
    await OneSignal.init({
        appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
        notifyButton: {
            enable: true,
        },
        serviceWorkerPath: '/OneSignalSDKWorker.js'
    })
}