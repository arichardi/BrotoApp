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
}

export default function RegaTagButton({onPress, plantId}: Props){

    const [openModal, setOpenModal] = useState(false)

    return(
        <>
        <Container>

            <InfoContainer onPress={onPress}>
                <Title>Regas</Title>
                <Subtitle>{`Última Rega foi dia xx/xx`}</Subtitle>
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
                />

            </Modal>
        
        </>
    )
}