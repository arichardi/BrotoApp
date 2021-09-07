import React, {useState} from 'react'
import AduboIcon from '../Assets/AduboIcon'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
    IconContainer,
} from './AduboTagComponentStyle'
import FertilizerList from '../components/FertilizerList'
import { brotoDateFormatter } from '../utils/helpers'

interface Props {
    fertilizerList: string[];
    fertilizerCount: number;
    lastDate: string;
    onPress: () => void
}

export default function AduboTagComponent({fertilizerList, fertilizerCount, lastDate, onPress}: Props){

    const todayFormatted = brotoDateFormatter(new Date(), '2-digit')
    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        fertilizerCount !== 0 ? setOpenCard(!openCard) : {}
    }

    return(
        <Container openCard={openCard} countList={fertilizerCount}>
            <TopContainer>
                <InfoContainer onPress={handleOpenCard}>
                    <Title>Adubação</Title>
                    <Subtitle>{fertilizerCount === 0 ? `Nunca foi adubado` : `Ultima adubação foi ${lastDate}`}</Subtitle>
                </InfoContainer>

                <IconContainer onPress={ todayFormatted === lastDate ? () => {} : () => onPress()}>
                    <AduboIcon />
                </IconContainer>

            </TopContainer>

            { openCard && 
            <BottomContainer>
                <FertilizerList fertilizerCount={fertilizerCount} fertilizerList={fertilizerList}/>
            </BottomContainer>
            }
        </Container>
    )
}