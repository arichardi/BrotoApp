import React from 'react'
import { displayFormatter } from '../utils/helpers'
import { 
    Container,
    Cto,
    Underline,
    Title,
    CtoDouble,
    UnderlineDouble,
    TitleDouble,
    Firstword,
 } from './NameDIsplayStyle'

export default function NameDisplay({children}){

    const namePlant = displayFormatter(children)
    
    return(
            <Container>
                {namePlant.size === 1?

                <Cto>
                <Underline size={namePlant.words[0].wordSize}/>
                <Title >{namePlant.words[0].word}</Title>
                </Cto> :

                <CtoDouble>
                    <Firstword>
                        <UnderlineDouble size={namePlant.words[0].wordSize}/>
                        <TitleDouble >{namePlant.words[0].word}</TitleDouble>
                    </Firstword>
                    <UnderlineDouble size={namePlant.words[1].wordSize}/>
                    <TitleDouble >{namePlant.words[1].word}</TitleDouble>
                </CtoDouble>
            }
            </Container>
    )
}