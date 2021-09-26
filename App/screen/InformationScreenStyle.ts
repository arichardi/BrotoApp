import {View} from 'react-native'
import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Modal from 'react-native-modal'

interface DetailsTheme {
    category: 'rega' | 'quarentena' | 'abudo'
}

export const Container = styled(View).attrs({
    elevation: 8
})`
    
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: ${RFPercentage(17.8)}px;
    margin-left: 16px;
    margin-right: 16px;
    height: ${RFPercentage(90)}px;
    border-radius: 16px;
`;

export const PhotoIconContainer = styled.View`
    position: absolute;
    top: -64px;
    left: 30%;

`;
export const PhotoIcon = styled.View``;


export const InfoContainer = styled.View`
    margin-top: 24px;
`;

export const GoBackIcon = styled.TouchableOpacity`
    position: absolute;
    top: -50px

`;

export const DataStructure = styled.View<DetailsTheme>`
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin: 8px;
    border-width: 3px;
    border-radius: 16px;
    border-color: ${ ({theme, category }) => category === 'rega'? theme.colors.green_dark:
    category === 'quarentena'? theme.colors.pink_dark : theme.colors.yellow_dark
    };
    height: ${ RFPercentage(56)}px;
`;

export const FlatlistData = styled.FlatList<DetailsTheme>`

`;

export const ItemSeparator = styled.View<DetailsTheme>`
    background-color: ${ ({theme, category }) => category === 'rega'? theme.colors.green_dark:
    category === 'quarentena'? theme.colors.pink_dark : theme.colors.yellow_dark
    };
    height: 2px;
    width: 90%;
    align-self: center;
    margin: 8px;
`;

