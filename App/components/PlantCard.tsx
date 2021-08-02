import React from "react";

import {
Container,
PlantaContainer,
PlantTag,
Title,
Subtitle,
} from './PlantCardStyles'

import BrotoIcon from "../Assets/BrotoIcon";
import RegarIcon from '../Assets/RegarIcon'

interface PlantCardProps {
    title: string;
    subtitle: string;
}

export default function PlantCard({title, subtitle }:PlantCardProps){
    return(
        <Container>
            <PlantaContainer>
            <BrotoIcon />
            <PlantTag>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </PlantTag>
            </PlantaContainer>
            <RegarIcon />
        </Container>
    )
}