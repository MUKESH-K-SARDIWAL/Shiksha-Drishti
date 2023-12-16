import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNav from './src/Navigator/AppNav';
import { StatusBar } from 'expo-status-bar';




export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#000' style="light" />
      <AppNav />
    </SafeAreaProvider>
  );
}


