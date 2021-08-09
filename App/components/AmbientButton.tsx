import React from 'react'
import {
    Container,
    ButtonCase,
    TitleIn,
    TitleOut,
    HomeIconStyle,
    SunIconStyle,
} from './AmbientButtonStyle'

interface ButtonProps {
    envType: 'in' | 'out' 
}

export default function AmbientButton({envType}: ButtonProps){
    return(
        <Container>
            <ButtonCase>
                <TitleIn envType={envType}>Interno</TitleIn>
                <HomeIconStyle envType={envType}/>
            </ButtonCase>
            <ButtonCase>
                <TitleOut envType={envType} >Externo</TitleOut>
                <SunIconStyle envType={envType} />
            </ButtonCase>
        </Container>
    )
}