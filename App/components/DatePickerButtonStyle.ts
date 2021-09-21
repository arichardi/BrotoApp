import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.backGround};
    height: 40px;
    border-radius: 20px;
    width: 100%;

`;

export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.green_light};
    font-family: ${ ({theme}) => theme.fonts.bold};
    margin-bottom: 8px;
`;

export const Line = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${ ({theme}) => theme.colors.green_dark};
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const DataTitle = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 15px;
    `;
    