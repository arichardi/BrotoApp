import styled from 'styled-components/native'
import HomeIcon from '../Assets/HomeIcon';
import SunIcon from '../Assets/SunIcon'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import theme from '../config/styles/theme'

interface ButtonProps extends TouchableOpacityProps {
    isActive: boolean
}

export const Container = styled.View`
    height: 32px;
    border: 2px solid ${ ({theme}) => theme.colors.green_dark};
    border-radius: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px; 
    overflow: hidden;
`;
export const ButtonCase = styled(TouchableOpacity)<ButtonProps>`
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${ ({theme, isActive}) => (
        isActive ? theme.colors.green_dark : theme.colors.backGround
    )};
`;
export const TitleIn = styled.Text<ButtonProps>`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.black};
    margin-right: 4px;
    color: ${ ({theme, isActive}) => (
        isActive ? theme.colors.backGround : theme.colors.green_dark
    )};

`;
export const TitleOut = styled.Text<ButtonProps>`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.black};
    margin-right: 4px;
    color: ${ ({theme, isActive}) => (
        isActive ? theme.colors.backGround : theme.colors.green_dark
    )};
`;

export const HomeIconStyle = styled(HomeIcon)`
    
`;
export const SunIconStyle = styled(SunIcon)`

`;