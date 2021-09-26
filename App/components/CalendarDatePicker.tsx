import React, {useState} from 'react'
import {
    Container,
    CalendarText,
    ButtonCalendarContainer,
} from './CalendarDatePickerStyle'
import Calendar from './Calendar'
import AppButtonM from './AppButtonM'

interface Props {
    date: Date;
    onChangeDate: (date: Date) => void;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function CalendarDatePicker({date, onChangeDate, onConfirm, onCancel}: Props){


    return(
        <Container>
            <CalendarText>Escolha a sua Data?</CalendarText>

            <Calendar dateSelected={date} onChangeDate={onChangeDate}/>

            <ButtonCalendarContainer>
                <AppButtonM title='Cancelar'
                buttonType='cancel' 
                onPress={() => onCancel()}
                />
                <AppButtonM title='Confirmar'
                buttonType='correct'
                style={{ marginLeft: 16,}}
                onPress={ () => onConfirm()}
                />
             </ButtonCalendarContainer>
        </Container>
    )
}