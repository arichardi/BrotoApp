import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.pink_dark};
    height: 64px;
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
export const InfoContainer = styled.View``;
export const BottomContainer = styled.View``;