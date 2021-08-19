import React from 'react'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    SubTitle,
    OtherInfoContainer,
    DateArive,
    SeparatorLine,
} from './PlantDetailScreenStyle'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'

interface Props {
    title: string,
    subtitle: string,
    dateArrive: string
}

export default function PlantDetailScreen({title, subtitle, dateArrive}: Props){
    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon editMode={false}/>
            </PhotoIconContainer>

            <InfoContainer>
            <NameDisplay>{title}</NameDisplay>
            <SubTitle>{subtitle}</SubTitle>
            <OtherInfoContainer>
                <DateArive>{`Chegou no dia: ${dateArrive}`}</DateArive>
            </OtherInfoContainer>
            </InfoContainer>
            
            <SeparatorLine />

            </Container>
        </BackgroundApp>
    )
}