import React from 'react'
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import MyPlants from '../screen/Myplants';
import PlantDetailScreen from '../screen/PlantDetailScreen';
import PlantRegisterScreen from '../screen/PlantRegisterScreen';

const Stack = createStackNavigator();

export default function MyStackNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='MyPlants' component={MyPlants} options={{ headerShown: false}} />
            <Stack.Screen name='PlantDetail' component={PlantDetailScreen} options={{ headerShown: false}} />
            <Stack.Screen name='PlantRegister'
             component={PlantRegisterScreen} 
             options={{ 
                headerShown: false,
                presentation: 'modal',
                
            }} 
             />
        </Stack.Navigator>
    )
}