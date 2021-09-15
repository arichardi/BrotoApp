import styled from 'styled-components/native'




export const Container = styled.View.attrs({
    elevation: 8
})`
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: 112px;
    margin-left: 12px;
    margin-right: 12px;
    height: 615px;
    border-radius: 16px;

`;
export const PhotoIconContainer = styled.View`
    position: absolute;
    top: -64px;
    left: 30%;

`;
export const PhotoIcon = styled.View``;

export const InfoContainer = styled.View`
    margin-top: 24px;
`;

export const SubTitle = styled.Text`
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0px 16px;
    color: ${ ({theme}) => theme.colors.green_light};
    font-family: ${ ({theme}) => theme.fonts.bold};
    font-size: 14px;
    align-self: center;

`;
export const OtherInfoContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const DateArive = styled.Text`
    padding: 0px 16px;
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.bold};
    font-size: 14px;

`;
export const SeparatorLine = styled.View`
    width: 40%;
    height: 2px;
    margin-top: 32px;
    margin-bottom: 24px;
    align-self: center;
    background-color: ${ ({theme}) => theme.colors.green_light};
`;

export const GoBackIcon = styled.TouchableOpacity`
    position: absolute;
    top: -50px
`;

export const PlantEnvContainer = styled.View`
    background-color: ${ ({theme}) => theme.colors.green_dark};
    height: 32px;
    width: 128px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

export const EnviromentText = styled.Text`
    margin-right: 8px;
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.bold};
    font-size: 14px;

`;
