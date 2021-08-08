import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'

interface UnderlineProps extends ViewProps {
    size: number
}

export const Container = styled.View`

`;

export const Cto = styled.View`
    margin-top: 40px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};

`;

export const Underline = styled(View)<UnderlineProps>`
    height: 15px;
    width: ${ ({size}) => size * 26 }px;
    border-radius: 15px;
    background-color: ${ ({ theme }) => theme.colors.pink_dark};
    position: relative;
    top: 42px;
`;