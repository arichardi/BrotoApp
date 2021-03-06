import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { brotoDateFormatter, sortFormatted } from '../utils/helpers';
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
  handleAddDate: (id: string, otherDate?: string) => void 
  handleChangeDate: (id: string, indexCut: number, substituteDate: string) => void
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

const Navigation = useNavigation()
const [plantListData, setPlantListData] = useState([])
const [idList, setIdList] = useState(0)
const dateToday = brotoDateFormatter(new Date(), '2-digit', 'ano')
const dataKey = '@brotoApp:PlantListData'

//functions -----------------------------------------------------------

async function clearData(){
  await AsyncStorage.removeItem(dataKey)
}

async function loadData(){
  try {
    const response = await AsyncStorage.getItem(dataKey)
    if(response === null ){
      setPlantListData([])
      return
    }
    const data: PlantListDataProps[] = JSON.parse(response)
    if( data.length === 0){
      setPlantListData([])
      return
    }

    const dataFormated: PlantListDataProps[]  = data.map( item => {
      return {
        id: item.id,
        arriveDate: new Date(item.arriveDate),
        enviroment: item.enviroment,
        name: item.name,
        photoPlant: item.photoPlant,
        subtitle: item.subtitle,
        wateryList: item.wateryList,
        wateryListCount: item.wateryListCount,
        fertilizerList : item.fertilizerList,
        fertilizerCount:  item.fertilizerCount,
        deleteMode: item.deleteMode,
        quarentenaMode: item.quarentenaMode,
        lastQuarentine: item.lastQuarentine,
      }});
      
    setPlantListData(dataFormated)
    if (dataFormated){
      const lastId: number = Number(dataFormated[dataFormated.length - 1].id)
      setIdList(lastId + 1)
    }

  } catch (error) {
    Alert.alert('Ocorreu um erro durante o carregamento de dados')
    console.log(error)
  }
}
//first loading
useEffect( () => {
  //clearData();
  loadData();
}, [])

//reload
useEffect( () => {}, [plantListData])


async function handleInsertData(plant: PlantListDataProps){
    await AsyncStorage.setItem(dataKey,JSON.stringify([...plantListData, plant]) )
    setPlantListData([...plantListData, plant])
    setIdList( idList + 1)
    Navigation.goBack();
}

async function handleAddDate(id: string, dateOther: string = dateToday){
 
    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected: PlantListDataProps[] = plantListData.filter( lists => lists.id === id)
    

    //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].wateryListCount >= 10 ){
      listSelected[0].wateryList.shift()
      listSelected[0].wateryList.push(dateOther)
      listSelected[0].wateryList.sort(sortFormatted)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
      setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
      return
      
    }
    
    //acessa o item desejado do objeto e adiciona a data, atenção ao dateOther caso informado
    listSelected[0].wateryList.push(dateOther)
    listSelected[0].wateryList.sort(sortFormatted)
    listSelected[0].wateryListCount += 1
    
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    return

    
  }

  async function handleChangeDate(id: string, indexCut: number, substituteDate: string){

    //localiza a planta na lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected: PlantListDataProps[] = plantListData.filter( lists => lists.id === id)

    //remove a data do index referente e substitue pelo informado
    listSelected[0].wateryList.splice(indexCut, 1, substituteDate)
    console.log(indexCut)

    //coloca a lista em ordem
    listSelected[0].wateryList.sort(sortFormatted)

    //coloca a lista em um novo pacote
    const resultList = [ ... listNotSelected, ... listSelected]

    //salva a lista no DB
    await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    console.log('internal updated')
    return
  }


  async function handleAddfertilizer(id:string){

    //organiza e separa os objetos da lista
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)

     //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].fertilizerCount >= 5 ){
      listSelected[0].fertilizerList.shift()
      listSelected[0].fertilizerList.push(dateToday)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
      setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
      return
      
    }

    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].fertilizerList.push(dateToday)
    listSelected[0].fertilizerCount += 1

    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
    await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    return

  }
  
  async function handleQuarentine(id: string){

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
    await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a, b) => Number(a.id) - Number(b.id) )) )
    setPlantListData(resultList.sort( (a, b) => Number(a.id) - Number(b.id) ))
    return
  }

  async function handleRemovePlant(){
    const listFiltered = plantListData.filter( lists => lists.deleteMode === false )
    await AsyncStorage.setItem(dataKey,JSON.stringify(listFiltered) )
    setPlantListData(listFiltered)
    return
  }

  async function clearDeleteMode(){
    const newList = [... plantListData ]
    newList.forEach( item => item.deleteMode = false)
    await AsyncStorage.setItem(dataKey,JSON.stringify(newList) )
    setPlantListData(newList)
  }

  async function changeDeleteMode(id: string){
    //acha o elemeto referente
    const listNotSelected = plantListData.filter( lists => lists.id !== id )
    const listSelected = plantListData.filter( lists => lists.id === id)
    //altera o estado de delete mode
    listSelected[0].deleteMode = true
    //manda o estado de volta pra pilha
    const resultList = [ ... listNotSelected, ... listSelected]

    await AsyncStorage.setItem(dataKey,JSON.stringify(resultList.sort( (a,b) => Number(a.id) - Number(b.id) )) )
    setPlantListData(resultList.sort( (a,b) => Number(a.id) - Number(b.id) ))
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
      handleChangeDate: handleChangeDate,
      plantListData: plantListData,
      idList: idList
       }}>
        {children}
    </PlantDataContext.Provider>
    )}