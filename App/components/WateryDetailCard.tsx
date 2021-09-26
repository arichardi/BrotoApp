import React from 'react'
import {
    Container,
    Text,
} from './WateryDetailCardStyle'

export default function WateryDetailCard({title}){
    return(
        <Container>
            <Text>{`A data é ${title}`}</Text>
        </Container>
    )
}