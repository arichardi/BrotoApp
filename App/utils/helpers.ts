
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

//This function will format the date to exit in a string formatted to pt-br standart
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

//In this function you enter an string date and he brings to you the day of the week formatted pt-br    
export function dayOfWeek(date: string): string{

    const today = new Date()
    const ano = today.getFullYear().toString()
    const month = date.slice(3,5)
    const day = date.slice(0,2)

    
    const dataList = [ano, month, day]
    const dataJoin = dataList.join('/')
    const dateDay = new Date(dataJoin)
    
    const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const result = semana[dateDay.getDay()];

    return result;
}

export function displayFormatter(name:string){

    const displayWords = name.split(' ')
    const wordsNumbers = displayWords.length
    const objectName = displayWords.map( word => {
      return { 
        word: word.charAt(0).toUpperCase() + word.slice(1),
        wordSize: word.length
      }
    } )
    return { words: objectName, size: wordsNumbers }
}

//insert an string and return a date
function stringToDate(date: string): Date {
    const [ day , month ] = date.split('/')
    const newDate = new Date((new Date().getFullYear()), Number(month) - 1, Number(day))
    return newDate
}

//calculate an interval between an array of string dates
function dayInterval(dateList: [], index: number): string | number {
    const mainDate = stringToDate(dateList[index])
    if(!dateList[index - 1]){
        return 'Não possui registro anterior'
    }
    const pastDate = stringToDate(dateList[index - 1])
    const differenceDate = Math.abs( mainDate.getTime() - pastDate.getTime())
    const differenceInDays = Math.ceil( differenceDate / (1000 * 60 * 60 * 24))
    return differenceInDays
}