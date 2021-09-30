import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

interface typeColors {
    type: 'Adubação' | 'Rega' | 'Quarentena'
}

interface typeSize {
    details: boolean
}

export const Container = styled.View<typeSize>`
    
    height: ${ ({details}) => details ? RFPercentage(50): RFPercentage(27) }px;
    width: 100%;
    background-color: ${ ({theme}) => theme.colors.backGround};
    border-radius: 12px;
    padding: 0px 20px;
`;

export const CTO = styled.Text`
    margin-top: 8px;
    margin-bottom: 32px;
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 14px;
    color: ${ ({theme}) => theme.colors.green_dark};
    align-self: center;
`;

export const ExtraInfoContainer = styled.View<typeColors>`
    height: ${RFPercentage(20)}px;
    width: 100%;
    margin-top: 12px;
    border-color: ${ ({theme, type}) => type === 'Rega' ? theme.colors.green_dark:
    type === 'Quarentena'? theme.colors.pink_dark : theme.colors.yellow_dark};
    border-width: 2px;
    border-radius: 12px;
`;

export const TextDetails = styled.Text<typeColors>`
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 14px;
    color: ${ ({theme, type}) => type === 'Rega' ? theme.colors.green_light:
    type === 'Quarentena'? theme.colors.attention : theme.colors.green_dark};
    position: absolute;
    top: -12px;
    left: 15px;
    `;

export const BoxHideDetails = styled.View`
    width: 70px;
    height: 25px;
    background-color: ${ ({theme}) => theme.colors.backGround};
    position: absolute;
    top: -15px;
    left: 10px;
`;

export const AreaText = styled.TextInput`
    padding: 8px;
    height: 100px;
    margin-top: 16px;
`;

export const ButtonContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;