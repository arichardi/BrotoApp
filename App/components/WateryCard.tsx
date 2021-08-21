import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import {
    Container,
    DateTitle,
} from './WateryCardStyle'

export default function WateryCard(){
    return(
        <Container>
            <RegadoIcon />
            <DateTitle>08/07</DateTitle>
        </Container>
    )
}