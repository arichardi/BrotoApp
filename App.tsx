import React, {useEffect} from 'react';
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import theme from './App/config/styles/theme'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto'
import { YesevaOne_400Regular } from '@expo-google-fonts/yeseva-one'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { plantConnect } from './App/db/PlantListaData'
//import { wateryPlantConnect } from './App/db/WateryPlant'

import { PlantDataProvider } from './App/Contexts/PlantData';
import MyStackNav from './App/routes/App.routes';


export default function App() {

  useEffect( () => {
    plantConnect()
    //wateryPlantConnect()
  }, [])

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
      <NavigationContainer>
        <PlantDataProvider>
          <MyStackNav />
          </PlantDataProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

