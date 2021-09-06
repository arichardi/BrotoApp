import styled from "styled-components/native";
import { FlatList, View, TouchableOpacity } from "react-native";

import {PlantListDataProps } from '../Contexts/PlantData'

export const Container = styled.View`
    flex: 1;

`;

export const ButtonExitDeleteMode = styled.TouchableWithoutFeedback`
`;

export const Cto = styled.View`
margin-top: 42px;
margin-bottom: 88px;
margin-left: 16px;

`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${ ({theme}) => theme.fonts.display};
    color: ${ ({ theme }) => theme.colors.green_dark};
    margin-left: 8px;
`;

export const Underline = styled.View`
    height: 15px;
    width: 274px;
    border-radius: 15px;
    background-color: ${ ({ theme }) => theme.colors.pink_dark};
    position: relative;
    top: 42px;
`;

export const PlantList = styled(
    FlatList as new () => FlatList<PlantListDataProps>
    ).attrs({
        contentContainerStyle: { 
           
        },
        showsVerticalScrollIndicator: false,
        
    })`

    `;

export const ButtonContainer = styled.View`
    align-items: center;
    margin-bottom: 8px;
    margin-top: 20px;
    
    
`
export const ButtonAddPlantContainer = styled.TouchableOpacity``
export const ButtonRemovePlantContainer = styled.TouchableOpacity``