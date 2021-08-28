import styled from 'styled-components/native'
import { View } from 'react-native'

interface ContainerProps {
    openCard: boolean
}

export const Container = styled(View).attrs({
    elevation: 8,
})<ContainerProps>`

    background-color: ${ ({theme}) => theme.colors.backGround};
    height: ${ ({openCard}) => openCard? 216 : 64}px;
    padding: 8px 12px;
    border-radius: 16px;
    margin-top: 0px;
    margin-right: 12px;
    margin-left: 12px;
    margin-bottom: 8px; 

`;

export const TopCardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const BottomCardContainer = styled.View`
    margin-top: 26px;
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

export const ExtraContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`;

export const DateContainer = styled.View`
    flex-direction: row;
`;

export const DataTitle = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
`;

export const DataArrive = styled.Text`
    color: ${ ({theme}) => theme.colors.attention};
    font-family: ${ ({theme}) => theme.fonts.black};
    margin-left: 4px;
`;

export const ButtonText = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};;
    font-family: ${ ({theme}) => theme.fonts.black};
`;

export const DetailsButton = styled.TouchableOpacity`
    border: 3px solid ${ ({theme}) => theme.colors.green_dark};
    height: 32px;
    width: 128px;
    border-radius: 64px;
    background-color: ${ ({theme}) => theme.colors.backGround};
    justify-content: center;
    align-items: center;
`;

export const PhotoPlant = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

export const ActionIcon = styled.TouchableOpacity`
    
`;