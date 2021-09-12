import styled from 'styled-components/native'
import { View, ViewProps } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface UnderlineProps extends ViewProps {
    size: number
}

export const Container = styled.View`

`;

export const Cto = styled.View`
    margin-top: 40px;
    align-items: center;
    margin-bottom: ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};

`;

export const Underline = styled(View)<UnderlineProps>`
    height: 15px;
    width: ${ ({size}) => size > 6 ? 
    size * 23: size * 26 }px;
    border-radius: 15px;
    background-color: ${ ({ theme }) => theme.colors.pink_dark};
    position: relative;
    top: 42px;
`;

export const CtoDouble = styled.View`
    margin-top: 26px;

    margin-bottom: ${RFPercentage(0.3)}px;
    align-items: center;

`;

export const TitleDouble = styled.Text`
    font-size: 28px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};

`;

export const UnderlineDouble = styled(View)<UnderlineProps>`
    height: 15px;
    width: ${ ({size}) => size > 6 ? 
    size * 20 : size * 22 }px;
    border-radius: 15px;
    background-color: ${ ({ theme }) => theme.colors.pink_dark};
    position: relative;
    top: 42px;

`;

export const Firstword = styled.View`
    margin-bottom: -15px;
`;