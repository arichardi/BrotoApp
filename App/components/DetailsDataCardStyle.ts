import styled from 'styled-components/native'

interface DetailsTheme {
    category: 'rega' | 'quarentena' | 'abudo'
}

export const Container = styled.View`
`;

export const DetailsText = styled.Text<DetailsTheme>``;
export const SeparatorLine = styled.View<DetailsTheme>``;