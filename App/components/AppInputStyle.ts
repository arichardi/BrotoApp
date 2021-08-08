import styled from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native';
import theme from '../config/styles/theme';

export const Input = styled(TextInput).attrs<TextInputProps>({
    placeholderTextColor: theme.colors.green_light
})`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.bold};
    color: ${ ({theme}) => theme.colors.green_dark};
    
`;

export const Container = styled.View`
    margin-bottom: 32px;
`;
export const Line = styled.View`

    height: 2px;
    background-color: ${ ({theme}) => theme.colors.green_dark};
`;