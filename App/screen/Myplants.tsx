import React, {useState, useContext} from 'react'
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
import {PlantDataContext} from '../Contexts/PlantData'
import PlantRemoveIconButton from '../Assets/PlantRemoveIconButton';


//----------------------------------------------------------------


export default function MyPlants({navigation}){

// Variables ----------------------------------------------
const [deleteMode, setDeleteMode] = useState(false)
const {plantListData, handleRemovePlant, clearDeleteMode} = useContext(PlantDataContext)

// function ----------------------------------------------

function handlestartDeleteMode(){
    setDeleteMode(true)
    console.log('delete mode on')
}

function deletePlant(){
    handleRemovePlant()
    setDeleteMode(false)
}

function handleDeleteModeExit(){
    deleteMode ? setDeleteMode(false): {}
    clearDeleteMode()
    return
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
                keyExtractor={ item => item.name}
                renderItem={ ({item}) => {
                    return <PlantCard 
                        id={item.id}
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