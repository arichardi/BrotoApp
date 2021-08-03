import styled from 'styled-components/native'

export const Background = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.colors.backGround};
`;
export const PinkCircle = styled.View`
    width: 500px;
    height: 500px;
    border-radius: 250px;
    background-color: ${ ({theme}) => theme.colors.pink_light};
    position: absolute;
    top: -250px;
    right: 150px;

`;
export const YellowCircle = styled.View`
    width: 500px;
    height: 500px;
    border-radius: 250px;
    background-color: ${ ({theme}) => theme.colors.Yellow_light};
    position: absolute;
    bottom: -250px;
    left: 150px;
    `;