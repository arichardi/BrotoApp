import React from 'react'
import WateryCard from './WateryCard'
import {
    Container,
} from './WateryListStyle'
import { WateryCardOne, WateryCardTwo, WateryCardThree} from './WateryCards/WateryCards'

    interface Props {
        wateryList: string[];
        wateryListCount: number;
        quarentine: boolean;
    }

export default function WateryList({wateryList, wateryListCount, quarentine}: Props){
    
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

                wateryListCount > 3 && wateryListCount < 6 ?
                    wateryList.map( item => (
                        <WateryCard key={item} date={item}/>
                    )) : 
                
                    wateryListCount > 5 ?
                    wateryList.slice(-5).map( item => (
                        <WateryCard key={item} date={item}/>
                    )) : <></>    
                    
                
            }
        </Container>
    )
}