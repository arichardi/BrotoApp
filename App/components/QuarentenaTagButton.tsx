import React, {useState} from 'react'
import {
    Container,
    InfoContainer,
    Title,
    Subtitle,
    IconContainer,
} from './QuarentenaTagButtonstyle'
import theme from '../config/styles/theme'
import BugIcon from '../Assets/BugIcon'
import Modal from 'react-native-modal'
import AddDataModal from './AddDataModal'

interface Props{
    onPress: () => void
}

export default function QuarentenaTagButton({onPress}: Props){

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <Container>

            <InfoContainer onPress={onPress}>
                <Title>Quarentena</Title>
                <Subtitle>{`Última Quarentena foi dia xx/xx`}</Subtitle>
            </InfoContainer>

            <IconContainer onPress={() => setOpenModal(true)}>
                <BugIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>
            </IconContainer>

        </Container>

            <Modal 
                isVisible={openModal}
                onBackdropPress={ () => setOpenModal(false)}
                onBackButtonPress={ () => setOpenModal(false)}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}>

                <AddDataModal 
                    type='Quarentena'
                    onCancel={() => setOpenModal(false)}
                />

            </Modal>
        
        </>
    )
}