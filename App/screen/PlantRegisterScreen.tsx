import React, {useState, useContext} from 'react'
import { Alert } from 'react-native'
import AppInput from '../components/AppInput'
import BackgroundApp from '../components/BackgroundApp'
import NameDisplay from '../components/NameDIsplay'
import AmbientButton from '../components/AmbientButton'
import AppButtonM from '../components/AppButtonM'
import PhotoIcon from '../components/PhotoIcon'
import DatePickerButton from '../components/DatePickerButton'
import * as ImagePicker from 'expo-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import { PlantDataContext } from '../Contexts/PlantData'

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
    const [subtitleDescription, setSubtitleSescription] = useState('')
    const [errorName, setErrorName] = useState('false')
    const [errorEnv, setErrorEnv] = useState('false')
    
    let FormattedArriveDate = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    }).format(arriveDate);

    const {handleInsertData, idList } = useContext(PlantDataContext)
   
    // functions ---------------------------------------------

    function handleConfirmInsert(){
        if(plantName === 'Nome' || plantName === ''){
            Alert.alert('Faltando informação', 'Precisamos que você insira o nome da plantinha que vamos acompanhar')
            return
        }
        if(envButton === ''){
            Alert.alert('Faltando informação', 'Precisamos que você insira o local onde pretende guardar a sua plantinha')
            return
        }
        handleInsertData({
            id: idList.toString(),
            name: plantName,
            subtitle: subtitleDescription,
            arriveDate: arriveDate,
            enviroment: envButton,
            photoPlant: imagePlant,
            wateryList: [],
            wateryListCount: 0,
            deleteMode: false,
         })
    }

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
            month: '2-digit',
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
                <AppInput placeholder='Descritivo'onChangeText={setSubtitleSescription} />
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
                 onPress={ () => handleConfirmInsert()
                 }/>
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

