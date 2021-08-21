import React, {useState} from "react";

import {
Container,
PlantaContainer,
PlantTag,
Title,
Subtitle,
TouchableContainer,
TopCardContainer,
BottomCardContainer
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
            </BottomCardContainer>
            }
        </Container>
    )
}