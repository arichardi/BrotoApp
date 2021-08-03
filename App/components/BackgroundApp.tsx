import React from 'react'
import {
Background,
PinkCircle,
YellowCircle,
} from './BackgroundAppStyles'


export default function BackgroundApp({children}){
    return (
        <Background>
            <PinkCircle />
            <YellowCircle />
            {children}
        </Background>
    )
}