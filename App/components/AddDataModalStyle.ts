import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    
    height: ${RFPercentage(50)}px;
    width: 100%;
    background-color: ${ ({theme}) => theme.colors.backGround};
    border-radius: 12px;
    align-items: center;
    padding: 0px 20px;
`;

export const CTO = styled.Text`
    margin-top: 8px;
    margin-bottom: 32px;
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 14px;
    color: ${ ({theme}) => theme.colors.green_dark};
`;

export const ExtraInfoContainer = styled.View`
    height: ${RFPercentage(20)}px;
    width: 100%;
    margin-top: 16px;
    border-color: ${ ({theme}) => theme.colors.green_dark};
    border-width: 2px;
    border-radius: 12px;
`;

export const TextDetails = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 14px;
    color: ${ ({theme}) => theme.colors.green_light};
    position: relative;
    top: -36px;
    left: 15px;
    `;

export const BoxHideDetails = styled.View`
    width: 70px;
    height: 25px;
    background-color: ${ ({theme}) => theme.colors.backGround};
    position: relative;
    top: -15px;
    left: 10px;
`;

export const AreaText = styled.TextInput`
    padding: 8px;
`;

export const ButtonContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;