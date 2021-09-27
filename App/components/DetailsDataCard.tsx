import React from 'react'
import EditDetail from '../Assets/EditDetail'
import {
    Container,
    DetailsText,
    SeparatorLine,
} from './DetailsDataCardStyle'
import DateShowBox from '../components/DateShowBox'

interface Props {
    colorSystem: 'rega' | 'quarentena' | 'abudo';
    date: string;
    content: string;
}

export default function DetailsDataCard({colorSystem, date, content}: Props){
    return (
        <Container>
            <DateShowBox colorSystem={colorSystem}/>
            <SeparatorLine category={colorSystem}/>
            <DetailsText category={colorSystem}>
                {content}
            </DetailsText>
            <EditDetail />
        </Container>
    )
}