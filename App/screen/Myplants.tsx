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
import {PlantDataContext} from '../Contexts/PlantData'

//----------------------------------------------------------------

interface PlantStructure {
    id?: string
    name: string;
    subtitle?: string;
    arriveDate: Date;
    arriveDateFormatted: string;
    enviroment: 'in' | 'out';
    photoPlant?: {
        localUri: string;
    };
    wateryList: [];
    wateryListCount: number;
}

export default function MyPlants({navigation}){

//Variables ----------------------------------------------

 const {plantListData} = useContext(PlantDataContext)

    //functions -----------------------------------------------
    
    

    //RN  -----------------------------------------------

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
                        name={item.name}
                        subtitle={item.subtitle}
                        id={item.name}
                        photoPlant={item.photoPlant}
                        arriveDateFormatted={item.arriveDateFormatted}
                        wateryList={item.wateryList}
                        wateryListCount={item.wateryListCount}
                         />
                }
                }
            />


            <ButtonAddPlantContainer onPress={ () => navigation.navigate('PlantRegister')} >
                <PlantAddIconButton />
            </ButtonAddPlantContainer>
        </Container>
        </BackgroundApp>


    );
}