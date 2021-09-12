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
import { dayOfWeek } from '../../utils/helpers'
import theme from '../../config/styles/theme'

interface Props{
    data: string;
    quarentine: boolean;
}

export function WateryCardOne({data, quarentine}: Props){
    return(
        <ContainerOne quarentine={quarentine}>
            <DataText quarentine={quarentine} >{ `A últma rega foi ${data}` }</DataText>
            { quarentine ? 
                <SuccessIcon color={theme.colors.green_dark}/>:
                <SuccessIcon />
            }
        </ContainerOne>
    )
}

export function WateryCardTwo({data, quarentine}: Props){
    return(
        <ContainerTwo quarentine={quarentine}>
             { quarentine ? 
                <SuccessIcon color={theme.colors.green_dark}/>:
                <SuccessIcon />
            }
            <DataContainer>
            <DataTextTwo quarentine={quarentine} > {dayOfWeek(data)} </DataTextTwo>
            <DataTextTwo quarentine={quarentine} > {data} </DataTextTwo>
            </DataContainer>
        </ContainerTwo>
    )
}

export function WateryCardThree({data, quarentine}: Props){
    return(
        <ContainerThree>
            { quarentine ? <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark} /> : <RegadoIcon />}
            <DataContainerThree>
            <DataTextThree quarentine={quarentine} >{dayOfWeek(data)}</DataTextThree>
            <DataTextThree quarentine={quarentine} >{data}</DataTextThree>
            </DataContainerThree>
        </ContainerThree>
    )
}