import styled from 'styled-components/native';
import syled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    border-radius: 16px;
    align-items: center;
`;

export const CalendarText = styled.Text`
    margin-top: 16px;
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: ${RFValue(16)}px;
    `;

export const ButtonCalendarContainer = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
`;
