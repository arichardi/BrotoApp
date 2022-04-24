
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

    interface PlantProps {
        id?: string;
        name: string;
        subtitle: string;
        arriveDate: Date;
        enviroment: 'in' | 'out';
        photoPlant?: string;
        deleteMode?: boolean;
        quarentenaMode?: boolean;
        lastQuarentine?: string;
      }

      export function parserDBQuery(dbData: DBQueryProps[]): PlantProps[]{
          const result = dbData.map( plantData => {
              return {
                    id: String(plantData.id),
                    name: plantData.name,
                    subtitle: plantData.subtitle,
                    arriveDate: new Date(plantData.arrivedate),
                    enviroment: plantData.enviroment,
                    photoPlant: plantData.photosplant ? plantData.photosplant: '',
                    deleteMode: plantData.deleteMode ? false : true,
                    quarentenaMode: plantData.quarentenaMode ? false : true,
                    lastQuarentine: plantData.lastquarentena ? plantData.lastquarentena : '',
                }
            })
            return result
        }