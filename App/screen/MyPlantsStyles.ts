import styled from "styled-components/native";
import { FlatList, View } from "react-native";

import { PlantCardProps } from '../components/PlantCard'

export const Container = styled.View`
    flex: 1;
    padding: 16px;

`;

export const Cto = styled.View`
margin-top: 42px;
margin-bottom: 88px;

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
    FlatList as new () => FlatList<PlantCardProps>
    ).attrs({
        contentContainerStyle: { 
           
        },
        showsVerticalScrollIndicator: false,
        
    })`
        
    `;

export const ButtonAddPlantContainer = styled.View`
    align-items: center;
    margin-bottom: 8px;
    margin-top: 20px;
    
    
`

export const ShadowView = styled(View).attrs({
    elevation: 30,
})`
`