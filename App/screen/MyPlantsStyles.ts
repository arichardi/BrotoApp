import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};
`;

export const Underline = styled.View``;