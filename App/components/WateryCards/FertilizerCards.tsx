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
} from './FertilizerCardsStyle'
import RegadoIcon from '../../Assets/RegadoIcon'
import { dayOfWeek } from '../../utils/helpers'
import theme from '../../config/styles/theme'

interface Props{
    data: string;
}

export function FertilizerCardOne({data}: Props){
    return(
        <ContainerOne>
            <DataText>{ `A últma adubação foi ${data}` }</DataText>
            <SuccessIcon color={theme.colors.yellow_dark}/>
        </ContainerOne>
    )
}

export function FertilizerCardTwo({data}: Props){
    return(
        <ContainerTwo>
            <SuccessIcon color={theme.colors.yellow_dark}/>
            <DataContainer>
            <DataTextTwo>{dayOfWeek(data)}</DataTextTwo>
            <DataTextTwo>{data}</DataTextTwo>
            </DataContainer>
        </ContainerTwo>
    )
}

export function FertilizerCardThree({data}: Props){
    return(
        <ContainerThree>
            <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.yellow_dark} />
            <DataContainerThree>
            <DataTextThree>{dayOfWeek(data)}</DataTextThree>
            <DataTextThree>{data}</DataTextThree>
            </DataContainerThree>
        </ContainerThree>
    )
}