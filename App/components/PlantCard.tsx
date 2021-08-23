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
    id?: string;
    name: string;
    subtitle: string;
    photoPlant?: {
        localUri: string;
    };
    arriveDateFormatted: string;
    wateryList: [];
    wateryListCount: number;
}


export default function PlantCard({name, subtitle, photoPlant, arriveDateFormatted, wateryList, wateryListCount }:PlantCardProps){

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
                <Title>{name}</Title>
                <Subtitle numberOfLines={1} >{subtitle}</Subtitle>
            </TouchableContainer>
            </PlantTag>

            </PlantaContainer>

            <RegarIcon />

            </TopCardContainer>

            { openCard && 
            <BottomCardContainer>
                <WateryList wateryList={wateryList} wateryListCount={wateryListCount}/>
                <ExtraContainer>

                    <DateContainer>
                        <DataTitle>Chegou dia:</DataTitle>
                        <DataArrive>{arriveDateFormatted}</DataArrive>
                    </DateContainer>

                    <DetailsButton onPress={ () => Navigation.navigate('PlantDetail', {name, subtitle, photoPlant, arriveDateFormatted}) }>
                        <ButtonText>Detalhes</ButtonText>
                    </DetailsButton>

                </ExtraContainer>
            </BottomCardContainer>
            }
        </Container>
    )
}