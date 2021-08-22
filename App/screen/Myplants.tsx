import React, {useState, useContext} from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonAddPlantContainer,
    Cto,
    } from './MyPlantsStyles';
import PlantCard from '../components/PlantCard';
import PlantAddIconButton from '../Assets/PlantAddIconButton'
import BackgroundApp from '../components/BackgroundApp';
import { PlantCardProps } from '../components/PlantCard'
import {PlantDataContext} from '../Contexts/PlantData'

//----------------------------------------------------------------

interface PlantStructure {
    name: string;
    subtitle?: string;
    arriveDate: Date;
    arriveDateFormatted: string;
    enviroment: 'in' | 'out';
    photoPlant?: object;
}

export default function MyPlants({navigation}){

//Variables ----------------------------------------------

    const [visiblemodal, setVisibleModal] = useState(false)

const plants: PlantCardProps[] = [
     {id: '1',
     title: 'Drascena',
     subtitle: 'minha plantinha'
    },
    {id: '2',
     title: 'Samambaia',
     subtitle: 'sala gostosinha'
    },
    {id: '3',
     title: 'Hera',
     subtitle: 'venenosa eeeee era venenosa'
    },
 
]

const {plantListData} = useContext(PlantDataContext)

    //functions -----------------------------------------------
    
    
    function handleNewPlants(plantData: PlantStructure ){
        console.log(plantData)
        setVisibleModal(false)

    }

    //RN  -----------------------------------------------

    return(
        <>
        <BackgroundApp>
        <Container>
            <Cto>
                <Underline />
                <Title >Minhas Plantas</Title>
            </Cto>

{/*             <PlantList 
                data={plants}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => {
                    return <PlantCard 
                        title={item.title}
                        subtitle={item.subtitle}
                        id={item.id}/>
                }
                }
            /> */}
            <PlantList 
                data={plantListData}
                keyExtractor={ item => item.name}
                renderItem={ ({item}) => {
                    return <PlantCard 
                        title={item.name}
                        subtitle={item.subtitle}
                        id={item.name}/>
                }
                }
            />


            <ButtonAddPlantContainer onPress={ () => navigation.navigate('PlantRegister')} >
                <PlantAddIconButton />
            </ButtonAddPlantContainer>
        </Container>
        </BackgroundApp>

{/*         <Modal visible={visiblemodal} animationType='slide' statusBarTranslucent >
            <PlantRegisterScreen 
                cancelOperation={handleAddPlantModal}
                confirmOperation={handleNewPlants}
            />
        </Modal> */}
        
        </>
    );
}