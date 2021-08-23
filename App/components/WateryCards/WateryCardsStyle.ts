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
    height: 48px;
    width: 128px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    
`;

export const DataTextTwo = styled.Text`
    color: ${ ({theme}) => theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
export const DataTextThree = styled.Text`
    color: ${ ({theme}) => theme.colors.pink_dark};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
export const DataContainer = styled.View`
    align-items: center;
    margin-left: 24px;
`;
export const ContainerThree = styled.View`
    flex-direction: row;
`;
export const DataContainerThree = styled.View`
    align-items: center;
    margin-left: 12px;
`;
