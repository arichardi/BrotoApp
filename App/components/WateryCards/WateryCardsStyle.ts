import styled from 'styled-components/native'

interface Quarentine {
    quarentine: boolean;
}

export const ContainerOne = styled.View<Quarentine>`
    background-color: ${ ({theme, quarentine}) => quarentine ? theme.colors.backGround : theme.colors.green_dark};
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    border-radius: 8px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    
`;
export const DataText = styled.Text<Quarentine>`
    color: ${ ({theme, quarentine}) => quarentine ? theme.colors.pink_dark : theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};

`;
export const ContainerTwo = styled.View<Quarentine>`
    background-color: ${ ({theme, quarentine}) => quarentine ? theme.colors.backGround : theme.colors.green_dark};
    height: 48px;
    width: 128px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    margin-left:12px;
    margin-right: 16px;
    margin-bottom: 8px;
    
`;

export const DataTextTwo = styled.Text<Quarentine>`
    color: ${ ({theme, quarentine}) => quarentine ? theme.colors.pink_dark : theme.colors.backGround};
    font-family: ${ ({theme}) => theme.fonts.black};
`;
export const DataTextThree = styled.Text<Quarentine>`
    color: ${ ({theme, quarentine}) => quarentine ? theme.colors.pink_dark : theme.colors.pink_dark};
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
    margin-left: 12px;
`;
