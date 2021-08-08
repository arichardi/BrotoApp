import React from 'react'
import { TextInputProps } from 'react-native'
import {
    Container,
    Input,
    Line,
} from './AppInputStyle'

type Props = TextInputProps 

export default function AppInput({...rest}: Props){
    return(
        <Container>
            <Input {...rest} />
            <Line />
        </Container>
    )
}