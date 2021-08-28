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
ActionIcon,

} from './PlantCardStyles'

import BrotoIcon from "../Assets/BrotoIcon";
import RegarIcon from '../Assets/RegarIcon'
import RegadoIcon from '../Assets/RegadoIcon'
import WateryList from "./WateryList";
import { brotoDateFormatter, handleAddDate } from "../utils/helpers";

export interface PlantCardProps {
    id?: string;
    name: string;
    subtitle: string;
    photoPlant?: {
        localUri: string;
    };
    arriveDate: Date;
    wateryList: [];
    wateryListCount: number;
}


export default function PlantCard({name, subtitle, photoPlant, arriveDate, wateryList, wateryListCount }:PlantCardProps){

    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)
    
    const todayDate = new Date()
    const todayFormatted = brotoDateFormatter(todayDate, '2-digit')

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

            <ActionIcon onPress={ () => {}}>
                {todayFormatted === wateryList[wateryList.length-1] ? 
                <RegadoIcon /> :
                <RegarIcon />
            
            }
            </ActionIcon>

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