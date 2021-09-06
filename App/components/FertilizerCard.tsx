import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import {
    Container,
    DateTitle,
} from './FertilizerCardStyle'

interface Props {
    date: string;
}

export default function FertilizerCard({date}: Props){
    return(
        <Container>
            <RegadoIcon />
            <DateTitle>{date}</DateTitle>
        </Container>
    )
}