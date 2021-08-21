import React, {useState} from 'react'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import AppButtonM from '../components/AppButtonM'
import PhotoIcon from '../components/PhotoIcon'
import DatePickerButton from '../components/DatePickerButton'
import * as ImagePicker from 'expo-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import { 
    Container,
    NomeContainer,
    InputContainer,
    Where,
    ButtonContainer,
    AmbientContainer,
    PhotoIconContainer,
 } from './PlantRegisterScreenStyle'

export default function PlantRegisterScreen({navigation}){

    // States & Vars ----------------------------------------

    const [arriveDate, setArriveDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [envButton, setEnvButton] = useState('')
    const [plantName, setPlantName] = useState('Nome')
    const [imagePlant, setImagePlant] =useState(null)

    let FormattedArriveDate = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: '2-digit',
    }).format(arriveDate);

    // functions ---------------------------------------------

    function handleEnviroment(type : 'in' | 'out'){
        setEnvButton(type)
    }

    async function openImagePicker(){
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false){
            alert('Permission to access camera roll is required');
            return
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true){
            return
        }

        setImagePlant({localUri: pickerResult.uri})

    }

    function handleShowDataPicker(){
        setShowDatePicker(true)
    }

    function handleDatePicker(event, selectDate){
        const currentDate = selectDate || arriveDate
        setShowDatePicker(false)
        let FormattedArriveDate = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: '2-digit',
        }).format(currentDate);
        setArriveDate(currentDate)
        
    }

    // RN COMPS -------------------------------------------------------

    return (
        <BackgroundApp>
        <Container>
            
            <PhotoIconContainer>
                <PhotoIcon 
                editMode={true}
                onPress={openImagePicker}
                photoPlant={imagePlant}
                />
            </PhotoIconContainer>

            <NomeContainer>
            <NameDisplay>{plantName}</NameDisplay>
            </NomeContainer>

            <InputContainer>
                <AppInput placeholder='Nome da Plantinha'onChangeText={setPlantName}/>
                <AppInput placeholder='Descritivo'/>
                <DatePickerButton
                onPress={handleShowDataPicker}
                dateTitle={FormattedArriveDate}
                />
            </InputContainer>

            <AmbientContainer>
            <Where>Onde fica minha plantinha ?</Where>
            <AmbientButton 
                envType={envButton}
                onPress={handleEnviroment}
            />
            </AmbientContainer>
            
            <ButtonContainer>
                <AppButtonM title='Cancelar'
                 buttonType='cancel' 
                 onPress={navigation.goBack}/>
                <AppButtonM title='Confirmar'
                 buttonType='correct'
                 onPress={ () => confirmOperation({
                    name: plantName,
                    subtitle: '',
                    arriveDate: arriveDate,
                    arriveDateFormatted: FormattedArriveDate,
                    enviroment: envButton,
                    photoPlant: imagePlant,
                 })}/>
            </ButtonContainer>
            

        </Container>

        { showDatePicker && 
        <DateTimePicker 
            testID='dateTimePicker'
            value={arriveDate}
            mode='date'
            display='default'
            onChange={handleDatePicker}
        
        />
        }

        </BackgroundApp>
    )
}