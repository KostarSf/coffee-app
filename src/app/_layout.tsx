import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const insets = useSafeAreaInsets();
    const [loaded, error] = useFonts({
        SoraRegular: require('../assets/fonts/Sora-Regular.ttf'),
        SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }

        if (error) {
            throw error;
        }
    }, [loaded, error]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    statusBarTranslucent: true,
                    contentStyle: {
                        backgroundColor: Colors.black,
                        paddingBottom: insets.bottom,
                    },
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </SafeAreaProvider>
    );
}
