import React, {useState} from 'react'
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

interface Props {
    type: 'Adubação' | 'Rega' | 'Quarentena';
    function?: 'Change' | 'Add';
    onCancel: () => void;
    details?: boolean;
}

export default function AddDataModal({type, onCancel, details = true}: Props){

    const [openModal, setOpenModal] = useState(false)
    const today = new Date()
        
    function handleOpenModal(){
        setOpenModal(true)
    }

    return(
        <>
        <Container details={details}>
            <CTO>{`Adicionar uma nova ${type}`}</CTO>
            <DatePickerButton 
            onPress={handleOpenModal}
            dateTitle='08/07'
            type={type}
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
                date={today}
                type={type}
                onChangeDate={() => {}}
                onCancel={() => setOpenModal(false)}
                onConfirm={() => {}}
            />

        </Modal>

        </>
    )
}