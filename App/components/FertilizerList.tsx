import React from 'react'
import FertilizerCard from './FertilizerCard'
import {
    Container,
} from './WateryListStyle'
import { FertilizerCardOne, FertilizerCardTwo, FertilizerCardThree} from './WateryCards/FertilizerCards'

    interface Props {
        fertilizerList: string[];
        fertilizerCount: number;
    }

export default function fertilizerList({fertilizerList, fertilizerCount}: Props){
    
    return(
        <Container>
            {   
                fertilizerCount === 1 ? <FertilizerCardOne data={fertilizerList[0]}/> :

                fertilizerCount === 2 ?
                fertilizerList.map( item => (
                        <FertilizerCardTwo key={item} data={item}/>
                    )) : 

                    fertilizerCount === 3  ?
                    fertilizerList.map( item => (
                        <FertilizerCardThree key={item} data={item}/>
                    )) :

                    fertilizerCount > 3 && fertilizerCount < 6 ?
                    fertilizerList.map( item => (
                        <FertilizerCard key={item} date={item}/>
                    )) : 
                
                    fertilizerCount > 5 ?
                    fertilizerList.slice(-5).map( item => (
                        <FertilizerCard key={item} date={item}/>
                    )) : <></>    
                    
                
            }
        </Container>
    )
}