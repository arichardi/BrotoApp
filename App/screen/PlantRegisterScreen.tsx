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

 } from './PlantRegisterScreenStyle'
import GaleryIcon from '../Assets/GaleryIcon'
import CameraIcon from '../Assets/CameraIcon'
import CalendarDatePicker from '../components/CalendarDatePicker'
import { createPlant } from '../db/PlantListaData'

 type Enviro = 'in' | 'out' | ''

export default function PlantRegisterScreen({navigation}){

    // States & Vars ----------------------------------------

    const [arriveDate, setArriveDate] = useState(new Date())
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [envButton, setEnvButton] = useState<Enviro>('')
    const [plantName, setPlantName] = useState('Nome')
    const [imagePlant, setImagePlant] =useState(null)
    const [subtitleDescription, setSubtitleSescription] = useState('')
    const [photoModal, setPhotoModal] = useState(false)
    const [openCalendarModal, setOpenCalendarModal] = useState(false)
    
    let FormattedArriveDate = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    }).format(arriveDate);
    
    const [arriveDateString, setArriveDateString] = useState(FormattedArriveDate)
   
    // functions ---------------------------------------------

    async function handleConfirmInsert(){
        if(plantName === 'Nome' || plantName === ''){
            Alert.alert('Faltando informa????o', 'Precisamos que voc?? insira o nome da plantinha que vamos acompanhar')
            return
        }
        if(envButton === ''){
            Alert.alert('Faltando informa????o', 'Precisamos que voc?? insira o local onde pretende guardar a sua plantinha')
            return
        }

        const newPlantCreated = {
            name: plantName,
            subtitle: subtitleDescription,
            arriveDate: arriveDate,
            enviroment: envButton,
            photoPlant: imagePlant ? imagePlant : '',
            lastQuarentine: '',
            
        }
        const result = await createPlant(newPlantCreated)
        console.log(result);
        navigation.goBack();

    }

    function handleConfirmCalendarModal(date: Date){
        let FormattedArriveDate = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
        }).format(date);
        setArriveDateString(FormattedArriveDate)
        setArriveDate(date)
        console.log(`arrivedate: ${arriveDate}, formatted: ${arriveDateString}, date function ${date} calendarDate ${calendarDate}`)
        setOpenCalendarModal(false)
    }

    function handleCancelCalendaryModal(){
        setCalendarDate(new Date())
        setOpenCalendarModal(false)
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
                dateTitle={arriveDateString}
                title='Data da chegada'
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
                 onPress={ () => handleConfirmInsert()}
                 />
            </ButtonContainer>
            

        </Container>

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

                <CalendarDatePicker 
                    date={calendarDate}
                    onChangeDate={setCalendarDate}
                    onConfirm={() => handleConfirmCalendarModal(calendarDate)}
                    onCancel={() => handleCancelCalendaryModal()}
                    />
            </CalendarModal>

        </BackgroundApp>
    )
}

