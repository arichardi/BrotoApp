import React, {useState} from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import theme from '../config/styles/theme'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    BottomContainer,
} from './RegaTagComponentStyle'
import WateryListSecondaryColor from './WateryListSecondaryColor'

export default function RegaTagComponent({lastWatery, wateryList, wateryListCount, quarentine}){

    const [openCard, setOpenCard] = useState(false)

    function handleOpenCard(){
        setOpenCard(!openCard)
    }

    return(
        <Container openCard={openCard} countList={wateryListCount}>
            <TopContainer>
                <InfoContainer onPress={handleOpenCard}>
                    <Title>Regas</Title>
                    <Subtitle>{`Última Rega: ${lastWatery}`}</Subtitle>
                </InfoContainer>

                <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>

            </TopContainer>

            { openCard &&
            <BottomContainer>
                <WateryListSecondaryColor 
                    wateryList={wateryList}
                    wateryListCount={wateryListCount}
                    quarentine={quarentine}
                />
            </BottomContainer>
            }
        </Container>
    )
}