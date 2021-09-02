import React from 'react'
import {
    Container,
    ActionButton,
} from './WateryButtonStyle'

import RegarIcon from '../Assets/RegarIcon'
import RegadoIcon from '../Assets/RegadoIcon'
import { brotoDateFormatter } from '../utils/helpers'

interface Props {
    lastDate: string;
    id: string;
    onPress: (id: string) => void;
}


export default function WateryButton({lastDate, id, onPress}: Props){


    const todayDate = new Date()
    const todayFormatted = brotoDateFormatter(todayDate, '2-digit')


    return(
        <Container>
            {todayFormatted === lastDate ? 
                <RegadoIcon /> :
                <ActionButton onPress={ () => onPress(id)}>
                    <RegarIcon />            
                </ActionButton>
            }
        </Container>
    )
}