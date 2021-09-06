import React from 'react'
import RegadoIcon from '../Assets/RegadoIcon'
import {
    Container,
    DateTitle,
} from './FertilizerCardStyle'
import theme from '../config/styles/theme'

interface Props {
    date: string;
}

export default function FertilizerCard({date}: Props){
    return(
        <Container>
            <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.yellow_dark}/>
            <DateTitle>{date}</DateTitle>
        </Container>
    )
}