import React from 'react'
import SuccessIcon from '../../Assets/SuccessIcon'
import {
    ContainerOne,
    DataText,
    ContainerTwo,
    ContainerThree,
    DataTextTwo,
    DataContainer,
    DataTextThree,
    DataContainerThree,
} from './WateryCardsSecondaryColorStyle'
import RegadoIcon from '../../Assets/RegadoIcon'
import { dayOfWeek } from '../../utils/helpers'
import theme from '../../config/styles/theme'

interface Props{
    data: string;
    quarentine: boolean;
}

export function WateryCardOne({data}: Props){
    return(
        <ContainerOne>
            <DataText>{ `A últma rega foi ${data}` }</DataText>
            <SuccessIcon color={theme.colors.green_dark}/>
        </ContainerOne>
    )
}

export function WateryCardTwo({data}: Props){
    return(
        <ContainerTwo>
            <SuccessIcon color={theme.colors.green_dark}/>
            <DataContainer>
            <DataTextTwo> {dayOfWeek(data)} </DataTextTwo>
            <DataTextTwo > {data} </DataTextTwo>
            </DataContainer>
        </ContainerTwo>
    )
}

export function WateryCardThree({data}: Props){
    return(
        <ContainerThree>
            <RegadoIcon />
            <DataContainerThree>
            <DataTextThree >{dayOfWeek(data)}</DataTextThree>
            <DataTextThree >{data}</DataTextThree>
            </DataContainerThree>
        </ContainerThree>
    )
}