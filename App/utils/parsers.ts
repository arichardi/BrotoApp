    import {PlantProps} from '../interfaces/interfaces'


    interface DBQueryProps {
        id: number;
        arrivedate: string;
        deleteMode: number;
        enviroment: 'out' | 'in';
        lastquarentena: string | null;
        name: string;
        photosplant: string;
        quarentenaMode: number;
        subtitle: string; 

    }

      export function parserDBQuery(dbData: DBQueryProps[]): PlantProps[]{
          const result = dbData.map( plantData => {
              return {
                    id: String(plantData.id),
                    name: plantData.name,
                    subtitle: plantData.subtitle,
                    arriveDate: new Date(plantData.arrivedate),
                    enviroment: plantData.enviroment,
                    photoPlant: {
                        localUri: plantData.photosplant ? plantData.photosplant: ''
                    },
                    deleteMode: plantData.deleteMode ? false : true,
                    quarentenaMode: plantData.quarentenaMode ? false : true,
                    lastQuarentine: plantData.lastquarentena ? plantData.lastquarentena : '',
                }
            })
            return result
        }