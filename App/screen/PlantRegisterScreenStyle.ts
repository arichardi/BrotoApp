import styled from 'styled-components/native'
import { View } from 'react-native'

export const Container = styled(View).attrs({
    elevation: 8
})`
    
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: 112px;
    margin-left: 16px;
    margin-right: 16px;
    height: 615px;
    border-radius: 16px;
`;

export const InputContainer = styled.View`
    padding: 16px
`;

export const Where = styled.Text`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.bold};
    color: ${ ({theme}) => theme.colors.green_light};
`;

export const NomeContainer = styled.View`
    margin-top: 32px;
    margin-bottom: 24px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 120px;
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