import React from 'react'
import {
    Container,
    PhotoIconContainer,
} from './PlantDetailScreenStyle'
import BackgroundApp from '../components/BackgroundApp'
import PhotoIcon from '../components/PhotoIcon'

export default function PlantDetailScreen(){
    return (
        <BackgroundApp>
            <Container>

            <PhotoIconContainer>
                <PhotoIcon />
            </PhotoIconContainer>



            </Container>
        </BackgroundApp>
    )
}