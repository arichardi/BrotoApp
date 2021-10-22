import React, {useState, useContext, useEffect} from 'react'
import { Alert } from 'react-native'
import {
    Container,
    CTO,
    ExtraInfoContainer,
    TextDetails,
    AreaText,
    BoxHideDetails,
    ButtonContainer,
} from './AddDataModalStyle'
import DatePickerButton from './DatePickerButton'
import Modal from 'react-native-modal'
import AppButtonM from './AppButtonM'
import CalendarDatePicker from './CalendarDatePicker'
import { brotoDateFormatter, dateChanger, dateCheck, stringToDate } from '../utils/helpers'
import { PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'

interface Props {
    type: 'Adubação' | 'Rega' | 'Quarentena';
    onCancel: () => void;
    onConfirm: (date: string) => void;
    onUpdate: () => void;
    details?: boolean;
    plantId: string;
    closePreviousModal: (bol: boolean) => void;
    wateryList: string[];
    oldDate: string;

}

export default function UpdateDataModal({type, plantId, wateryList , onCancel, onConfirm, onUpdate, details = true, closePreviousModal, oldDate}: Props){

    const [openModal, setOpenModal] = useState(false)
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [calendarDateFormatted, setCalendarDateFormatted] = useState(brotoDateFormatter(calendarDate, '2-digit', 'ano'))
    const {handleChangeDate, plantListData} = useContext(PlantDataContext)
    const [PlantData, setPlantData] = useState( {} as PlantListDataProps)
    
    useEffect( () => {
        if(oldDate){
            setCalendarDate(stringToDate(oldDate))
            setCalendarDateFormatted(oldDate)
        }
    },[])

    useEffect( () => {
        const plant = plantListData.filter( item => item.id === plantId)
        const plantFNS = plant[0] 
        setPlantData(plantFNS)
    }, [plantListData])

    function handleOpenModal(){
        setOpenModal(true)
    }

    function handleConfirmAddData(waterylist: string[]){
        const checkingDate = dateCheck(waterylist, calendarDateFormatted)
        console.log(checkingDate)
        if(checkingDate){
            Alert.alert('Datas duplicadas', `Essa data já foi registrada anteriormente no sistema, por favor escolha outra data`)
            return 1
        }
        //handleAddDate(plantId, calendarDateFormatted)
        closePreviousModal(false)

    }

    function handleConfirmButton(){
        setCalendarDateFormatted(brotoDateFormatter(calendarDate, '2-digit', 'ano'))
        onConfirm(brotoDateFormatter(calendarDate, '2-digit', 'ano'))
        setOpenModal(false)
    }
    

    return(
        <>
        <Container details={details}>
            <CTO>{`Alterar os dados da ${type}`}</CTO>
            <DatePickerButton 
            onPress={handleOpenModal}
            dateTitle={calendarDateFormatted}
            type={type}
            title={`Data da ${type}`}
            />
            {
            details && (
            <ExtraInfoContainer type={type}>
                <BoxHideDetails />
                <TextDetails type={type} >Detalhes</TextDetails>
                <AreaText 
                    multiline
                    numberOfLines={6}
                ></AreaText>
            </ExtraInfoContainer>
            )}

            <ButtonContainer>
                <AppButtonM 
                    buttonType='cancel'
                    title='Cancelar'
                    onPress={onCancel}
                    size='small'
                />
                <AppButtonM 
                    buttonType='correct'
                    title='Alterar'
                    size='small'
                    onPress={onUpdate}
                />
            </ButtonContainer>

        </Container>

        <Modal                
            isVisible={openModal}
            onBackdropPress={ () => setOpenModal(false)}
            onBackButtonPress={ () => setOpenModal(false)}
            animationIn={'fadeInUp'}
            animationOut={'fadeOutDown'}>
                
            <CalendarDatePicker 
                date={calendarDate}
                type={type}
                onChangeDate={setCalendarDate}
                onCancel={() => setOpenModal(false)}
                onConfirm={handleConfirmButton}
            />

        </Modal>

        </>
    )
}