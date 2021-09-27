import React from 'react'
import EditDetail from '../Assets/EditDetail'
import {
    Container,
    Text,
    DayContainer,
    DayText,
    ButtonEdit,
    DayContainerPack,
    Separator,
    TextContainer,
    TextEnfasis,
} from './WateryDetailCardStyle'
import theme from '../config/styles/theme'
import { dayOfWeek } from '../utils/helpers'

export default function WateryDetailCard({title}){
    return(
        <Container>
            <DayContainerPack>
                <DayContainer>
                    <DayText>{dayOfWeek(title)}</DayText>
                    <DayText>{title}</DayText>
                </DayContainer>
                <Separator />
            </DayContainerPack>

            <TextContainer>
                <Text>A rega anterior foi há</Text>
                <TextEnfasis>{`2`}</TextEnfasis>
                <Text>dias</Text>
            </TextContainer>

            <ButtonEdit>
                <EditDetail color={theme.colors.green_dark}/>
            </ButtonEdit>
        </Container>
    )
}