import React from 'react'
import WateryCard from './WateryCard'
import {
    Container,
} from './WateryListStyle'
import { WateryCardOne, WateryCardTwo, WateryCardThree} from './WateryCards/WateryCards'
import {dateResize} from '../utils/helpers'

    interface Props {
        wateryList: string[];
        wateryListCount: number;
        quarentine: boolean;
    }

export default function WateryList({wateryList, wateryListCount, quarentine}: Props){
    
    const shortDateWateryList = dateResize(wateryList)

    return(
        <Container>
            {   
                wateryListCount === 1 ? <WateryCardOne quarentine={quarentine} data={shortDateWateryList[0]}/> :

                wateryListCount === 2 ?
                    shortDateWateryList.map( item => (
                        <WateryCardTwo quarentine={quarentine} key={item} data={item}/>
                    )) : 

                wateryListCount === 3  ?
                    shortDateWateryList.map( item => (
                        <WateryCardThree quarentine={quarentine} key={item} data={item}/>
                    )) :

                wateryListCount > 3 && wateryListCount < 6 ?
                    shortDateWateryList.map( item => (
                        <WateryCard key={item} date={item} quarentine={quarentine}/>
                    )) : 
                
                    wateryListCount > 5 ?
                    shortDateWateryList.slice(-5).map( item => (
                        <WateryCard key={item} date={item} quarentine={quarentine}/>
                    )) : <></>    
                    
                
            }
        </Container>
    )
}