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

export default function MyPlants({navigation}){

 const {plantListData} = useContext(PlantDataContext)

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
                        id={item.id}
                        photoPlant={item.photoPlant}
                        arriveDate={item.arriveDate}
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