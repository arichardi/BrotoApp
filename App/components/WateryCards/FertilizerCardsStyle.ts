import styled from 'styled-components/native'

export const ContainerOne = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    border-radius: 8px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    
`;
export const DataText = styled.Text`
    color: ${ ({theme}) => theme.colors.yellow_dark};
    font-family: ${ ({theme}) => theme.fonts.black};

`;
export const ContainerTwo = styled.View`
    background-color: ${ ({theme}) => theme.colors.backGround};
    height: 48px;
    width: 128px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    margin-left:8px;
    margin-right: 8px;
    margin-bottom: 8px;
    
`;

export const DataTextTwo = styled.Text`
    color: ${ ({theme}) => theme.colors.yellow_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
export const DataTextThree = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
export const DataContainer = styled.View`
    align-items: center;
    margin-left: 24px;
`;
export const ContainerThree = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;
export const DataContainerThree = styled.View`
    align-items: center;
    margin: 5px;
`;
