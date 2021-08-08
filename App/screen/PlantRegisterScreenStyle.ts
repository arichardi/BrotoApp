import styled from 'styled-components/native'
import { View } from 'react-native'

export const Container = styled(View).attrs({
    elevation: 8
})`
    background-color: ${ ({theme}) => theme.colors.backGround};
    margin-top: 112px;
    margin-left: 16px;
    margin-right: 16px;
    height: 600px;
    border-radius: 16px;
`;

export const PhotoIcon = styled.View`
    background-color: ${ ({theme}) => theme.colors.green_light};
    width: 128px;
    height: 128px;
    border-radius: 64px;
    position: relative;
    top: -64px;
    left: 30%;
`;