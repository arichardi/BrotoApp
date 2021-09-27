import React, {useContext, useState, useEffect} from 'react'
import { Text, View } from 'react-native'
import {
    Container,
    PhotoIconContainer,
    InfoContainer,
    GoBackIcon,
    DataStructure,
    FlatlistData,
    ItemSeparator,
    Title,
} from './InformationScreenStyle'
import {useRoute} from '@react-navigation/native'
import {PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';
import WateryDetailCard from '../components/WateryDetailCard'
import AppButtonM from '../components/AppButtonM'

export default function InformationScreen(){

interface DetailsTheme {
    category: 'rega' | 'quarentena' | 'abudo'
}

interface Props {
    id: string,
    category: 'rega' | 'quarentena' | 'abudo'
}

    //variables ----------------------------------------------

    const route = useRoute();
    const props: Props  = route.params
    const [plantData, setPlantData] = useState( {} as PlantListDataProps)
    const {plantListData, handleAddfertilizer, handleQuarentine} = useContext(PlantDataContext)

    //Functions ----------------------------------------------

    useEffect( () => {
        const plant = plantListData.filter( item => item.id === props.id)
        const plantFNS = plant[0]
        setPlantData(plantFNS)
    }, [plantData])


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

            <DataStructure category={props.category} >
                <Title>Histórico de Regas</Title>
                <ItemSeparator category='rega'/>
                <FlatlistData 
                    data={plantData.wateryList}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={ ({item}) => {
                        return <WateryDetailCard title={item} />
                    }}
                    ItemSeparatorComponent={ () => {
                        return (
                            <ItemSeparator category='rega'/>
                        )
                    }}
                        />
            </DataStructure>

            <AppButtonM 
                title='Nova Rega'
                buttonType='correct'
                style={{alignSelf: 'center', marginTop: 12, marginBottom: 8}}
            />

            </Container>
            
        </BackgroundApp>
    )
}
