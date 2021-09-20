import React from 'react'
import {
    Container,
    CTO
} from './AddDataModalStyle'

export default function AddDataModal(){
    return(
        <Container>
            <CTO></CTO>
            <DataInsert />

            <ExtraInfoContainer>
                <BoxHideDetails />
                <TextDetails></TextDetails>
                <AreaText></AreaText>
            </ExtraInfoContainer>

            <Buttons />
        </Container>
    )
}