import React, {useState} from 'react'
import { TouchableOpacityProps} from 'react-native'
import {
    Container,
    ButtonCase,
    TitleIn,
    TitleOut,
    HomeIconStyle,
    SunIconStyle,
} from './AmbientButtonStyle'
import theme from '../config/styles/theme'

interface ButtonProps extends TouchableOpacityProps {
    onPress: (envType) => void;
    envType: string ;
}

export default function AmbientButton({onPress, envType}: ButtonProps){
    return(
        <Container>
            <ButtonCase onPress={ ()=> onPress('in')} isActive={ envType === 'in'}>
                <TitleIn isActive={ envType === 'in'} >Interno</TitleIn>
                <HomeIconStyle 
                color={envType === 'in'? theme.colors.backGround : theme.colors.green_dark } 
                />
            </ButtonCase>
            <ButtonCase onPress={ ()=> onPress('out')} isActive={ envType === 'out'}>
                <TitleOut isActive={ envType === 'out'} >Externo</TitleOut>
                <SunIconStyle 
                color={envType === 'out'? theme.colors.backGround : theme.colors.green_dark }
                />
            </ButtonCase>
        </Container>
    )
}