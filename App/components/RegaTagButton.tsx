import React from 'react'
import {
    Container,
    InfoContainer,
    Title,
    Subtitle,
} from './RegaTagButtonstyle'
import theme from '../config/styles/theme'
import RegadoIcon from '../Assets/RegadoIcon'

export default function RegaTagButton(){
    return(
        <Container>

            <InfoContainer>
                <Title>Regas</Title>
                <Subtitle>{`Última Rega foi dia xx/xx`}</Subtitle>
            </InfoContainer>

            <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>

        </Container>
    )
}