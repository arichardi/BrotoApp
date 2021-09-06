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

interface Props {
    fertilizerList: string[];
    fertilizerCount: number;
    onPress: () => void
}

export default function AduboTagComponent({fertilizerList, fertilizerCount, onPress}: Props){

    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        fertilizerCount !== 0 ? setOpenCard(!openCard) : {}
    }

    return(
        <Container openCard={openCard} countList={fertilizerCount}>
            <TopContainer>
                <InfoContainer onPress={handleOpenCard}>
                    <Title>Adubação</Title>
                    <Subtitle>{fertilizerCount === 0 ? `Nunca foi adubado` : `Ultima adubação foi 08/07`}</Subtitle>
                </InfoContainer>

                <IconContainer onPress={ () => onPress()}>
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