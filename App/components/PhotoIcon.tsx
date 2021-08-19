import React from 'react'
import {
Container,
IconContainer,
IconEditContainer,
} from './PhotoIconStyle'
import CameraIcon from '../Assets/CameraIcon'
import EditIcon from '../Assets/EditIcon'

interface Props {
    editMode?: boolean
}

export default function PhotoIcon({editMode: Props}){
    return(
        <>
        <Container>
            <IconContainer>
            <CameraIcon />
            </IconContainer>
        </Container>
            <IconEditContainer>

            <EditIcon />

            </IconEditContainer>
        </>
    )
}