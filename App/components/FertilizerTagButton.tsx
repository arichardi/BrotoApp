import React, {useState} from 'react'
import {
    Container,
    InfoContainer,
    Title,
    Subtitle,
    IconContainer,
} from './FertilizerTagButtonstyle'
import theme from '../config/styles/theme'
import AduboIcon from '../Assets/AduboIcon'
import Modal from 'react-native-modal'
import AddDataModal from './AddDataModal'

interface Props{
    onPress: () => void
}

export default function FertilizerTagButton({onPress}: Props){

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <Container>

            <InfoContainer onPress={onPress}>
                <Title>Regas</Title>
                <Subtitle>{`Última Quarentena foi dia xx/xx`}</Subtitle>
            </InfoContainer>

            <IconContainer onPress={() => setOpenModal(true)}>
                <AduboIcon colorPrimary={theme.colors.backGround} colorSecondary={theme.colors.green_dark}/>
            </IconContainer>

        </Container>

            <Modal 
                isVisible={openModal}
                onBackdropPress={ () => setOpenModal(false)}
                onBackButtonPress={ () => setOpenModal(false)}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}>

                <AddDataModal 
                    type='Adubação'
                    onCancel={() => setOpenModal(false)}
                />

            </Modal>
        
        </>
    )
}