import styled from 'styled-components/native'

interface DetailsTheme {
    category: 'rega' | 'quarentena' | 'abudo'
}

export const Container = styled.View``;
export const WeekDay = styled.Text<DetailsTheme>``;
export const DateText = styled.Text<DetailsTheme>``;