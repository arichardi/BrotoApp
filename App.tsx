import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './App/config/styles/theme'

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto'
import { YesevaOne_400Regular } from '@expo-google-fonts/yeseva-one'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import MyPlants from './App/screen/Myplants';
import TestComponent from './App/screen/TestComponent';
import WelcomeScreen from './App/screen/WelcomeScreen';
import PlantRegisterScreen from './App/screen/PlantRegisterScreen'
import PlantDetailScreen from './App/screen/PlantDetailScreen';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    YesevaOne_400Regular,
  });
  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <MyPlants />
    </ThemeProvider>
  );
}

