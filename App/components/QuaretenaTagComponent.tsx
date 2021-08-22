import React from 'react'
import BugIcon from '../Assets/BugIcon'
import theme from '../config/styles/theme'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
} from './QuarentenaTagComponentStyle'

export default function QuarentenaTagComponent(){
    return(
        <Container>
            <TopContainer>
                <InfoContainer>
                    <Title>Quarentena</Title>
                    <Subtitle>Nunca ficou em quarentena</Subtitle>
                </InfoContainer>

                <BugIcon />

            </TopContainer>

            <BottomContainer>

            </BottomContainer>
        </Container>
    )
}