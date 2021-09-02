import React, {useState, useContext, useEffect} from "react";
import { useNavigation } from '@react-navigation/native'
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

import { PlantDataContext } from '../Contexts/PlantData'
import BrotoIcon from "../Assets/BrotoIcon";
import WateryList from "./WateryList";
import { brotoDateFormatter } from "../utils/helpers";
import WateryButton from "./WateryButton";


export interface PlantListDataProps {
    id?: string;
    name: string;
    subtitle: string;
    arriveDate: Date;
    enviroment: 'in' | 'out';
    photoPlant?: {
        localUri: string
    };
    wateryList: string[];
    wateryListCount: number;
}

interface PlantCardProps {
    id: string
}


export default function PlantCard({id}:PlantCardProps){

    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)
    const {handleAddDate, plantListData} = useContext(PlantDataContext)
    const [plantCardData, setPlantCardData] =  useState({} as PlantListDataProps)
    const [lastDate, setLastDate] = useState('')
    const [update, setUpdate] = useState('no')

    let arriveDateFormatted = brotoDateFormatter(plantCardData.arriveDate, '2-digit','ano')

    useEffect( () => { 
        const cardData = plantListData.filter( item => item.id === id );
        const cardDataFNS = cardData[0];
        setPlantCardData(cardDataFNS);
        const lastDateFNS = cardDataFNS.wateryList[cardDataFNS.wateryList.length - 1]
        setLastDate(lastDateFNS)

     },[update])

    function handleUpdateWateryIcon(id: string){
        handleAddDate(id)
        setUpdate('yes')
    }

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    return(
        <Container openCard={openCard} >

            <TopCardContainer>
            <PlantaContainer>
            { plantCardData.photoPlant ? <PhotoPlant source={{uri: plantCardData.photoPlant.localUri}} /> : <BrotoIcon />}

            <PlantTag onPress={handleOpenCard}>
            <TouchableContainer>
                <Title>{plantCardData.name}</Title>
                <Subtitle numberOfLines={1} >{plantCardData.subtitle}</Subtitle>
            </TouchableContainer>
            </PlantTag>

            </PlantaContainer>

            <WateryButton lastDate={lastDate} id={id} onPress={handleUpdateWateryIcon}/>

            </TopCardContainer>

            { openCard && 
            <BottomCardContainer>
                <WateryList wateryList={plantCardData.wateryList} wateryListCount={plantCardData.wateryListCount}/>
                <ExtraContainer>

                    <DateContainer>
                        <DataTitle>Chegou dia:</DataTitle>
                        <DataArrive>{arriveDateFormatted}</DataArrive>
                    </DateContainer>

                    <DetailsButton onPress={ () => Navigation.navigate('PlantDetail', {id}) }>
                        <ButtonText>Detalhes</ButtonText>
                    </DetailsButton>

                </ExtraContainer>
            </BottomCardContainer>
            }
        </Container>
    )
}