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
    title: string
}

export default function DatePickerButton({onPress, dateTitle, type = 'Rega', title}: Props){
    return (
        <Container onPress={onPress}>
            <TextContainer>
            <Title type={type}>{title}</Title>
            <DataTitle type={type} >{dateTitle}</DataTitle>
            </TextContainer>
            <Line type={type} />
        </Container>
    )
}