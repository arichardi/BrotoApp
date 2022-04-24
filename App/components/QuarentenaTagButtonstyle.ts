import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.pink_dark};
    height: ${RFValue(64) }px;
    margin: 0px 12px;
    border-radius: 16px;
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;

export const InfoContainer = styled.TouchableOpacity`
    width: 75%;
`;

export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.brown};
    font-family: ${ ({theme}) => theme.fonts.black};
`;

export const Subtitle = styled.Text`
    color: ${ ({theme}) => theme.colors.brown};
    font-family: ${ ({theme}) => theme.fonts.regular};
`;

export const IconContainer = styled.TouchableOpacity`
    
`;