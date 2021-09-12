import React from 'react'
import { displayFormatter } from '../utils/helpers'
import { 
    Cto,
    Underline,
    Title,
 } from './NameDIsplayStyle'

export default function NameDisplay({children}){

    const namePlant = displayFormatter(children)
    
    return(
            <Cto>
                <Underline size={children.length}/>
                <Title >{children}</Title>
            </Cto>
    )
}