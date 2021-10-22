
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
//enter a date and exit a formatted string
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
export function stringToDate(date: string): Date {
    const [ day , month ] = date.split('/')
    const newDate = new Date((new Date().getFullYear()), Number(month) - 1, Number(day))
    return newDate
}

//calculate an interval between an array of string dates
export function dayInterval(dateList: string[], index: number): string | number {
    const mainDate = stringToDate(dateList[index])
    if(!dateList[index - 1]){
        return 'Não possui registro anterior'
    }
    const pastDate = stringToDate(dateList[index - 1])
    const differenceDate = Math.abs( mainDate.getTime() - pastDate.getTime())
    const differenceInDays = Math.ceil( differenceDate / (1000 * 60 * 60 * 24))
    return differenceInDays
}

//convert a list of dates with year in a list of dates without year
export function dateResize(list: string[]){
    const listResize = list.map( item => {
      const [day, mount, year] = item.split('/')
      const newDate = `${day}/${mount}`
      return newDate
    })
    return listResize
  }

  //compare functions for string data
export function sortFormatted(a: string, b: string){
  
    const dataArayOne = a.split('/')
    const dayOne = Number(dataArayOne[0])
    const mountOne = Number(dataArayOne[1])
    const yearOne = Number(dataArayOne[2])
  
    const dataArayTwo = b.split('/')
    const dayTwo = Number(dataArayTwo[0])
    const mountTwo = Number(dataArayTwo[1])
    const yearTwo = Number(dataArayTwo[2])
  
    //compare year elements
    if(yearOne !== undefined && yearTwo !== undefined){
    if(yearOne < yearTwo){
      return -1
    }
    if (yearOne > yearTwo){
      return 1
    }
  }
    //compare mounts
    if(mountOne < mountTwo){
      return -1
    }
    if (mountOne > mountTwo){
      return 1
    }
  
    //compare days
    if (dayOne < dayTwo){
      return -1
    }
  
    if (dayOne > dayTwo){
      return 1
    }
    return 0
  
  }

//check for duplicate dates
export function dateCheck(list: string[], dateToCheck: string): boolean{
  for (let item of list){
    if(dateToCheck === item){
      console.log(`found an duplicate item ${item}`)
      return true
    }
  }
  console.log('no duplicate were found')
  return false
}

export function dateChanger(list: string[], newDate: string, indexRemove: number): string[]{
  const oldList = [...list]
  oldList.splice(indexRemove, 1, newDate)
  return oldList
}