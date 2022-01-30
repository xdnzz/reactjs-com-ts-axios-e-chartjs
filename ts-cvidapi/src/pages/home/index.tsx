import axios from 'axios';
import {useState, useEffect} from 'react';
import CountryList from '../../components/CountryList';
import GlobalData from '../../components/GlobalData';
import {Country, ResponseData} from '../../tipagems/index';


export default function Home(){

const [data, setData] = useState<ResponseData | undefined>(undefined);
const [paisAtivo, setPaisAtivo] = useState<Country[]>([]);

   useEffect(()=>{  
        async function getItem(){
        const retorno:void | ResponseData = await axios.get('https://api.covid19api.com/summary')
        .then (res => setData(res.data))
    }
    getItem();
   },[])

   console.log(data?.Countries)


   const handlePais = (country:Country) => {
    const indexPais = paisAtivo.findIndex((paisAtivo)=>paisAtivo.ID === country.ID);
    if(indexPais > -1) {
        const newPaisAtivo = [...paisAtivo];
        newPaisAtivo.splice(indexPais,1);

        setPaisAtivo(newPaisAtivo);

    } else {
        setPaisAtivo([...paisAtivo, country])
    }
   }

    return (
        <div>
            {paisAtivo.map((APais)=> 
            <span>{APais.Country}</span>)}
            {data ? (
                <>
                <GlobalData
                casosNovos={data?.Global.NewConfirmed}
                novasMortes={data?.Global.NewDeaths}
                novosRecuperados={data?.Global.NewRecovered}
                /> 
                <CountryList countries={data.Countries} onItemClick={handlePais}/>
                </>
            )
             
             : 'Carregando...'}

            
        </div>
    )
}