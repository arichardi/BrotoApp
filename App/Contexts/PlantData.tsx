import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { brotoDateFormatter } from '../utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Interfaces -----------------------------------------------------

export interface PlantListDataProps {
    id: string;
    name: string;
    subtitle: string;
    arriveDate: Date;
    enviroment: 'in' | 'out' | '';
    photoPlant?: {
        localUri: string
    };
    wateryList: string[];
    wateryListCount: number;
    fertilizerList: string[];
    fertilizerCount: number;
    deleteMode: boolean;
    quarentenaMode: boolean;
    lastQuarentine: string;
}

interface ContextProps {
  handleQuarentine: (id: string) => void;
  handleAddfertilizer: (id: string) => void;
  clearDeleteMode: () => void;
  handleRemovePlant: () => void;  
  changeDeleteMode: (id: string) => void;
  handleInsertData: ({} : PlantListDataProps) => void;
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
        'lastQuarentine': ''
      },
      { 
        'id': '2',
        "arriveDate": new Date(),
        "enviroment": "out",
        "name": "Suculenta",
        "photoPlant": null,
        "subtitle": "planta na janela",
        "wateryList": ['01/06', '02/02', '03/03'],
        "wateryListCount": 3,
        "fertilizerList" : ['01/01', '02/02'],
        "fertilizerCount":  2,
        "deleteMode": false,
        'quarentenaMode': true,
        'lastQuarentine': '01/01',
      },
]

export const PlantDataContext = createContext({} as ContextProps);


export function PlantDataProvider({children}) {

//variables ---------------------------------------------------------

const dataKey = '@brotoApp:dataPlant'
const Navigation = useNavigation()
const [plantListData, setPlantListData] = useState([] as PlantListDataProps[])
const [idList, setIdList] = useState(0)
const dateToday = brotoDateFormatter(new Date(), '2-digit')

//functions -----------------------------------------------------------


useEffect( () => {}, [plantListData])

//loading use Effect
useEffect( () => {
  async function loadingData(){
    try {
    const data = await AsyncStorage.getItem(dataKey)
    const dataParsed = JSON.parse(data)
    console.log(dataParsed)
    const lastObjID = dataParsed[dataParsed.lngth - 1].id 
    lastObjID ? setIdList(lastObjID) : setIdList(0)
    setPlantListData(dataParsed)


    } catch (error) {
      console.log(error)
      Alert.alert('Houveram erros durante o carregamento de informações')
    }
  }

  loadingData()
}, [])


// salve func
 async function salvingData(data: PlantListDataProps[]){

  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(data) )
    console.log('data salved with success !!!')
  } catch (error) {
    console.log(error)
    Alert.alert('Houveram erros que impediram a informação de ser salva')
  }
}



function handleInsertData(plant: PlantListDataProps){

    //setPlantListData([...plantListData, plant])
    salvingData([...plantListData, plant])

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
      setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
      salvingData(plantListData)
      return
      
    }
    
    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].wateryList.push(dateToday)
    listSelected[0].wateryListCount += 1
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    salvingData(plantListData)
    return

    
  }

  function handleAddfertilizer(id:string){

    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)

     //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].fertilizerCount >= 5 ){
      listSelected[0].fertilizerList.shift()
      listSelected[0].fertilizerList.push(dateToday)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
      salvingData(plantListData)
      return
      
    }

    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].fertilizerList.push(dateToday)
    listSelected[0].fertilizerCount += 1

    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    salvingData(plantListData)
    return

  }
  
  function handleQuarentine(id: string){

    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)

    //altera a data da quarentena se não estiver em quarentena
    listSelected[0].quarentenaMode === false ? 
    listSelected[0].lastQuarentine = brotoDateFormatter(new Date(), '2-digit') : {}

    //altera o estado da quarentena
    listSelected[0].quarentenaMode = !listSelected[0].quarentenaMode
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    salvingData(plantListData)
    return
  }

  function handleRemovePlant(){
    const listFiltered = plantListData.filter( lists => lists.deleteMode === false )
    setPlantListData(listFiltered)
    salvingData(plantListData)
    return
  }

  function clearDeleteMode(){
    const newList = [... plantListData ]
    newList.forEach( item => item.deleteMode = false)
    setPlantListData(newList)
    salvingData(plantListData)
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
    salvingData(plantListData)
    return
  }

//RNProvider -----------------------------------------------------------

    return(
    <PlantDataContext.Provider value={{
      handleQuarentine: handleQuarentine,
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