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
import { useNavigation } from '@react-navigation/core'
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
import modal from 'react-native-modal'
import RegaTagButton from '../components/RegaTagButton'

export default function PlantDetailScreen({ route }){

    //variables ----------------------------------------------

    const {plantListData, handleAddfertilizer, handleQuarentine} = useContext(PlantDataContext)
    const Navigation = useNavigation()
    const props = route.params;
    const [plantData, setPlantData] = useState({} as PlantListDataProps)
    const [lastFertilizerData, setLastFertilizerData] = useState('')
    const [lastwateryData, setLastWateryData] = useState('')

    useEffect( () => {
        const plant = plantListData.filter( item => item.id === props.id)
        const plantFNS = plant[0]
        setPlantData(plantFNS)
        const lastFertilizerDataFNS = plantFNS.fertilizerList[plantFNS.fertilizerList.length - 1]
        setLastFertilizerData(lastFertilizerDataFNS)
        const lastWateryDateFNS = plantFNS.wateryList[plantFNS.wateryList.length -1 ]
        setLastWateryData(lastWateryDateFNS)
    }, [plantListData])

    //Functions ----------------------------------------------

    function handlefertilizerbutton(){
        handleAddfertilizer(plantData.id)
    }

    function handleQuarentineButton(){
        handleQuarentine(plantData.id)
    }

    function handleNavigationDetailsWatery(){
        Navigation.navigate('Information', { id: plantData.id, category: 'rega'} )
    }

    //RN ----------------------------------------------

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

            <RegaTagButton onPress={ () => handleNavigationDetailsWatery()}/>

            <QuarentenaTagComponent 
            quarentenaMode={plantData.quarentenaMode}
            onPress={() => {}} 
            lastQuarentine={plantData.lastQuarentine}
            />
            <AduboTagComponent fertilizerList={plantData.fertilizerList}
                fertilizerCount={plantData.fertilizerCount}
                onPress={handlefertilizerbutton}
                lastDate={lastFertilizerData} />

            </Container>
            
            

        </BackgroundApp>
    )
}