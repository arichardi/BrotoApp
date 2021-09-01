import React, {useState} from "react";
import { useNavigation, NavigatorScreenParams } from '@react-navigation/native'
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
import WateryList from "./WateryList";
import { brotoDateFormatter, handleAddDate } from "../utils/helpers";
import WateryButton from "./WateryButton";

export interface PlantCardProps {
    id?: string;
    name: string;
    subtitle: string;
    photoPlant?: {
        localUri: string;
    };
    arriveDate: Date;
    wateryList: string[];
    wateryListCount: number;
}




export default function PlantCard({id, name, subtitle, photoPlant, arriveDate, wateryList, wateryListCount }:PlantCardProps){

    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)

    let arriveDateFormatted = brotoDateFormatter(arriveDate, '2-digit','ano')

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

            <WateryButton wateryList={wateryList} id={id}/>

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