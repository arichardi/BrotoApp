import styled from 'styled-components/native'
import { View } from 'react-native'

interface ContainerProps {
    openCard: boolean
}

export const Container = styled(View).attrs({
    elevation: 8,
})<ContainerProps>`
    background-color: ${ ({theme}) => theme.colors.backGround};

    flex-direction: row;
    height: ${ ({openCard}) => openCard? 216 : 64}px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 16px;
    margin-top: 0px;
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 8px; 

`;

export const PlantaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TouchableContainer = styled.View`
margin-left: 16px;
`;

export const PlantTag = styled.TouchableWithoutFeedback`
`;

export const Title = styled.Text`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.black};
    color: ${ ({theme}) => theme.colors.green_dark};
    width: 100px;
`;

export const Subtitle = styled.Text`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.regular};
    color: ${ ({theme}) => theme.colors.green_light};
    width: 180px;
`;