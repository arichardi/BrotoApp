import React from 'react'
import WateryCard from './WateryCard'
import {
    Container,
} from './WateryListStyle'

export default function WateryList(){
    return(
        <Container>
            <WateryCard />
            <WateryCard />
            <WateryCard />
            <WateryCard />
            <WateryCard />
        </Container>
    )
}