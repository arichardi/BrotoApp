import React from 'react'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import { 
    Container,
    PhotoIcon
 } from './PlantRegisterScreenStyle'


export default function PlantRegisterScreen(){
    return (
        <BackgroundApp>
        <Container>
            <PhotoIcon />
            <NameDisplay>Nome</NameDisplay>
        </Container>
        </BackgroundApp>
    )
}