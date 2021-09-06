import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { brotoDateFormatter } from '../utils/helpers';
import fertilizerList from '../components/FertilizerList';

// Interfaces -----------------------------------------------------

export interface PlantListDataProps {
    id: string;
    name: string;
    subtitle: string;
    arriveDate: Date;
    enviroment: 'in' | 'out';
    photoPlant?: {
        localUri: string
    };
    wateryList: string[];
    wateryListCount: number;
    fertilizerList: string[];
    fertilizerCount: number;
    deleteMode: boolean;
    quarentenaMode: boolean;
}

interface ContextProps {
  handleAddfertilizer: (id: string) => void;
  clearDeleteMode: () => void;
  handleRemovePlant: () => void;  
  changeDeleteMode: (id: string) => void;
  handleInsertData: (PlantListDataProps) => void;
  handleAddDate: (id: string) => void 
  plantListData: PlantListDataProps[];
  idList: number
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
        "fertilizerList" : ['01/01', '02/02', '03/03', '04/04'],
        "fertilizerCount":  4,
        "deleteMode": false,
        'quarentenaMode': false,
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
        "fertilizerList" : [],
        "fertilizerCount":  0,
        "deleteMode": false,
        'quarentenaMode': false,
      },
]

export const PlantDataContext = createContext({} as ContextProps);


export function PlantDataProvider({children}) {

//variables ---------------------------------------------------------

const Navigation = useNavigation()
const [plantListData, setPlantListData] = useState(initialStateTest)
const [idList, setIdList] = useState(3)
const dateToday = brotoDateFormatter(new Date(), '2-digit')

//functions -----------------------------------------------------------

useEffect( () => {}, [plantListData])

function handleInsertData(plant: PlantListDataProps){
    setPlantListData([...plantListData, plant])
    setIdList( idList + 1)
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
      setPlantListData(resultList.sort())
      return
      
    }
    
    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].wateryList.push(dateToday)
    listSelected[0].wateryListCount += 1
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    return

    
  }

  function handleAddfertilizer(id:string){

    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)

    //Verifica se o último atualizado é do dia de hoje
    if(listSelected[0].fertilizerList[fertilizerList.length - 1] == dateToday ){
      Alert.alert('Data Duplicada', 'A data de hoje já foi informada anteriormente')
      return
    }

    //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].fertilizerCount >= 5 ){
      listSelected[0].fertilizerList.shift()
      listSelected[0].fertilizerList.push(dateToday)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      setPlantListData(resultList.sort())
      return
      
    }

    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].fertilizerList.push(dateToday)
    listSelected[0].fertilizerCount += 1

    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    return

  }
  
  function handleRemovePlant(){
    const listFiltered = plantListData.filter( lists => lists.deleteMode === false )
    setPlantListData(listFiltered)
    return
  }

  function clearDeleteMode(){
    const newList = [... plantListData ]
    newList.forEach( item => item.deleteMode = false)
    setPlantListData(newList)
  }

  function changeDeleteMode(id: string){
    //acha o elemeto referente
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)
    //altera o estado de delete mode
    listSelected[0].deleteMode = true
    //manda o estado de volta pra pilha
    const resultList = [ ... listNotSelected, ... listSelected]
    setPlantListData(resultList.sort( (a,b) => Number(a.id) - Number(b.id) ))
    return
  }

//RNProvider -----------------------------------------------------------

    return(
    <PlantDataContext.Provider value={{
      handleAddfertilizer: handleAddfertilizer,
      clearDeleteMode: clearDeleteMode,
      handleRemovePlant: handleRemovePlant,
      changeDeleteMode: changeDeleteMode,
      handleInsertData: handleInsertData, 
      handleAddDate: handleAddDate,
      plantListData: plantListData,
      idList: idList
       }}>
        {children}
    </PlantDataContext.Provider>
    )}