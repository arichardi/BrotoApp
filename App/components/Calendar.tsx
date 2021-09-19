import React from 'react'
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars'
import {SimpleLineIcons} from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import {
    Container,
} from './CalendarStyle'


LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', "Dezembro"],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje',
}
LocaleConfig.defaultLocale = 'pt-br'

interface Props {
    dateSelected: Date;
    onChangeDate: Function;
}

export default function Calendar({dateSelected, onChangeDate }: Props){

    const theme = useTheme()


    function DateSelect(){

    }

    return (
        <Container>
            <CustomCalendar
                style={{ width: 310, maxHeight: 320}} 
                renderArrow={ (direction) => 
                    <SimpleLineIcons
                        name={ direction === 'left'? 'arrow-left': 'arrow-right'}
                        size={24}
                        color={ theme.colors.green_dark}
                    />
                }
                headerStyle={{
                    backgroundColor: theme.colors.backGround,
                    borderBottomWidth: 2,
                    borderBottomColor: theme.colors.green_dark,
                    paddingBottom: 4

                }}
                theme={{
                    textDayFontFamily: theme.fonts.bold,
                    textDayHeaderFontFamily: theme.fonts.regular,
                    textDayFontSize: 14,
                    textDayHeaderFontSize: 14,
                    textMonthFontSize: 16,
                    textMonthFontFamily: theme.fonts.bold,
                    calendarBackground: theme.colors.backGround,
                    dayTextColor: theme.colors.green_dark,
                    selectedDayBackgroundColor: theme.colors.green_dark,
                    selectedDayTextColor: theme.colors.backGround,
                    textDisabledColor: theme.colors.green_light,
                
                }}

            />
        </Container>
    );
}