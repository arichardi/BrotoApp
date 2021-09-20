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

export const GoBackIcon = styled.TouchableOpacity`
    position: absolute;
    top: -50px
`;
