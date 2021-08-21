import React, {useState} from "react";

import {
Container,
PlantaContainer,
PlantTag,
Title,
Subtitle,
TouchableContainer,
TopCardContainer,
BottomCardContainer,
ExtraContainer,
DateContainer,
DataTitle,
DataArrive,
DetailsButton,
ButtonText,

} from './PlantCardStyles'

import BrotoIcon from "../Assets/BrotoIcon";
import RegarIcon from '../Assets/RegarIcon'
import WateryList from "./WateryList";

export interface PlantCardProps {
    id: string;
    title: string;
    subtitle: string;
}


export default function PlantCard({title, subtitle }:PlantCardProps){

    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    return(
        <Container openCard={openCard} >

            <TopCardContainer>
            <PlantaContainer>
            <BrotoIcon />

            <PlantTag onPress={handleOpenCard}>
            <TouchableContainer>
                <Title>{title}</Title>
                <Subtitle numberOfLines={1} >{subtitle}</Subtitle>
            </TouchableContainer>
            </PlantTag>

            </PlantaContainer>

            <RegarIcon />

            </TopCardContainer>

            { openCard && 
            <BottomCardContainer>
                <WateryList />
                <ExtraContainer>

                    <DateContainer>
                        <DataTitle>Chegou dia:</DataTitle>
                        <DataArrive>08/10/2018</DataArrive>
                    </DateContainer>

                    <DetailsButton>
                        <ButtonText>Detalhes</ButtonText>
                    </DetailsButton>

                </ExtraContainer>
            </BottomCardContainer>
            }
        </Container>
    )
}