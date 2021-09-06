import React, {useState} from 'react'
import AduboIcon from '../Assets/AduboIcon'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
} from './AduboTagComponentStyle'
import FertilizerList from '../components/FertilizerList'

interface Props {
    fertilizerList: string[];
    fertilizerCount: number;
}

export default function AduboTagComponent({fertilizerList, fertilizerCount}: Props){

    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    return(
        <Container openCard={openCard} countList={fertilizerCount}>
            <TopContainer>
                <InfoContainer onPress={handleOpenCard}>
                    <Title>Adubação</Title>
                    <Subtitle>{fertilizerCount === 0 ? `Nunca foi adubado` : `quarta 08/07`}</Subtitle>
                </InfoContainer>

                <AduboIcon />

            </TopContainer>

            { openCard && 
            <BottomContainer>
                <FertilizerList fertilizerCount={fertilizerCount} fertilizerList={fertilizerList}/>
            </BottomContainer>
            }
        </Container>
    )
}