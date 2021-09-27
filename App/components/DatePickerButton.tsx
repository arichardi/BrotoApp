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
    type?: 'Adubação' | 'Rega' | 'Quarentena';
}

export default function DatePickerButton({onPress, dateTitle, type = 'Rega'}: Props){
    return (
        <Container onPress={onPress}>
            <TextContainer>
            <Title type={type}>Data da Chegada</Title>
            <DataTitle type={type} >{dateTitle}</DataTitle>
            </TextContainer>
            <Line type={type} />
        </Container>
    )
}