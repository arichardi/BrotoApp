import React from 'react'
import { TouchableOpacityProps} from 'react-native'
import {
    Container,
    Title,
} from './AppButtonMStyle'

interface Props extends TouchableOpacityProps {
    title: string;
    buttonType: 'correct' | 'cancel'
}

export default function AppButtonM({title, buttonType, ...rest}: Props){
    return(
        <Container buttonType={buttonType} {...rest}>
            <Title buttonType={buttonType} >{title}</Title>
        </Container>
    )
}