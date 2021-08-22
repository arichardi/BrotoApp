import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.Yellow_light};
    height: 64px;
    margin: 0px 16px;
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
export const InfoContainer = styled.View``;
export const BottomContainer = styled.View``;