import React, {useState} from 'react'
import {
    Container,
    InfoContainer,
    Title,
    Subtitle,
    IconContainer,
} from './RegaTagButtonstyle'
import theme from '../config/styles/theme'
import RegadoIcon from '../Assets/RegadoIcon'
import Modal from 'react-native-modal'
import AddDataModal from './AddDataModal'

interface Props{
    onPress: () => void;
    plantId: string;
    lastWatery: string
    wateryList: string[]
}

export default function RegaTagButton({onPress, plantId, lastWatery, wateryList}: Props){

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <Container>

            <InfoContainer onPress={onPress}>
                <Title>Regas</Title>
                <Subtitle>
                    { lastWatery === '00/00'? 'Não há registro de regas' : `Última Rega foi dia ${lastWatery}`}
                </Subtitle>
            </InfoContainer>

            <IconContainer onPress={() => setOpenModal(true)}>
                <RegadoIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>
            </IconContainer>

        </Container>

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
                    plantId={plantId}
                    closePreviousModal={setOpenModal}
                    wateryList={wateryList}
                />

            </Modal>
        
        </>
    )
}