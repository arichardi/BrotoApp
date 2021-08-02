import React from 'react'
import { Container, Title, Underline } from './MyPlantsStyles';
import BrotoIcon from '../Assets/BrotoIcon';

export default function MyPlants(){
    return(
        <Container>
            <Underline />
            <Title>Minhas Plantas</Title>
            <BrotoIcon />
        </Container>
    );
}