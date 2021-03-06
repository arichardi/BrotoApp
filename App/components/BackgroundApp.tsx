import React from 'react'
import {
Background,
PinkCircle,
YellowCircle,
} from './BackgroundAppStyles'


export default function BackgroundApp({children}){
    return (
        <Background>
            <YellowCircle />
            <PinkCircle />
            {children}
        </Background>
    )
}