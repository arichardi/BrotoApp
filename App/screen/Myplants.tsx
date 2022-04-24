import React, {useState, useEffect} from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonContainer,
    ButtonAddPlantContainer,
    ButtonRemovePlantContainer,
    Cto,
    ButtonExitDeleteMode,
    } from './MyPlantsStyles';
import PlantCard from '../components/PlantCard';
import PlantAddIconButton from '../Assets/PlantAddIconButton'
import BackgroundApp from '../components/BackgroundApp';
import PlantRemoveIconButton from '../Assets/PlantRemoveIconButton';

import { readPlantData } from '../db/PlantListaData';
import { PlantProps } from '../interfaces/interfaces';


//----------------------------------------------------------------


export default function MyPlants({navigation}){

// Variables ----------------------------------------------
const [isLoading, setIsLoading] = useState(true)
const [deleteMode, setDeleteMode] = useState(false)
const [plantListData, setPlantListData] = useState<PlantProps[]>([] as PlantProps[])


// function ----------------------------------------------

useEffect( () => {
    async function loadingData() {
        const loadedData = await readPlantData()
        setPlantListData(loadedData as PlantProps[])
    }
    loadingData()

}, [])

function handlestartDeleteMode(){
    setDeleteMode(true)
}

function deletePlant(){

}

function handleDeleteModeExit(){

}

// RN ----------------------------------------------
    return(
        <BackgroundApp>
        <ButtonExitDeleteMode onPress={handleDeleteModeExit} >
        <Container>
            <Cto>
                <Underline />
                <Title >Minhas Plantas</Title>
            </Cto>

            <PlantList 
                data={plantListData}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => {
                    return <PlantCard 
                        id={item.id}
                        name={item.name}
                        subtitle={item.subtitle}
                        photo={item.photoPlant}
                        functionDelete={handlestartDeleteMode}
                         />
                }
                }
            />


            <ButtonContainer>
                { deleteMode ? (
                     <ButtonRemovePlantContainer onPress={ () => deletePlant()} >
                        <PlantRemoveIconButton />
                    </ButtonRemovePlantContainer>
                    ) : (       
                    <ButtonAddPlantContainer onPress={ () => navigation.navigate('PlantRegister')}>
                        <PlantAddIconButton />
                    </ButtonAddPlantContainer>        
                    ) 
                }
            </ButtonContainer>
        </Container>
        </ButtonExitDeleteMode>
        </BackgroundApp>


    );
}