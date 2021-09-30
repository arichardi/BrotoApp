import React from 'react'
import EditDetail from '../Assets/EditDetail'
import {
    Container,
    Text,
    DayContainer,
    DayText,
    ButtonEdit,
    DayContainerPack,
    Separator,
    TextContainer,
    TextEnfasis,
} from './WateryDetailCardStyle'
import theme from '../config/styles/theme'
import { dayOfWeek, dayInterval } from '../utils/helpers'

interface Props {
    title: string;
    category: 'rega' | 'quarentena' | 'abudo';
    index: number;
    wateryList: string[];
}

export default function WateryDetailCard({title, category, index, wateryList}: Props){



    return(
        <Container>
            <DayContainerPack>
                <DayContainer>
                    <DayText>{dayOfWeek(title)}</DayText>
                    <DayText>{title}</DayText>
                </DayContainer>
                <Separator category={category}/>
            </DayContainerPack>

            <TextContainer>
                { typeof(dayInterval( wateryList, index)) === 'number'?
                    (<>
                    <Text>A rega anterior foi há</Text>
                    <TextEnfasis>{dayInterval( wateryList, index)}</TextEnfasis>
                    <Text>dias</Text>
                    </>) :
                    (<Text>{dayInterval( wateryList, index)}</Text>)
            }

            </TextContainer>

            <ButtonEdit>
                <EditDetail color={theme.colors.green_dark}/>
            </ButtonEdit>
        </Container>
    )
}