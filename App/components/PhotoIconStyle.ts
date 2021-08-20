import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
    background-color: ${ ({theme}) => theme.colors.green_light};
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;

export const IconContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const IconEditContainer = styled.View`
    position: relative;
    bottom: 30px;
    left: 90px;
`;

export const PhotoPlant = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;