import styled from 'styled-components/native'
import { View } from 'react-native'

export const Container = styled(View).attrs({
    elevation: 30,
})`
    background-color: ${ ({theme}) => theme.colors.backGround};

    flex-direction: row;
    width: 100%;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 16px;
    margin-bottom: 12px;


`;

export const PlantaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PlantTag = styled.View`
    margin-left: 16px;
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