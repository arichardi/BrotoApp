import styled from 'styled-components/native'
import {TouchableOpacity ,TouchableOpacityProps } from 'react-native'

interface ButtonTypeProps extends TouchableOpacityProps {
    buttonType: 'correct' | 'cancel'
}

interface titleTypeProps {
    buttonType: 'correct' | 'cancel'
}

export const Container = styled(TouchableOpacity)<ButtonTypeProps>`
    background-color: ${ ({theme, buttonType}) => (
        buttonType === 'correct' ? theme.colors.green_dark : theme.colors.backGround
    ) };
    border-width: ${ ({buttonType}) => 
        buttonType === 'correct' ? 0 : 2
    }px;
`;

export const Title = styled.Text<titleTypeProps>`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.black};
    color: ${ ({theme, buttonType}) => (
        buttonType === 'correct' ? theme.colors.backGround : theme.colors.attention
    ) };
`;