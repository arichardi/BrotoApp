export interface PlantListDataProps {
    id: string;
    name: string;
    subtitle: string;
    arriveDate: Date;
    enviroment: 'in' | 'out' | '';
    photoPlant?: {
        localUri: string
    };
    wateryList: string[];
    wateryListCount: number;
    fertilizerList: string[];
    fertilizerCount: number;
    deleteMode: boolean;
    quarentenaMode: boolean;
    lastQuarentine: string;
}

export interface ContextProps {
  handleQuarentine: (id: string) => void;
  handleAddfertilizer: (id: string) => void;
  clearDeleteMode: () => void;
  handleRemovePlant: () => void;  
  changeDeleteMode: (id: string) => void;
  handleInsertData: ({} : PlantListDataProps) => void;
  handleAddDate: (id: string) => void 
  plantListData: PlantListDataProps[];
  idList: number
}

export interface PlantProps {
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

export interface WateryProps {
  id?: string;
  plant_id: string;
  watery_date: string;
}