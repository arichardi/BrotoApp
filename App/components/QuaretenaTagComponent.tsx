import React from 'react'
import BugIcon from '../Assets/BugIcon'
import theme from '../config/styles/theme'
import {
    Container,
    Title,
    Subtitle,
    TopContainer,
    InfoContainer,
    IconContainer,
    InfoContainerOff,
} from './QuarentenaTagComponentStyle'

interface Props {
    quarentenaMode: boolean;
    lastQuarentine: string;
    onPress: () => void;
}

export default function QuarentenaTagComponent({quarentenaMode, lastQuarentine , onPress}: Props){
    return(
        <Container>
            <TopContainer>
                { quarentenaMode ? (  
                <InfoContainer>
                    <Title>EM QUARENTENA</Title>
                    <Subtitle>{`desde o dia ${lastQuarentine}`}</Subtitle>
                </InfoContainer>
                ) : (     
                <InfoContainerOff>
                    <Title>Quarentena</Title>
                    <Subtitle>
                        {lastQuarentine === '' ? `Nunca ficou em quarentena`: `A última quarentena foi ${lastQuarentine}`}
                        </Subtitle>
                </InfoContainerOff>
                ) }

                <IconContainer onPress={ () => onPress()}>
                    <BugIcon />
                </IconContainer>

            </TopContainer>
        </Container>
    )
}