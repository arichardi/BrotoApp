import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};

    flex-direction: row;
    width: 100%;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 16px;
    margin-bottom: 12px;

    elevation: 20;
`;

export const PlantaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PlantTag = styled.View`
    margin-left: 24px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.black};
    color: ${ ({theme}) => theme.colors.green_dark};
`;

export const Subtitle = styled.Text`
    font-size: 14px;
    font-family: ${ ({theme}) => theme.fonts.regular};
    color: ${ ({theme}) => theme.colors.green_light};
`;