import React, {useState, useContext} from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonContainer,
    ButtonAddPlantContainer,
    ButtonRemovePlantContainer,
    Cto,
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
const {plantListData} = useContext(PlantDataContext)

// function ----------------------------------------------

function handleDeleteMode(){
    setDeleteMode(true)
    console.log('delete mode on')
}

// RN ----------------------------------------------
    return(
        <BackgroundApp>
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
                        deleteMode={deleteMode}
                        functionDelete={handleDeleteMode}
                         />
                }
                }
            />


            <ButtonContainer>
                { deleteMode ? (
                     <ButtonRemovePlantContainer>
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
        </BackgroundApp>


    );
}