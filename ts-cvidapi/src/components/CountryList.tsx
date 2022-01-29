import * as C from '../pages/home/style';

import {Country} from '../tipagems/index'


    type Iprops ={
        countries: Country[];
    }

export default function CountryList({countries}:Iprops){
    return <C.Wrapper>
               {countries.map((country)=>(
                   <C.LiWrapper key={country.ID}>
                       <C.Card>
                           <h4>{country.Country}</h4>
                           <div>Novos casos:{country.NewConfirmed}</div>
                           <div>Recuperados:{country.NewRecovered}</div>
                        </C.Card>
                       </C.LiWrapper>
               ))}
            </C.Wrapper>
    
}