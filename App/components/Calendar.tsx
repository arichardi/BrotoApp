import React from 'react'
import { Calendar as CustomCalendar } from 'react-native-calendars'
import { useTheme } from 'styled-components'
import {
    Container,
} from './CalendarStyle'

export default function Calendar(){

    const theme = useTheme()

    return (
        <Container>
            <CustomCalendar />
        </Container>
    );
}