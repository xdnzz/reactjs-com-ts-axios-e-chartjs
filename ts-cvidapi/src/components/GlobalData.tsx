import * as C from '../pages/home/style'

type Iprops ={
    casosNovos: number;
    novasMortes: number;
    novosRecuperados: number
}


export default function GlobalData({casosNovos,novasMortes,novosRecuperados}: Iprops){
    return <C.Container>
            <h1> Covid19 - Informações Globavis</h1>
            <h3>Novos casos confirmados: {new Intl.NumberFormat().format(casosNovos)}</h3>
            <h3>Novas mortes confirmadas: {new Intl.NumberFormat().format(novasMortes)}</h3>
            <h3>Novos números de casos recuperados: {new Intl.NumberFormat().format(novosRecuperados)}</h3>
          </C.Container>
}