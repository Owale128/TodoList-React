export const initializeOneSignal = async (): Promise<string | null> => {
    return new Promise((resolve, reject) => {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push(async function(OneSignal: any) {
            await OneSignal.init({
                appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
            });

            OneSignal.getUserId().then((userId: string) => {
                if (userId) {
                    resolve(userId);
                } else {
                    resolve(null);
                }
            }).catch((error: any) => {
                console.error('Error getting OneSignal user ID:', error);
                reject(error);
            });
        });
    });
};