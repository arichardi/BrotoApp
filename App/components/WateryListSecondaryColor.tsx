import React from 'react'
import WateryCardSecondaryColor from './WateryCardSecondaryColor'
import {
    Container,
} from './WateryListSecondaryColorStyle'
import { WateryCardOne, WateryCardTwo, WateryCardThree} from './WateryCards/WateryCardsSecondaryColor'
import theme from '../config/styles/theme'

    interface Props {
        wateryList: string[];
        wateryListCount: number;
        quarentine: boolean;
    }

export default function WateryList({wateryList, wateryListCount, quarentine}: Props){
    
    return(
        <Container>
            {   
                wateryListCount === 1 ? <WateryCardOne quarentine={quarentine} data={wateryList[0]}/> :

                wateryListCount === 2 ?
                    wateryList.map( item => (
                        <WateryCardTwo quarentine={quarentine} key={item} data={item}/>
                    )) : 

                wateryListCount === 3  ?
                    wateryList.map( item => (
                        <WateryCardThree quarentine={quarentine} key={item} data={item}/>
                    )) :

                wateryListCount > 3 && wateryListCount < 6 ?
                    wateryList.map( item => (
                        <WateryCardSecondaryColor key={item} date={item} quarentine={quarentine}/>
                    )) : 
                
                    wateryListCount > 5 ?
                    wateryList.slice(-5).map( item => (
                        <WateryCardSecondaryColor key={item} date={item} quarentine={quarentine}/>
                    )) : <></>    
                    
                
            }
        </Container>
    )
}