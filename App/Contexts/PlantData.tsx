import React, { createContext, useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// Interfaces -----------------------------------------------------

export interface PlantListDataProps {
    id?: string;
    name: string;
    subtitle: string;
    arriveDate: Date;
    enviroment: 'in' | 'out';
    photoPlant?: {
        localUri: string
    };
    wateryList: string[];
    wateryListCount: number;
}

interface ContextProps {
    handleInsertData: (PlantListDataProps) => void;
    plantListData: PlantListDataProps[];
    
}



// ------------------------------------------------

const initialStateTest: PlantListDataProps[] = [
        {
        'id': '1',
        "arriveDate": new Date(),
        "enviroment": "in",
        "name": "Cravo",
        "photoPlant": null,
        "subtitle": "planta imaginária",
        "wateryList": ['01/01', '01/02', '01/03'],
        "wateryListCount": 3,
      },
      { 
        'id': '2',
        "arriveDate": new Date(),
        "enviroment": "out",
        "name": "Suculenta",
        "photoPlant": null,
        "subtitle": "planta na janela",
        "wateryList": ['01/06', '01/07', '01/08', '01/09', '01/10' ],
        "wateryListCount": 5,
      },
]

export const PlantDataContext = createContext({} as ContextProps);


export function PlantDataProvider({children}) {

//variables ---------------------------------------------------------

const Navigation = useNavigation()
const [plantListData, setPlantListData] = useState(initialStateTest)

//functions -----------------------------------------------------------

function handleInsertData(plant: PlantListDataProps){
    setPlantListData([...plantListData, plant])
    Navigation.goBack();
}

//RNProvider -----------------------------------------------------------

    return(
    <PlantDataContext.Provider value={{
        handleInsertData: handleInsertData, 
        plantListData: plantListData,
        }}>
        {children}
    </PlantDataContext.Provider>
    )}