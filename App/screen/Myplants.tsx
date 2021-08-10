import React, {useState} from 'react'
import { Container,
    Title,
    Underline,
    PlantList,
    ButtonAddPlantContainer,
    Cto,
    } from './MyPlantsStyles';
import { Modal } from 'react-native'
import PlantCard from '../components/PlantCard';
import PlantAddIconButton from '../Assets/PlantAddIconButton'
import BackgroundApp from '../components/BackgroundApp';
import { PlantCardProps } from '../components/PlantCard'
import { set } from 'react-native-reanimated';
import PlantRegisterScreen from './PlantRegisterScreen';
//----------------------------------------------------------------

export default function MyPlants(){

    const [visiblemodal, setVisibleModal] = useState(false)

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
    function handleAddPlantModal(door: boolean){
        setVisibleModal(door)
    }

    return(
        <>
        <BackgroundApp>
        <Container>
            <Cto>
                <Underline />
                <Title >Minhas Plantas</Title>
            </Cto>

            <PlantList 
                data={plants}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => {
                    return <PlantCard 
                        title={item.title}
                        subtitle={item.subtitle}
                        id={item.id}/>
                }
                }
            />


            <ButtonAddPlantContainer onPress={ () => handleAddPlantModal(true) } >
                <PlantAddIconButton />
            </ButtonAddPlantContainer>
        </Container>
        </BackgroundApp>

        <Modal visible={visiblemodal} animationType='slide' statusBarTranslucent >
            <PlantRegisterScreen 
                cancelOperation={handleAddPlantModal}
            />
        </Modal>
        
        </>
    );
}