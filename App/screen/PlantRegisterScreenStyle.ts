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
    height: ${ RFPercentage(29)}px;
    width: ${ RFPercentage(45)}px;
    border-radius: 16px;
    align-items: center;

`;
export const PhotoModalText = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFPercentage(2)}px;
    margin-bottom: ${RFPercentage(4)}px;
`;

export const TextGaleryPhotoModal = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFPercentage(1)}px;

`;
export const ContainerGaleryFotoModal = styled.View`
    align-items: center;
    margin-right: ${RFPercentage(10)}px;
`;

export const ContainerOptions = styled.View`
    flex-direction: row;
`;

export const ContainerCamFotoModal = styled.View`
    align-items: center;
`;

export const TextCamPhotoModal = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: ${RFValue(16)}px;
    margin-top: ${RFPercentage(1)}px;
`;
export const GaleryButton = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.green_light};
    height: 72px;
    width: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
`;
export const PhotoButton = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.green_light};
    height: 72px;
    width: 72px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
`;

export const CalendarModal = styled(Modal)`

`;
export const ButtonCalendarContainer = styled.View`
    flex-direction: row;
`;

export const CalendarModalContainer = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    height: ${ RFPercentage(70)}px;
    width: ${ RFPercentage(49)}px;
    border-radius: 16px;
    align-items: center;

`;

export const CalendarText = styled.Text`
    margin-top: 16px;
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: ${RFValue(16)}px;
`;