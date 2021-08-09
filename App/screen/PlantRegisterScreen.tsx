import React, {useState} from 'react'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import { 
    Container,
    PhotoIcon,
    NomeContainer,
    InputContainer,
    Where,
 } from './PlantRegisterScreenStyle'


export default function PlantRegisterScreen(){

    const [envButton, setEnvButton] = useState('')

    return (
        <BackgroundApp>
        <Container>
            <PhotoIcon />
            <NomeContainer>
            <NameDisplay>Nome</NameDisplay>
            </NomeContainer>

            <InputContainer>
                <AppInput placeholder='Nome da Plantinha'/>
                <AppInput placeholder='Descritivo'/>
                <AppInput placeholder='Data da chegada'/>
            </InputContainer>
            <Where>Onde fica minha plantinha ?</Where>
            <AmbientButton envType={envButton}/>
        </Container>
        </BackgroundApp>
    )
}