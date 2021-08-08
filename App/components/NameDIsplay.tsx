import React from 'react'
import { 
    Cto,
    Underline,
    Title,
 } from './NameDIsplayStyle'

export default function NameDisplay({children}){
    return(
            <Cto>
                <Underline size={children.length}/>
                <Title >{children}</Title>
            </Cto>
    )
}