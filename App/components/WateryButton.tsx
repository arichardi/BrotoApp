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
}


export default function WateryButton({wateryList, id}: Props){

    const {handleAddDate} = useContext(PlantDataContext)
    const todayDate = new Date()
    const todayFormatted = brotoDateFormatter(todayDate, '2-digit')
    const [update, setUpdate] = useState('no')
    useEffect( () => (
        console.log('updated')
    ),[update])

    function handleUpdate(id: string){
        handleAddDate(id)
        setUpdate('updated')
    }

    return(
        <Container>
            {todayFormatted === wateryList[wateryList.length-1] ? 
                <RegadoIcon /> :
                <ActionButton onPress={ () => handleUpdate(id)}>
                    <RegarIcon />            
                </ActionButton>
            }
        </Container>
    )
}