import React from 'react'
import {
    Container,
    ActionButton,
} from './WateryButtonStyle'

import RegarIcon from '../Assets/RegarIcon'
import RegadoIcon from '../Assets/RegadoIcon'
import { brotoDateFormatter } from '../utils/helpers'
import theme from '../config/styles/theme'

interface Props {
    lastDate: string;
    id: string;
    quarentine: boolean;
    onPress: (id: string) => void;
}


export default function WateryButton({lastDate, id, quarentine, onPress}: Props){


    const todayDate = new Date()
    const todayFormatted = brotoDateFormatter(todayDate, '2-digit', 'ano')


    return(
        <Container>
            {todayFormatted === lastDate ? 
                ( quarentine ? <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}  /> : <RegadoIcon /> ) :
                (<ActionButton onPress={ () => onPress(id)}>
                    { quarentine ? <RegarIcon colorPri={theme.colors.backGround} colorSec={theme.colors.pink_dark} /> : <RegarIcon /> }            
                </ActionButton>)
            }
        </Container>
    )
}