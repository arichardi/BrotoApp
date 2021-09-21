import React from 'react'
import {
    Container,
    CTO,
    ExtraInfoContainer,
    TextDetails,
    AreaText,
BoxHideDetails,
} from './AddDataModalStyle'
import DatePickerButton from './DatePickerButton'

export default function AddDataModal(){
    return(
        <Container>
            <CTO></CTO>
            <DatePickerButton 
            onPress={() => {}}
            dateTitle='08/07'
            />

            <ExtraInfoContainer>
                <BoxHideDetails />
                <TextDetails></TextDetails>
                <AreaText></AreaText>
            </ExtraInfoContainer>

            {/* adicionar os dois botões*/}
        </Container>
    )
}