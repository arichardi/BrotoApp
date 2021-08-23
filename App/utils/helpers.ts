
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