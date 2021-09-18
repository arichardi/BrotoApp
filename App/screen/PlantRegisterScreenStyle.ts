import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { View } from 'react-native'
import Modal from 'react-native-modal'


export const Container = styled(View).attrs({
    elevation: 8
})`
    
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: ${RFPercentage(17.8)}px;
    margin-left: 16px;
    margin-right: 16px;
    height: ${RFPercentage(90)}px;
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
    margin-bottom: ${RFPercentage(2)}px;
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

export const PhotoModal = styled(Modal)`
align-items: center;
justify-content: center;
`;

export const ContainerPhotoModal = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    height: ${ RFPercentage(30)}px;
    width: ${ RFPercentage(45)}px;
    border-radius: 16px;

`;
export const PhotoModalText = styled.Text``;
export const TextGaleryPhotoModal = styled.View``;
export const ContainerGaleryFotoModal = styled.View``;
export const ContainerCamFotoModal = styled.View``;
export const TextCamPhotoModal = styled.Text``;
export const GaleryButton = styled.TouchableOpacity``;
export const PhotoButton = styled.TouchableOpacity``;