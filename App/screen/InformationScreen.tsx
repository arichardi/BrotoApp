import React, {useContext, useState} from 'react'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    GoBackIcon,
    DataStructure,
    FlatlistData,
} from './InformationScreenStyle'

import {PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';



export default function InformationScreen({route}){



interface DetailsTheme {
    category: 'rega' | 'quarentena' | 'abudo'
}

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
            
            <DataStructure>
            
            </DataStructure>

            </Container>
            
        </BackgroundApp>
    )
}