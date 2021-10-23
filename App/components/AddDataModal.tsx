import React, {useState, useContext} from 'react'
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
import { brotoDateFormatter, dateCheck } from '../utils/helpers'
import { PlantDataContext } from '../Contexts/PlantData'

interface Props {
    type: 'Adubação' | 'Rega' | 'Quarentena';
    function?: 'Change' | 'Add';
    onCancel: () => void;
    details?: boolean;
    plantId: string;
    closePreviousModal: (bol: boolean) => void;
    wateryList: string[];
}

export default function AddDataModal({type, plantId, wateryList , onCancel, details = true, closePreviousModal}: Props){

    const [openModal, setOpenModal] = useState(false)
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [calendarDateFormatted, setCalendarDateFormatted] = useState(brotoDateFormatter(calendarDate, '2-digit', 'ano'))
    const {handleAddDate, plantListData} = useContext(PlantDataContext)
    
    function handleOpenModal(){
        setOpenModal(true)
    }

    function handleConfirmCalendarDate(){
        setCalendarDateFormatted(brotoDateFormatter(calendarDate, '2-digit', 'ano'))
        setOpenModal(false)
    }

    function handleConfirmAddData(waterylist: string[]){
        const checkingDate = dateCheck(waterylist, calendarDateFormatted)
        console.log(checkingDate)
        if(checkingDate){
            Alert.alert('Datas duplicadas', `Essa data já foi registrada anteriormente no sistema, por favor escolha outra data`)
            return 1
        }
        handleAddDate(plantId, calendarDateFormatted)
        closePreviousModal(false)

    }

    function handleCancelCalendarDate(){
        setCalendarDate(new Date())
        setCalendarDateFormatted(brotoDateFormatter(calendarDate, '2-digit'))
        setOpenModal(false)
    }


    return(
        <>
        <Container details={details}>
            <CTO>{`Adicionar uma nova ${type}`}</CTO>
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
                    title='Adicionar'
                    size='small'
                    onPress={() => handleConfirmAddData(wateryList)}
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
                onConfirm={handleConfirmCalendarDate}
            />

        </Modal>

        </>
    )
}