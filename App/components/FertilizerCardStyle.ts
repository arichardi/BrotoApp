import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
`;

export const DateTitle = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    margin-top: 4px;
    font-family: ${ ({theme}) => theme.fonts.bold};
    font-size: 14px;
`;