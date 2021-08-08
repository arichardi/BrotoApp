import React from 'react'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import { 
    Container,
    PhotoIcon,
    InputContainer,
    Where,
 } from './PlantRegisterScreenStyle'


export default function PlantRegisterScreen(){
    return (
        <BackgroundApp>
        <Container>
            <PhotoIcon />
            <NameDisplay>Nome</NameDisplay>
            <InputContainer>
                <AppInput placeholder='Nome da Plantinha'/>
                <AppInput placeholder='Descritivo'/>
                <AppInput placeholder='Data da chegada'/>
            </InputContainer>
            <Where>Onde fica minha plantinha ?</Where>
            <AmbientButton />
        </Container>
        </BackgroundApp>
    )
}