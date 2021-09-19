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
    PhotoModal,
    ContainerPhotoModal,
    PhotoModalText,
    TextGaleryPhotoModal,
    ContainerGaleryFotoModal,
    ContainerCamFotoModal,
    TextCamPhotoModal,
    GaleryButton,
    PhotoButton,
    ContainerOptions,
    CalendarModal,
    ButtonCalendarContainer,
    CalendarModalContainer,
    CalendarText,
 } from './PlantRegisterScreenStyle'
import GaleryIcon from '../Assets/GaleryIcon'
import CameraIcon from '../Assets/CameraIcon'
import Calendar from '../components/Calendar'

 type Enviro = 'in' | 'out' | ''

export default function PlantRegisterScreen({navigation}){

    // States & Vars ----------------------------------------

    const [arriveDate, setArriveDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [envButton, setEnvButton] = useState<Enviro>('')
    const [plantName, setPlantName] = useState('Nome')
    const [imagePlant, setImagePlant] =useState(null)
    const [subtitleDescription, setSubtitleSescription] = useState('')
    const [errorName, setErrorName] = useState('false')
    const [errorEnv, setErrorEnv] = useState('false')
    const [photoModal, setPhotoModal] = useState(false)
    const [openCalendarModal, setOpenCalendarModal] = useState(false)
    
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
            fertilizerCount: 0,
            fertilizerList: [],
            lastQuarentine: '',
            quarentenaMode: false
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
        setPhotoModal(false)

    }

    async function openCamPicker(){
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if(permissionResult.granted === false){
            alert('Permission to access Camera is required')
            return
        }

        let pickerResult = await ImagePicker.launchCameraAsync();
        if (pickerResult.cancelled === true){
            return
        }

        setImagePlant({localUri: pickerResult.uri})
        setPhotoModal(false)

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
                onPress={() => setPhotoModal(true)}
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
                onPress={() => setOpenCalendarModal(true)}
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
    
            <PhotoModal 
            isVisible={photoModal}
            onBackdropPress={ () => setPhotoModal(false)}
            onBackButtonPress={ () => setPhotoModal(false)}
            animationIn={'fadeInUp'}
            animationOut={'fadeOutDown'}
            >
                <ContainerPhotoModal>
                    <PhotoModalText>Onde vamos pegar a foto ?</PhotoModalText>
                    <ContainerOptions>

                    <ContainerGaleryFotoModal>
                        <GaleryButton onPress={openImagePicker}>
                            <GaleryIcon />
                        </GaleryButton>
                        <TextGaleryPhotoModal>Galery</TextGaleryPhotoModal>
                    </ContainerGaleryFotoModal>

                    <ContainerCamFotoModal>
                        <PhotoButton onPress={openCamPicker}>
                            <CameraIcon size={'40'}/>
                        </PhotoButton>
                        <TextCamPhotoModal>Tirar Foto</TextCamPhotoModal>
                    </ContainerCamFotoModal>

                    </ContainerOptions>
                </ContainerPhotoModal>
            </PhotoModal>

            <CalendarModal
                isVisible={openCalendarModal}
                onBackdropPress={ () => setOpenCalendarModal(false)}
                onBackButtonPress={ () => setOpenCalendarModal(false)}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}
            >
                <CalendarModalContainer>
                    <CalendarText>Escolha a sua Data?</CalendarText>
                    <Calendar dateSelected={arriveDate} onChangeDate={setArriveDate}/>
                <ButtonCalendarContainer>
                    <AppButtonM title='Cancelar'
                    buttonType='cancel' 
                    onPress={() => setOpenCalendarModal(false)}
                    />
                    <AppButtonM title='Confirmar'
                    buttonType='correct'
                    style={{ marginLeft: 16,}}
                    />
                 </ButtonCalendarContainer>
                 </CalendarModalContainer>
            </CalendarModal>

        </BackgroundApp>
    )
}

