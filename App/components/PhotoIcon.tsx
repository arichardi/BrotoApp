import React from 'react'
import {
Container,
IconContainer,
IconEditContainer,
} from './PhotoIconStyle'
import CameraIcon from '../Assets/CameraIcon'
import EditIcon from '../Assets/EditIcon'


export default function PhotoIcon(){
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