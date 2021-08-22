import React from 'react'
import AduboIcon from '../Assets/AduboIcon'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
} from './AduboTagComponentStyle'

export default function AduboTagComponent(){
    return(
        <Container>
            <TopContainer>
                <InfoContainer>
                    <Title>Quarentena</Title>
                    <Subtitle>Nunca foi adubado</Subtitle>
                </InfoContainer>

                <AduboIcon />

            </TopContainer>

            <BottomContainer>

            </BottomContainer>
        </Container>
    )
}