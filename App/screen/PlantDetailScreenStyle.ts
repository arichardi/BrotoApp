import styled from 'styled-components/native'

export const Container = styled.View.attrs({
    elevation: 8
})`
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: 112px;
    margin-left: 16px;
    margin-right: 16px;
    height: 615px;
    border-radius: 16px;
    
`;
export const PhotoIconContainer = styled.View`
    position: absolute;
    top: -64px;
    left: 30%;

`;
export const PhotoIcon = styled.View``;