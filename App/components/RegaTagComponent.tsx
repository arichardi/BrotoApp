import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import theme from '../config/styles/theme'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
} from './RegaTagComponentStyle'

export default function RegaTagComponent(){
    return(
        <Container>
            <TopContainer>
                <InfoContainer>
                    <Title>Regas</Title>
                    <Subtitle>Última Rega: 08/07</Subtitle>
                </InfoContainer>

                <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>

            </TopContainer>

            <BottomContainer>

            </BottomContainer>
        </Container>
    )
}