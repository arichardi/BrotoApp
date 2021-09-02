import React, { createContext, useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { brotoDateFormatter } from '../utils/helpers';

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
    handleAddDate: (id: string) => void 
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
        "wateryList": ['01/01', '02/02','01/03'],
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

const dateToday = brotoDateFormatter(new Date(), '2-digit')

//functions -----------------------------------------------------------

function handleInsertData(plant: PlantListDataProps){
    setPlantListData([...plantListData, plant])
    Navigation.goBack();
}

function handleAddDate(id: string){
  
    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)
    
    //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].wateryListCount >= 10 ){
      listSelected[0].wateryList.shift()
      listSelected[0].wateryList.push(dateToday)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      return resultList
      
    }
    
    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].wateryList.push(dateToday)
    listSelected[0].wateryListCount += 1
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
   return resultList
    
  }
  
  function handleRemovePlant(plantList: PlantListDataProps[], id: string){
    const listFiltered = plantList.filter( lists => lists.id !== id )
    return listFiltered
  }

//RNProvider -----------------------------------------------------------

    return(
    <PlantDataContext.Provider value={{
        
        handleInsertData: handleInsertData, 
        handleAddDate: handleAddDate,
        plantListData: plantListData,
        }}>
        {children}
    </PlantDataContext.Provider>
    )}