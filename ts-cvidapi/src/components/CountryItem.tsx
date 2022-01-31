import * as C from '../pages/home/style';
import {Country} from '../tipagems/index'
import {useState} from 'react';

export type Props = {
pais: Country;
onItemClick: (pais: Country) =>void
}

const CountryItem =({pais, onItemClick}:Props)=>{

    const [ativo, setAtivo] = useState<boolean>(false);

    const handleOnClick = (country: Country) => {
        onItemClick(country);
        setAtivo(!ativo);
    }

   return (
        <C.LiWrapper key={pais.ID} onClick={()=>handleOnClick(pais)}>
            <C.Card ativo={ativo} >
                <h4>{pais.Country}</h4>
                <div>Novos casos:{pais.NewConfirmed}</div>
                <div>Recuperados:{pais.NewRecovered}</div>
            </C.Card>
        </C.LiWrapper>
   )
}

export default CountryItem;