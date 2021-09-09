import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { View } from 'react-native'

export const Container = styled(View).attrs({
    elevation: 8
})`
    
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: ${RFPercentage(17.8)}px;
    margin-left: 16px;
    margin-right: 16px;
    height: ${RFPercentage(93)}px;
    border-radius: 16px;
`;

export const InputContainer = styled.View`

    padding: 16px
`;

export const Where = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${ ({theme}) => theme.fonts.bold};
    color: ${ ({theme}) => theme.colors.green_light};
`;

export const NomeContainer = styled.View`
    margin-top: ${RFPercentage(5)}px;
    margin-bottom: ${RFPercentage(4)}px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${RFPercentage(18)}px;
`;

export const AmbientContainer = styled.View`
    padding: 0px 16px;
    align-items: center;
`;

export const PhotoIconContainer = styled.View`
    position: absolute;
    top: -64px;
    left: 30%;
`;