
import AppNav from './src/Navigator/AppNav';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Black': require("./assets/fonts/Montserrat-Black.ttf"),
    'Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'SemiB': require("./assets/fonts/Montserrat-SemiBold.ttf"),
    'Regular': require("./assets/fonts/Montserrat-Regular.ttf"),
    'Medium': require("./assets/fonts/Montserrat-Medium.ttf"),
    'Light': require("./assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{flex:1}} onLayout={onLayoutRootView}>
      <AppNav />
    </View>

  );
}


