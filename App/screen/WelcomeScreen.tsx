import React from 'react'
import { Container } from './WelcomeScreenStyles'
import BackgroundAppMain from '../components/BackgroundAppMain'
import MainLogo from '../Assets/MainLogo'



export default function WelcomeScreen(){
    return (
        <BackgroundAppMain >
            <Container>
            <MainLogo  />
            </Container>
        </BackgroundAppMain>
    )
};

