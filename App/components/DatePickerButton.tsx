import React from 'react'
import {
    Container,
    Title,
    Line,
    TextContainer,
    DataTitle,
} from './DatePickerButtonStyle'

interface Props {
    dateTitle: string
    onPress: () => void;
}

export default function DatePickerButton({onPress, dateTitle}: Props){
    return (
        <Container onPress={onPress}>
            <TextContainer>
            <Title>Data da Chegada</Title>
            <DataTitle>{dateTitle}</DataTitle>
            </TextContainer>
            <Line />
        </Container>
    )
}