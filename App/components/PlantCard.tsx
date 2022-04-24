import React, {useState, useEffect} from "react";
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
DeleteFlag,
DeleteText,
} from './PlantCardStyles'

import BrotoIcon from "../Assets/BrotoIcon";
import WateryList from "./WateryList";
import { brotoDateFormatter } from "../utils/helpers";
import WateryButton from "./WateryButton";
import theme from '../config/styles/theme'
import { PlantProps, WateryProps } from "../interfaces/interfaces";


interface PlantCardProps {
    id: string;
    name: string;
    subtitle: string;
    photo?: {
        localUri: string;
    };
    functionDelete: () => void;
}


export default function PlantCard({id, name, subtitle, photo, functionDelete}:PlantCardProps){

    //varibles ------------------------------------------------------------------------
    
    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)

    const [plantCardData, setPlantCardData] =  useState<PlantProps>({} as PlantProps)
    const [update, setUpdate] = useState('no')
    const [wateryList, setwateryList] = useState<WateryProps>({} as WateryProps)
    const [lastDate, setLastDate] = useState('')

    let arriveDateFormatted = brotoDateFormatter(plantCardData.arriveDate, '2-digit','ano')

    //functions ------------------------------------------------------------------------

    useEffect( () => { 


     },[update])

    function handleUpdateWateryIcon(id: string){
/*         handleAddDate(id)
        setUpdate('yes') */
    }

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    function handleDeleteMode(id: string){
/*         changeDeleteMode(id)
        functionDelete() */
    }

    // RN -----------------------------------------------------------------

    return(
        <Container 
            openCard={openCard}
            quarentine={plantCardData.quarentenaMode}
            wateryLength={plantCardData.wateryListCount}
        >

            <TopCardContainer>
  
            <PlantaContainer>
            { plantCardData.photoPlant ? 
            <PhotoPlant source={{uri: plantCardData.photoPlant.localUri}} /> :
            plantCardData.quarentenaMode ?
             <BrotoIcon colorPri={theme.colors.pink_dark} colorSec={theme.colors.whites} />:
             <BrotoIcon />
             }

            <PlantTag onPress={handleOpenCard} onLongPress={ () => handleDeleteMode(plantCardData.id)} delayLongPress={400}>
            <TouchableContainer>

                <Title quarentine={plantCardData.quarentenaMode} >
                    {plantCardData.quarentenaMode? `${name} - Quarentena` : name}
                </Title>
                <Subtitle numberOfLines={1} quarentine={plantCardData.quarentenaMode} >{subtitle}</Subtitle>
                
            </TouchableContainer>
            </PlantTag>

            </PlantaContainer>

            <WateryButton lastDate={lastDate} id={id} onPress={handleUpdateWateryIcon} quarentine={plantCardData.quarentenaMode}/>

            </TopCardContainer>
            
            {
                plantCardData.deleteMode === true ? (
                <DeleteFlag >
                    <DeleteText>Clique na lixeira para excluir</DeleteText>
                </DeleteFlag > ) : <></>
            }

{/*             { openCard && 
            <BottomCardContainer>
                <WateryList 
                    wateryList={plantCardData.wateryList}
                    wateryListCount={plantCardData.wateryListCount}
                    quarentine={plantCardData.quarentenaMode}
                 />
                <ExtraContainer>

                    <DateContainer>
                        <DataTitle quarentine={plantCardData.quarentenaMode}>Chegou dia:</DataTitle>
                        <DataArrive>{arriveDateFormatted}</DataArrive>
                    </DateContainer>

                    <DetailsButton 
                        quarentine={plantCardData.quarentenaMode} 
                        onPress={ () => Navigation.navigate('PlantDetail', {id}) }
                        >
                        <ButtonText quarentine={plantCardData.quarentenaMode} >Detalhes</ButtonText>
                    </DetailsButton>

                </ExtraContainer>
            </BottomCardContainer>
            } */}
        </Container>
    )
}