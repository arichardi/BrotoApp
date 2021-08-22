import React, {useState} from "react";
import { useNavigation, NavigationProp } from '@react-navigation/native'
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
PhotoPlant,

} from './PlantCardStyles'

import BrotoIcon from "../Assets/BrotoIcon";
import RegarIcon from '../Assets/RegarIcon'
import WateryList from "./WateryList";

export interface PlantCardProps {
    id: string;
    title: string;
    subtitle: string;
    photoPlant?: string;
    dateFormatted: string;
}


export default function PlantCard({title, subtitle, photoPlant, dateFormatted }:PlantCardProps){

    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    return(
        <Container openCard={openCard} >

            <TopCardContainer>
            <PlantaContainer>
            { photoPlant ? <PhotoPlant source={{uri: photoPlant.localUri}} /> : <BrotoIcon />}

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

                    <DetailsButton onPress={ () => Navigation.navigate('PlantDetail', {title, subtitle, photoPlant, dateFormatted}) }>
                        <ButtonText>Detalhes</ButtonText>
                    </DetailsButton>

                </ExtraContainer>
            </BottomCardContainer>
            }
        </Container>
    )
}