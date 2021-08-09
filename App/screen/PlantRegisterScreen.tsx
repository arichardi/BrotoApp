import React, {useState} from 'react'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import AppButtonM from '../components/AppButtonM'
import { 
    Container,
    PhotoIcon,
    NomeContainer,
    InputContainer,
    Where,
    ButtonContainer,
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

            <ButtonContainer>
                <AppButtonM title='Cancelar' buttonType='cancel'/>
                <AppButtonM title='Confirmar' buttonType='correct' />
            </ButtonContainer>

        </Container>
        </BackgroundApp>
    )
}