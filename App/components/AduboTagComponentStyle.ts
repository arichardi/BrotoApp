import styled from 'styled-components/native'

interface ContainerProps {
    openCard: boolean;
    countList: number;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${ ({theme}) => theme.colors.Yellow_light};
    height: ${ ({openCard, countList}) => openCard === false ? 64:
    countList < 4 ? 128 : 150 }px;
    margin: 0px 12px;
    border-radius: 16px;
`;

export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
    
export const Subtitle = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.regular};
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;
export const InfoContainer = styled.TouchableOpacity``;
export const BottomContainer = styled.View`
    margin-top: 6px;
    padding: 0px 8px;

`;

export const IconContainer = styled.TouchableOpacity``;