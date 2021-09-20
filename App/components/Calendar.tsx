import React, {useState} from 'react'
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
    onChangeDate: (date: Date) => void;
 
}

interface dateCalendar {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number
}

export default function Calendar({dateSelected, onChangeDate }: Props){

    const todayCalendar = dateParseCalendar(dateSelected)
    const theme = useTheme()
    const [markedDay, setMarkedDay] = useState(todayCalendar)


    function zeroLoader(number: string): string{
        if (Number(number) < 10){
            return `0${number}`
        }else{
            return number
        }
        
    }

    function dateParseCalendar(date: Date): string{
        const day = zeroLoader(`${date.getDate()}`);
        const month = zeroLoader(`${date.getMonth() + 1}`);
        const year = date.getFullYear();
        const result = `${year}-${month}-${day}`;
        return result
    }

    function dateParseRegisterCalendar(date: Date): string{
        const day = zeroLoader(`${date.getDate()}`);
        const month = zeroLoader(`${date.getMonth() + 1}`);
        const year = date.getFullYear();
        const result = `${year}-${month}-${day}`;
        return result
    }


    function onDayPress(day: dateCalendar){
        setMarkedDay(day.dateString)
        //const registerDate = `${day.month}-${day.day}-${day.year}`
        console.log(new Date(day.timestamp))
        onChangeDate(new Date(day.timestamp))        
    }


    return (
        <Container>
            <CustomCalendar
                style={{ width: 310, height: 320}} 
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
                    textDayStyle: {justifyContent: 'center', margin: 0},
                    textDayHeaderFontSize: 14,
                    textMonthFontSize: 16,
                    textMonthFontFamily: theme.fonts.bold,
                    textSectionTitleColor: theme.colors.green_light,
                    calendarBackground: theme.colors.backGround,
                    dayTextColor: theme.colors.green_dark,
                    todayTextColor: theme.colors.attention,
                    selectedDayBackgroundColor: theme.colors.green_dark,
                    selectedDayTextColor: theme.colors.backGround,
                    textDisabledColor: theme.colors.green_light,
                    monthTextColor: theme.colors.green_dark,
                
                }}
                current={markedDay}
                onDayPress={onDayPress}
                markedDates={{
                    [markedDay]: {
                        selected: true,
                        selectedColor: theme.colors.green_dark,
                        selectedTextColor: theme.colors.backGround,
                    }
                }}
            />
        </Container>
    );
}