import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { FlatList} from "react-native";

import {PlantProps} from '../interfaces/interfaces'

export const Container = styled.View`
    flex: 1;

`;

export const ButtonExitDeleteMode = styled.TouchableWithoutFeedback`
`;

export const Cto = styled.View`
margin-top: ${RFPercentage(7)}px;
margin-bottom: ${RFPercentage(14)}px;
margin-left: 16px;

`;

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};
    margin-left: 8px;
`;

export const Underline = styled.View`
    height: ${RFValue(15)}px;
    width: ${RFValue(274)}px;
    border-radius: 15px;
    background-color: ${ ({ theme }) => theme.colors.pink_dark};
    position: relative;
    top: ${RFPercentage(6.2)}px;
`;

export const PlantList = styled(
    FlatList as new () => FlatList<PlantProps>
    ).attrs({
        contentContainerStyle: { 
           
        },
        showsVerticalScrollIndicator: false,
        
    })`

    `;

export const ButtonContainer = styled.View`
    align-items: center;
    margin-bottom: 12px;
    margin-top: 20px;
    
    
`
export const ButtonAddPlantContainer = styled.TouchableOpacity``
export const ButtonRemovePlantContainer = styled.TouchableOpacity``