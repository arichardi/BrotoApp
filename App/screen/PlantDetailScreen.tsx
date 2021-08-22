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
import RegaTagComponent from '../components/RegaTagComponent'
import QuarentenaTagComponent from '../components/QuaretenaTagComponent'
import AduboTagComponent from '../components/AduboTagComponent'

export default function PlantDetailScreen({route}){

    const props = route.params;

    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon editMode={false} photoPlant={props.photoPlant}/>
            </PhotoIconContainer>

            
        {/* Ios back navigation button
            <GoBackIcon >
                <BackIcon />
            </GoBackIcon> */}

            <InfoContainer>
            <NameDisplay>{props.title}</NameDisplay>
            <SubTitle>{props.subtitle}</SubTitle>
            <OtherInfoContainer>
                <DateArive>{`Chegou dia: ${props.dateFormatted}`}</DateArive>
            </OtherInfoContainer>
            </InfoContainer>
            
            <SeparatorLine />

            <RegaTagComponent />
            <QuarentenaTagComponent />
            <AduboTagComponent />

            </Container>
        </BackgroundApp>
    )
}