import React, {useContext, useState, useEffect} from 'react'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    GoBackIcon,
} from './InformationScreenStyle'

import {PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';


export default function InformationScreen({route}){

    //variables ----------------------------------------------

    const {plantListData, handleAddfertilizer, handleQuarentine} = useContext(PlantDataContext)
    const props = route.params;
    const [plantData, setPlantData] = useState({} as PlantListDataProps)



    //Functions ----------------------------------------------




    //RN ----------------------------------------------

    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon editMode={false} photoPlant={plantData.photoPlant}/>
            </PhotoIconContainer>

            <GoBackIcon >
                <BackIcon />
            </GoBackIcon>

            <InfoContainer>
            <NameDisplay>{`${plantData.name}`}</NameDisplay>
            </InfoContainer>
            
            </Container>
            
        </BackgroundApp>
    )
}