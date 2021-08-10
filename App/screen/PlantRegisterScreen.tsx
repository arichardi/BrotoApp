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
    AmbientContainer,
 } from './PlantRegisterScreenStyle'


export default function PlantRegisterScreen(){

    const [envButton, setEnvButton] = useState('')
    const [plantName, setPlantName] = useState('Nome')

    function handleEnviroment(type : 'in' | 'out'){
        setEnvButton(type)
    }

    return (
        <BackgroundApp>
        <Container>
            
            <PhotoIcon />
            <NomeContainer>
            <NameDisplay>{plantName}</NameDisplay>
            </NomeContainer>

            <InputContainer>
                <AppInput placeholder='Nome da Plantinha'onChangeText={setPlantName}/>
                <AppInput placeholder='Descritivo'/>
                <AppInput placeholder='Data da chegada' keyboardType='number-pad'/>
            </InputContainer>

            <AmbientContainer>
            <Where>Onde fica minha plantinha ?</Where>
            <AmbientButton 
                envType={envButton}
                onPress={handleEnviroment}
            />
            </AmbientContainer>
            
            <ButtonContainer>
                <AppButtonM title='Cancelar' buttonType='cancel'/>
                <AppButtonM title='Confirmar' buttonType='correct' />
            </ButtonContainer>
            

        </Container>
        </BackgroundApp>
    )
}