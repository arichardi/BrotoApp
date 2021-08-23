import React from 'react'
import WateryCard from './WateryCard'
import {
    Container,
} from './WateryListStyle'
import { WateryCardOne, WateryCardTwo, WateryCardThree} from './WateryCards/WateryCards'

    interface Props {
        wateryList: [];
        wateryListCount: number;
    }

export default function WateryList({wateryList, wateryListCount}: Props){
    return(
        <Container>
            {   
                wateryListCount === 1 ? <WateryCardOne data={wateryList[0]}/> :

                wateryListCount === 2 ?
                    wateryList.map( item => (
                        <WateryCardTwo key={item} data={item}/>
                    )) : 

                wateryListCount === 3  ?
                    wateryList.map( item => (
                        <WateryCardThree key={item} data={item}/>
                    )) :

                wateryListCount > 4 ?
                    wateryList.map( item => (
                        <WateryCard key={item} date={item}/>
                    )) : <></>
                
            }
        </Container>
    )
}