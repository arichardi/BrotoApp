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
        buttonType === 'correct' ? 0 : 3
    }px;
    border-color: ${ ({theme, buttonType}) => (
        buttonType === 'cancel' ? theme.colors.attention : theme.colors.backGround)};
        height: 44px;
        width: 140px;
        border-radius: 22px;
        justify-content: center;
        align-items: center;
`;

export const Title = styled.Text<titleTypeProps>`
    font-size: ${ ({buttonType}) => 
        buttonType === 'correct' ? 14 : 15
    }px;
    font-family: ${ ({theme}) => theme.fonts.black};
    color: ${ ({theme, buttonType}) => (
        buttonType === 'correct' ? theme.colors.backGround : theme.colors.attention
    ) };
`;