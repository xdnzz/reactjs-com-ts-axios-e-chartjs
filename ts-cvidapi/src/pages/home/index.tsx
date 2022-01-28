import axios from 'axios';
import {useState, useEffect} from 'react';
import CountryList from '../../components/CountryList';
import GlobalData from '../../components/GlobalData';
import {ResponseData} from '../../tipagems/index'


export default function Home(){

const [data, setData] = useState<ResponseData | undefined>(undefined)

   useEffect(()=>{  
        async function getItem(){
        const retorno:void | ResponseData = await axios.get('https://api.covid19api.com/summary')
        .then (res => setData(res.data))
    }
    getItem();
   },[])

   console.log(data?.Countries)

    return (
        <div>
            {data ? (
                <>
                <GlobalData
                casosNovos={data?.Global.NewConfirmed}
                novasMortes={data?.Global.NewDeaths}
                novosRecuperados={data?.Global.NewRecovered}
                /> 
                <CountryList countries={data.Countries}/>
                </>
            )
             
             : 'Carregando...'}

            
        </div>
    )
}