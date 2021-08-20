import React from 'react'
import {Text} from 'react-native'
import {
Container,
IconContainer,
IconEditContainer,
PhotoPlant,

} from './PhotoIconStyle'
import CameraIcon from '../Assets/CameraIcon'
import EditIcon from '../Assets/EditIcon'

interface Props {
    editMode?: boolean;
    onPress?: () => void;
    photoPlant?: {
        localUri: string
    };
}

export default function PhotoIcon({editMode, photoPlant, onPress}: Props){
    return(
        <>
        <Container onPress={onPress}>

            <IconContainer>
            {
                photoPlant? 
                <PhotoPlant source={{ uri: photoPlant.localUri }}/> :
                 <CameraIcon /> 
            }
            </IconContainer>

        </Container>

            <IconEditContainer>
            { editMode && <EditIcon />}
            </IconEditContainer>

        </>
    )
}