import React from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonAddPlantContainer,
    PlantsPack,
    Cto,
    } from './MyPlantsStyles';
import PlantCard from '../components/PlantCard';
import PlantAddIconButton from '../Assets/PlantAddIconButton'
import BackgroundApp from '../components/BackgroundApp';
import { PlantCardProps } from '../components/PlantCard'
//----------------------------------------------------------------

export default function MyPlants(){

const plants: PlantCardProps[] = [
     {id: '1',
     title: 'Drascena',
     subtitle: 'minha plantinha'
    },
    {id: '2',
     title: 'Samambaia',
     subtitle: 'sala gostosinha'
    },
    {id: '3',
     title: 'Hera',
     subtitle: 'venenosa eeeee era venenosa'
    },
    {id: '4',
    title: 'Drascena',
    subtitle: 'minha plantinha'
   },
   {id: '5',
    title: 'Samambaia',
    subtitle: 'sala gostosinha'
   },
   {id: '6',
    title: 'Hera',
    subtitle: 'venenosa eeeee era venenosa'
   },
   {id: '7',
   title: 'Drascena',
   subtitle: 'minha plantinha'
  },
  {id: '8',
   title: 'Samambaia',
   subtitle: 'sala gostosinha'
  },
  {id: '9',
   title: 'Hera',
   subtitle: 'venenosa eeeee era venenosa'
  }
]

    return(
        <BackgroundApp>
        <Container>
            <PlantsPack>
            <Cto>
                <Underline />
                <Title>Minhas Plantas</Title>
            </Cto>

            <PlantList 
                data={plants}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => 
                    <PlantCard title={item.title} subtitle={item.subtitle} id={item.id}/>
                }
            />

            </PlantsPack>

            <ButtonAddPlantContainer>
                <PlantAddIconButton />
            </ButtonAddPlantContainer>
        </Container>
        </BackgroundApp>
    );
}