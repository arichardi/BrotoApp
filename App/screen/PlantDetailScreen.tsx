import React, {useContext, useState, useEffect} from 'react'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    SubTitle,
    OtherInfoContainer,
    DateArive,
    SeparatorLine,
    GoBackIcon,
    PlantEnvContainer,
    EnviromentText,
} from './PlantDetailScreenStyle'
import {PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';
import RegaTagComponent from '../components/RegaTagComponent'
import QuarentenaTagComponent from '../components/QuaretenaTagComponent'
import AduboTagComponent from '../components/AduboTagComponent'
import { brotoDateFormatter } from '../utils/helpers'
import HomeIcon from '../Assets/HomeIcon'
import SunIcon from '../Assets/SunIcon'
import theme from '../config/styles/theme'

export default function PlantDetailScreen({route}){

    const {plantListData} = useContext(PlantDataContext)
    const props = route.params;
    const [plantData, setPlantData] = useState({} as PlantListDataProps)

    useEffect( () => {
        const plant = plantListData.filter( item => item.id === props.id)
        const plantFNS = plant[0]
        setPlantData(plantFNS)
    }, [])

    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon editMode={false} photoPlant={plantData.photoPlant}/>
            </PhotoIconContainer>

            
        {/* Ios back navigation button
            <GoBackIcon >
                <BackIcon />
            </GoBackIcon> */}

            <InfoContainer>
            <NameDisplay>{`${plantData.name}`}</NameDisplay>
            <SubTitle>{plantData.subtitle}</SubTitle>
            <OtherInfoContainer>
                <DateArive>{`Chegou dia: ${brotoDateFormatter(plantData.arriveDate,'2-digit', 'ano')}`}</DateArive>
                { plantData.enviroment === 'in' ? (
                    <PlantEnvContainer >
                        <EnviromentText>interno</EnviromentText>
                        <HomeIcon color={theme.colors.backGround}/>
                    </PlantEnvContainer>
                ) : (
                    <PlantEnvContainer >
                            <EnviromentText>externo</EnviromentText>
                            <SunIcon color={theme.colors.backGround} />
                        </PlantEnvContainer>
                )
                }
            </OtherInfoContainer>
            </InfoContainer>
            
            <SeparatorLine />

            <RegaTagComponent />
            <QuarentenaTagComponent />
            <AduboTagComponent fertilizerList={plantData.fertilizerList} fertilizerCount={plantData.fertilizerCount} />

            </Container>
        </BackgroundApp>
    )
}