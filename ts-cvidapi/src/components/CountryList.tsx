import * as C from '../pages/home/style';

import {Country} from '../tipagems/index'


    type Iprops ={
        countries: Country[];
        onItemClick:(country: Country) => void;
    }

export default function CountryList({countries, onItemClick}:Iprops){
    return <C.Wrapper>
               {countries.map((country)=>(
                   <C.LiWrapper key={country.ID} onClick={()=>onItemClick(country)}>
                       <C.Card>
                           <h4>{country.Country}</h4>
                           <div>Novos casos:{country.NewConfirmed}</div>
                           <div>Recuperados:{country.NewRecovered}</div>
                        </C.Card>
                       </C.LiWrapper>
               ))}
            </C.Wrapper>
    
}