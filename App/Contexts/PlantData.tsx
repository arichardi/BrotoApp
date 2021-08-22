import React, { createContext, useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// Interfaces -----------------------------------------------------

interface PlantListDataProps {
    arriveDate: string;
    arriveDateFormatted: string;
    enviroment: 'in' | 'out';
    name: string;
    photoPlant: {
        localUri: string;
    };
    subtitle: string;
}

interface ContextProps {
    handleInsertData: (PlantListDataProps) => void;
    plantListData: PlantListDataProps[];
    
}



// ------------------------------------------------

const initialStateTest = [
        {
        "arriveDate": "2021-08-22T15:38:17.301Z",
        "arriveDateFormatted": "22 de ago de 2021",
        "enviroment": "in",
        "name": "Cravo",
        "photoPlant": null,
        "subtitle": "planta imaginária",
      },
      {
        "arriveDate": "2021-08-22T15:38:17.301Z",
        "arriveDateFormatted": "22 de ago de 2021",
        "enviroment": "out",
        "name": "Suculenta",
        "photoPlant": null,
        "subtitle": "planta na janela",
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