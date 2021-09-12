import styled from 'styled-components/native'

interface Quarentine {
    quarentine: boolean
}

export const Container = styled.View`
    align-items: center;
`;

export const DateTitle = styled.Text<Quarentine>`
    color: ${ ({theme, quarentine}) => quarentine ? theme.colors.backGround : theme.colors.pink_dark};
    margin-top: 4px;
    font-family: ${ ({theme}) => theme.fonts.bold};
    font-size: 14px;
`;