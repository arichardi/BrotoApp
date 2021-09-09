import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Background = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.colors.backGround};
`;
export const YellowCircle = styled.View`
    width: ${RFPercentage(80)}px;
    height: ${RFPercentage(80)}px;
    border-radius: ${RFPercentage(40)}px;
    background-color: ${ ({theme}) => theme.colors.Yellow_light};
    position: absolute;
    top: -250px;
    left: 200px;

`;
export const PinkCircle = styled.View`
    width: ${RFPercentage(80)}px;
    height: ${RFPercentage(80)}px;
    border-radius: ${RFPercentage(40)}px;
    background-color: ${ ({theme}) => theme.colors.pink_light};
    position: absolute;
    bottom: ${RFPercentage(-40)}px;
    right: ${RFPercentage(11)}px;
    `;