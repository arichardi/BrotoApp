import React, {useState} from 'react'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import AppButtonM from '../components/AppButtonM'
import PhotoIcon from '../components/PhotoIcon'
import { 
    Container,
    NomeContainer,
    InputContainer,
    Where,
    ButtonContainer,
    AmbientContainer,
    PhotoIconContainer,
 } from './PlantRegisterScreenStyle'


export default function PlantRegisterScreen({cancelOperation}){

    const [envButton, setEnvButton] = useState('')
    const [plantName, setPlantName] = useState('Nome')

    function handleEnviroment(type : 'in' | 'out'){
        setEnvButton(type)
    }

    return (
        <BackgroundApp>
        <Container>
            <PhotoIconContainer>
                <PhotoIcon />
            </PhotoIconContainer>

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
                <AppButtonM title='Cancelar' buttonType='cancel' onPress={() => cancelOperation(false)}/>
                <AppButtonM title='Confirmar' buttonType='correct'/>
            </ButtonContainer>
            

        </Container>
        </BackgroundApp>
    )
}