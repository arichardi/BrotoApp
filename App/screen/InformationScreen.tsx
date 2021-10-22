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
    BackToPlantDatails,
} from './InformationScreenStyle'
import {useRoute, useNavigation} from '@react-navigation/native'
import {PlantDataContext, PlantListDataProps } from '../Contexts/PlantData'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'
import NameDisplay from '../components/NameDIsplay'
import BackIcon from '../Assets/BackIcon';
import WateryDetailCard from '../components/WateryDetailCard'
import AppButtonM from '../components/AppButtonM'
import { dateResize } from '../utils/helpers'
import Modal from 'react-native-modal'
import AddDataModal from '../components/AddDataModal'
import UpdateDataModal from '../components/UpdateDataModal'


export default function InformationScreen(){


interface Props {
    id: string,
    category: 'rega' | 'quarentena' | 'abudo';
}

    //variables ----------------------------------------------

    const route = useRoute();
    const navigation = useNavigation();
    const props: Props  = route.params
    const [plantData, setPlantData] = useState( {} as PlantListDataProps)
    const [wateryList, setWateryList] = useState([''])
    const {plantListData, handleAddfertilizer, handleQuarentine, handleChangeDate} = useContext(PlantDataContext)
    const [openModal, setOpenModal] = useState(false)
    const [localModal, setLocalModal] = useState(false)
    const [update, setUpdate] = useState(false)
    const [transitionDate, setTransitionDate] = useState('')
    const [activeIndexButton, setActiveIndexButton] = useState(0)

    //Functions ----------------------------------------------

    useEffect( () => {
        const plant = plantListData.filter( item => item.id === props.id)
        const plantFNS = plant[0]
        const newWateryList = dateResize(plantFNS.wateryList).reverse()
        setWateryList(newWateryList)
        setPlantData(plantFNS)
    }, [plantData, openModal, update])


    function handleGetBack(){
        navigation.goBack();
    }

    function HandleNewWateryButton(){
        setOpenModal(true)
    }

    function ConfirmCalendar(date: string){
        setTransitionDate(date)
        console.log(`transitionDateOn ${transitionDate}`)
    }

    function handleConfirmNewData(){
        handleChangeDate(plantData.id, activeIndexButton, transitionDate)
        setLocalModal(false)
        console.log(`updated to ${transitionDate}`)
        setUpdate(!update)
    }

    function updateDate( date:string, activeIndex: number ){
        setTransitionDate(date)
        setActiveIndexButton(activeIndex)
        setLocalModal(true)

    }

    //RN ----------------------------------------------

    return (
        <>
        <BackgroundApp>
            <Container>
            
            <PhotoIconContainer>
                <PhotoIcon editMode={false} photoPlant={plantData.photoPlant}/>
            </PhotoIconContainer>

            <GoBackIcon>
            <BackToPlantDatails onPress={handleGetBack}>
                <BackIcon />
            </BackToPlantDatails>
            </GoBackIcon>

            <InfoContainer>
                <NameDisplay>{`${plantData.name}`}</NameDisplay>
            </InfoContainer>

            <DataStructure category={props.category} >
                <Title>Histórico de Regas</Title>
                <ItemSeparator category={props.category}/>
                <FlatlistData 
                    data={wateryList}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={ ({item, index}) => {
                        return <WateryDetailCard
                            title={item as string}
                            category={props.category}
                            index={index}
                            wateryList={wateryList}
                            onPress={updateDate}
                            />
                    }}
                    ItemSeparatorComponent={ () => {
                        return (
                            <ItemSeparator category={props.category}/>
                        )
                    }}
                        />
            </DataStructure>

            <AppButtonM 
                title='Nova Rega'
                buttonType='correct'
                style={{alignSelf: 'center', marginTop: 12, marginBottom: 8}}
                onPress={() => setOpenModal(true)}
            />

            </Container>
            
        </BackgroundApp>

        <Modal 
        isVisible={openModal}
        onBackdropPress={ () => setOpenModal(false)}
        onBackButtonPress={ () => setOpenModal(false)}
        animationIn={'fadeInUp'}
        animationOut={'fadeOutDown'}>

        <AddDataModal 
            type='Rega'
            onCancel={() => setOpenModal(false)}
            details={false}
            plantId={props.id}
            closePreviousModal={setOpenModal}
            wateryList={wateryList}
        />

        </Modal>

        <Modal 
        isVisible={localModal}
        onBackdropPress={ () => setLocalModal(false)}
        onBackButtonPress={ () => setLocalModal(false)}
        animationIn={'fadeInUp'}
        animationOut={'fadeOutDown'}>

        <UpdateDataModal 
            type='Rega'
            onCancel={() => setLocalModal(false)}
            onConfirm={ConfirmCalendar}
            onUpdate={handleConfirmNewData}
            details={false}
            plantId={props.id}
            closePreviousModal={setLocalModal}
            wateryList={wateryList}
            oldDate={transitionDate}

        />

        </Modal>
        
        </>
    )
}
