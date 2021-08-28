
interface PlantStructure {
    id?: string
    name: string;
    subtitle?: string;
    arriveDate: Date;
    arriveDateFormatted: string;
    enviroment: 'in' | 'out';
    photoPlant?: {
        localUri: string;
    };
    wateryList: string[];
    wateryListCount: number;
}

export function brotoDateFormatter(date: Date, month: 'short' | 'long' | '2-digit', year?: 'ano'){
    
    if(year === 'ano'){
        let Dateformatted = Intl.DateTimeFormat('pt-BR',{
            day: '2-digit',
            month: `${month}`,
            year: "2-digit",
        }).format(date)
        return Dateformatted
    }else {
        let Dateformatted = Intl.DateTimeFormat('pt-BR',{
            day: '2-digit',
            month: `${month}`
        }).format(date)
        return Dateformatted
    }

    
}

export function handleAddDate(plantList: PlantStructure[], id: string, date: string ){
  
    //organiza e separa os objetos da lista
    const listNotSelected = plantList.filter( lists => lists.id !== id )
    const listSelected = plantList.filter( lists => lists.id === id)
    
    //verifica se o item tem 10 entradas e limita o arquivo
    if(listSelected[0].wateryListCount >= 10 ){
      listSelected[0].wateryList.shift()
      listSelected[0].wateryList.push(date)
      
      const resultList = [ ... listNotSelected, ... listSelected]
      return resultList
      
    }
    
    //acessa o item desejado do objeto e adiciona a data
    listSelected[0].wateryList.push(date)
    listSelected[0].wateryListCount += 1
    
    //adiciona o novo elemento no objeto
    const resultList = [ ... listNotSelected, ... listSelected]
    
    //retorna o novo objeto
   return resultList
    
  }
  
  function handleRemovePlant(plantList: PlantStructure[], id: string){
    const listFiltered = plantList.filter( lists => lists.id !== id )
    return listFiltered
  }
    
