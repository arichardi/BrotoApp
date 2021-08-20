import React from 'react'
import {
    Container,
    Title,
    Line,
    TextContainer,
    DataTitle,
} from './DatePickerButtonStyle'

export default function DatePickerButton(){
    return (
        <Container>
            <TextContainer>
            <Title>Data da Chegada</Title>
            <DataTitle>08/07</DataTitle>
            </TextContainer>
            <Line />
        </Container>
    )
}