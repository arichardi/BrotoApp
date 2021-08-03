import React from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonAddPlantContainer,
    PlantsPack,
    Cto,
    } from './MyPlantsStyles';
import PlantCard from '../components/PlantCard';
import PlantAddIconButton from '../Assets/PlantAddIconButton'
import BackgroundApp from '../components/BackgroundApp';

export default function MyPlants(){
    return(
        <BackgroundApp>
        <Container>
            <PlantsPack>
            <Cto>
                <Underline />
                <Title>Minhas Plantas</Title>
            </Cto>

            <PlantList>
                <PlantCard title='drascena' subtitle='Minha Primeira Plantinha' />
                <PlantCard title='drascena' subtitle='Minha Primeira Plantinha' />
                <PlantCard title='drascena' subtitle='Minha Primeira Plantinha' />

            </PlantList>
            </PlantsPack>

            <ButtonAddPlantContainer>
                <PlantAddIconButton />
            </ButtonAddPlantContainer>
        </Container>
        </BackgroundApp>
    );
}