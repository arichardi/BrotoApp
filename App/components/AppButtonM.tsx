import React from 'react'
import { TouchableOpacityProps} from 'react-native'
import {
    Container,
    Title,
} from './AppButtonMStyle'

interface Props extends TouchableOpacityProps {
    title: string;
    buttonType: 'correct' | 'cancel';
    size?: 'medium' | 'small';
}

export default function AppButtonM({title, buttonType, size='medium', ...rest}: Props){
    return(
        <Container buttonType={buttonType} size={size} {...rest}>
            <Title buttonType={buttonType} >{title}</Title>
        </Container>
    )
}