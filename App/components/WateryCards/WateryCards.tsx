import React from 'react'
import SuccessIcon from '../../Assets/SuccessIcon'
import {
    ContainerOne,
    DataText,
    ContainerTwo,
    ContainerThree,
    DataTextThree,
} from './WateryCardsStyle'

interface Props{
    data: string;
}

export function WateryCardOne({data}: Props){
    return(
        <ContainerOne>
            <DataText>{ `A últma reg foi ${data}` }</DataText>
            <SuccessIcon />
        </ContainerOne>
    )
}

export function WateryCardTwo({data}: Props){
    return(
        <ContainerTwo>
            <SuccessIcon />
            <DataText>{data}</DataText>
        </ContainerTwo>
    )
}

export function WateryCardThree({data}: Props){
    return(
        <ContainerThree>
            <RegadoIcon />
            <DataTextThree>{data}</DataTextThree>
        </ContainerThree>
    )
}