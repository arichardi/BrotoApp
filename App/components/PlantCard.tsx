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
DeleteFlag,
DeleteText,
} from './PlantCardStyles'

import { PlantDataContext } from '../Contexts/PlantData'
import BrotoIcon from "../Assets/BrotoIcon";
import WateryList from "./WateryList";
import { brotoDateFormatter } from "../utils/helpers";
import WateryButton from "./WateryButton";
import { PlantListDataProps } from "../Contexts/PlantData";
import theme from '../config/styles/theme'


interface PlantCardProps {
    id: string;
    functionDelete: () => void;
}


export default function PlantCard({id, functionDelete}:PlantCardProps){

    //varibles ------------------------------------------------------------------------

    const Navigation = useNavigation()
    const [openCard, setOpenCard] = useState(false)
    const {handleAddDate,changeDeleteMode, plantListData} = useContext(PlantDataContext)
    const [plantCardData, setPlantCardData] =  useState({} as PlantListDataProps)
    const [lastDate, setLastDate] = useState('')
    const [update, setUpdate] = useState('no')

    let arriveDateFormatted = brotoDateFormatter(plantCardData.arriveDate, '2-digit','ano')

    //functions ------------------------------------------------------------------------

    useEffect( () => {
        const cardData = plantListData.filter( item => item.id === id );
        const cardDataFNS = cardData[0];
        setPlantCardData(cardDataFNS);
        console.log(cardDataFNS)
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

    function handleDeleteMode(id: string){
        changeDeleteMode(id)
        functionDelete()
    }

    // RN -----------------------------------------------------------------

    return(
        <Container openCard={openCard} quarentine={plantCardData.quarentenaMode}>

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
                <Title quarentine={plantCardData.quarentenaMode} >{plantCardData.quarentenaMode? `${plantCardData.name} - Quarentena` : plantCardData.name}</Title>
                <Subtitle numberOfLines={1} quarentine={plantCardData.quarentenaMode} >{plantCardData.subtitle}</Subtitle>
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

            { openCard && 
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
            }
        </Container>
    )
}