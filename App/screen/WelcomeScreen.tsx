import React from 'react'
import { Container } from './WelcomeScreenStyles'
import BackgroundApp from '../components/BackgroundApp'
import MainLogo from '../Assets/MainLogo'



export default function WelcomeScreen(){
    return (
        <BackgroundApp >
            <Container>
            <MainLogo  />
            </Container>
        </BackgroundApp>
    )
};

