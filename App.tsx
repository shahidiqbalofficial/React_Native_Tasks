import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StreakScreen from './src/screens/StreakScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <StreakScreen />
    </SafeAreaProvider>
  );
}

export default App;
