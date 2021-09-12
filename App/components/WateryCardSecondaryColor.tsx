import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import {
    Container,
    DateTitle,
} from './WateryCardStyle'
import theme from '../config/styles/theme'

interface Props {
    date: string;
    quarentine: boolean
}

export default function WateryCard({date, quarentine}: Props){
    return(
        <Container>
            { quarentine ? <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark} /> : <RegadoIcon />}
            <DateTitle quarentine={quarentine} >{date}</DateTitle>
        </Container>
    )
}