import OneSignal from "react-onesignal";

export const initializeOneSignal = async () => {
    await OneSignal.init({
        appId: '29513ae6-7f0f-4628-ad9d-e0dd91c0d1a1',
        notifyButton: {
            enable: true,
        },
        serviceWorkerPath: '/OneSignalSDKWorker.js'
    })
}