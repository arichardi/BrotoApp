import styled from "styled-components/native";

interface type {
    type: 'Adubação' | 'Rega' | 'Quarentena';
}

export const Container = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.backGround};
    height: 40px;
    border-radius: 20px;
    width: 100%;

`;

export const Title = styled.Text<type>`
    color: ${ ({theme, type}) => type === 'Rega' ? theme.colors.green_light:
    type === 'Quarentena'? theme.colors.attention : theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.bold};
    margin-bottom: 8px;
`;

export const Line = styled.View<type>`
    width: 100%;
    height: 2px;
    background-color: ${ ({theme, type}) => type === 'Rega' ? theme.colors.green_dark:
    type === 'Quarentena'? theme.colors.pink_dark : theme.colors.yellow_dark};
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const DataTitle = styled.Text<type>`
    color: ${ ({theme, type}) => type === 'Rega' ? theme.colors.pink_dark:
    type === 'Quarentena'? theme.colors.attention : theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 15px;
    `;
    