import styled from 'styled-components/native'

interface ContainerProps {
    openCard: boolean;
    countList: number;
}

export const Container = styled.View<ContainerProps>`
    background-color: ${ ({theme}) => theme.colors.green_dark};
    height: ${ ({openCard, countList}) => openCard === false ? 64:
    countList < 4 ? 128 : 150 }px;
    margin: 0px 12px;
    border-radius: 16px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
    
export const Subtitle = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.regular};
`;

export const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`;
export const InfoContainer = styled.TouchableOpacity``;
export const BottomContainer = styled.View``;