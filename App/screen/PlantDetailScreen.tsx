import React from 'react'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    SubTitle,
    OtherInfoContainer,
    DateArive,
    SeparatorLine,
    GoBackIcon,
} from './PlantDetailScreenStyle'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';

interface Props {
    title: string,
    subtitle: string,
    dateArrive: string
}

export default function PlantDetailScreen({route}){

    const props = route.params;

    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon editMode={false}/>
            </PhotoIconContainer>

            
        {/* Ios back navigation button
            <GoBackIcon >
                <BackIcon />
            </GoBackIcon> */}

            <InfoContainer>
            <NameDisplay>{props.title}</NameDisplay>
            <SubTitle>{props.subtitle}</SubTitle>
            <OtherInfoContainer>
                <DateArive>{`Chegou no dia: 08/07`}</DateArive>
            </OtherInfoContainer>
            </InfoContainer>
            
            <SeparatorLine />

            </Container>
        </BackgroundApp>
    )
}