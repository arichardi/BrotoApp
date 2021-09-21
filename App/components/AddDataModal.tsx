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
import Calendar from './Calendar'
import AppButtonM from './AppButtonM'

interface Props {
    type: 'Adubação' | 'Rega' | 'Quarentera'
    function?: 'Change' | 'Add'
}

export default function AddDataModal({type}: Props){

    const [openModal, setOpenModal] = useState(false)
    const today = new Date()
        
    function handleOpenModal(){
        setOpenModal(true)
    }

    return(
        <>
        <Container>
            <CTO>{`Adicionar uma nova ${type}`}</CTO>
            <DatePickerButton 
            onPress={handleOpenModal}
            dateTitle='08/07'
            />

            <ExtraInfoContainer>
                <BoxHideDetails />
                <TextDetails>Detalhes</TextDetails>
                <AreaText></AreaText>
            </ExtraInfoContainer>

            <ButtonContainer>
                <AppButtonM 
                    buttonType='cancel'
                    title='Cancelar'
                />
                <AppButtonM 
                    buttonType='correct'
                    title='Adicionar'
                />
            </ButtonContainer>

        </Container>

        <Modal                
            isVisible={openModal}
            onBackdropPress={ () => setOpenModal(false)}
            onBackButtonPress={ () => setOpenModal(false)}
            animationIn={'fadeInUp'}
            animationOut={'fadeOutDown'}>
                
            <Calendar 
                dateSelected={today}
                onChangeDate={ today => {}}
            />

        </Modal>

        </>
    )
}