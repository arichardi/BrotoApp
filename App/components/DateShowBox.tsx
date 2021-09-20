import React from 'react'
import {
    Container,
    WeekDay,
    DateText,
} from './DateShowBoxStyle'

interface Props {
    colorSystem: 'rega' | 'quarentena' | 'abudo';
}

export default function DateShowBox({colorSystem}: Props){
    return(
        <Container>
            <WeekDay category={colorSystem}></WeekDay>
            <DateText category={colorSystem}></DateText>
        </Container>
    )
}