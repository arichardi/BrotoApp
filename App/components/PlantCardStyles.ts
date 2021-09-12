import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { View } from 'react-native'

interface ContainerProps {
    openCard: boolean;
    quarentine: boolean;
    wateryLength: Number;
}

interface quarentine {
    quarentine: boolean;
}

export const Container = styled(View).attrs({
    elevation: 8,
})<ContainerProps>`

    background-color: ${ ({theme, quarentine}) => 
    quarentine ? theme.colors.pink_dark :
    theme.colors.backGround};
    height: ${ ({openCard, wateryLength}) => openCard ? 
    wateryLength > 0 ? RFPercentage(32) :
    RFPercentage(23) : RFPercentage(10.3)}px;
    padding: 8px 12px;
    border-radius: 16px;
    margin-top: 0px;
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 8px; 
    overflow: hidden;

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

export const Title = styled.Text<quarentine>`
    font-size: 14px;
    letter-spacing: 0.5px;
    font-family: ${ ({theme}) => theme.fonts.black};
    color: ${ ({theme, quarentine}) => quarentine? theme.colors.backGround : theme.colors.green_dark};
    width: 200px;
`;

export const Subtitle = styled.Text<quarentine>`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.regular};
    color: ${ ({theme, quarentine}) => quarentine? theme.colors.backGround : theme.colors.green_dark};
    width: 200px;
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

export const DataTitle = styled.Text<quarentine>`
    color: ${ ({theme, quarentine}) => quarentine? theme.colors.backGround : theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
    letter-spacing: 0.5px;
`;

export const DataArrive = styled.Text`
    color: ${ ({theme}) => theme.colors.attention};
    font-family: ${ ({theme}) => theme.fonts.black};
    margin-left: 4px;
`;

export const ButtonText = styled.Text<quarentine>`
    color: ${ ({theme, quarentine}) => quarentine? theme.colors.pink_dark : theme.colors.green_dark };
    font-family: ${ ({theme}) => theme.fonts.black};
    letter-spacing: 0.5px;
`;

export const DetailsButton = styled.TouchableOpacity<quarentine>`
    border: 3px solid ${ ({theme, quarentine}) => quarentine? theme.colors.backGround : theme.colors.green_dark };
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

export const DeleteFlag = styled.View`
height: ${RFPercentage(11)}px;
width: 110%;
background-color: rgba(238, 108, 41, 0.7);
position: absolute;
justify-content: center;

`;

export const DeleteText = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};
    align-self: center;
`;