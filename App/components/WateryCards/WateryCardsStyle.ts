import styled from 'styled-components/native'

export const ContainerOne = styled.View`
    background-color: ${ ({theme}) => theme.colors.green_dark};
    width: 100%;
    height: 40px;
    border-radius: 8px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    
`;
export const DataText = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};

`;
export const ContainerTwo = styled.View`
    background-color: ${ ({theme}) => theme.colors.green_dark};
    height: 40px;
    width: 128px;
    border-radius: 8px;

`;
export const ContainerThree = styled.View``;
export const DataTextThree = styled.Text``;