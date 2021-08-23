import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import {
    Container,
    DateTitle,
} from './WateryCardStyle'

interface Props {
    date: string;
}

export default function WateryCard({date}: Props){
    return(
        <Container>
            <RegadoIcon />
            <DateTitle>{date}</DateTitle>
        </Container>
    )
}