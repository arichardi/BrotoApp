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
} from './WateryCardsStyle'
import RegadoIcon from '../../Assets/RegadoIcon'

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
            <DataContainer>
            <DataTextTwo>Qua</DataTextTwo>
            <DataTextTwo>08/07</DataTextTwo>
            </DataContainer>
        </ContainerTwo>
    )
}

export function WateryCardThree({data}: Props){
    return(
        <ContainerThree>
            <RegadoIcon />
            <DataContainerThree>
            <DataTextThree>Qua</DataTextThree>
            <DataTextThree>{data}</DataTextThree>
            </DataContainerThree>
        </ContainerThree>
    )
}