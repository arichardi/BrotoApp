import React, { createContext, useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

type ContextProps = {
    handleInsertData: () => void
}


export const PlantDataContext = createContext({});

export function PlantDataProvider({children}) {

//variables ---------------------------------------------------------

const Navigation = useNavigation()
const [plantListData, setPlantListData] = useState([])

//functions ---------------------------------------------------------

function handleInsertData(plant){
    setPlantListData([...plantListData, plant])
    Navigation.goBack();
}

    return(
    <PlantDataContext.Provider value={handleInsertData}>
        {children}
    </PlantDataContext.Provider>
    )}