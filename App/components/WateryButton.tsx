import React, {useContext, useState, useEffect} from 'react'
import {
    Container,
    ActionButton,
} from './WateryButtonStyle'

import RegarIcon from '../Assets/RegarIcon'
import RegadoIcon from '../Assets/RegadoIcon'
import { brotoDateFormatter } from '../utils/helpers'
import {PlantDataContext} from '../Contexts/PlantData'

interface Props {
    wateryList: string[];
    id: string;
    onPress: (id: string) => void;
}


export default function WateryButton({wateryList, id, onPress}: Props){

    const {handleAddDate} = useContext(PlantDataContext)
    const todayDate = new Date()
    const todayFormatted = brotoDateFormatter(todayDate, '2-digit')


    return(
        <Container>
            {todayFormatted === wateryList[wateryList.length-1] ? 
                <RegadoIcon /> :
                <ActionButton onPress={ () => onPress(id)}>
                    <RegarIcon />            
                </ActionButton>
            }
        </Container>
    )
}