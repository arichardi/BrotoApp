import styled from "styled-components/native";

interface Props {
    category: 'rega' | 'quarentena' | 'abudo';
}

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 12px;
`;
export const Text = styled.Text`
    color: ${ ({theme}) => theme.colors.green_dark};
    font-family: ${ ({theme}) => theme.fonts.bold};;
`;

export const DayContainer = styled.View`
    align-items: center;
`;

export const DayText = styled.Text`
    color: ${ ({theme}) => theme.colors.pink_dark};
    font-family: ${ ({theme}) => theme.fonts.black};;

`;
export const ButtonEdit = styled.TouchableOpacity`
    margin-right: 2px;
`;

export const DayContainerPack = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Separator = styled.View<Props>`
    width: 2px;
    height: 22px;
    border-radius: 1px;
    background-color: ${ ({theme, category}) => category === 'rega'? theme.colors.green_dark:
    category === 'abudo'? theme.colors.yellow_dark : theme.colors.pink_dark
};
    margin-left: 12px;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextEnfasis = styled.Text`
    margin: 0px 3px;
    color: ${ ({theme}) => theme.colors.attention};
    font-family: ${ ({theme}) => theme.fonts.black};
    font-size: 15px;
`;
