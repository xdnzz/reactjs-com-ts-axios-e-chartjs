import * as C from '../pages/home/style';

import {Country} from '../tipagems/index'
import CountryItem from './CountryItem';


    type Iprops ={
        countries: Country[];
        onItemClick:(country: Country) => void;
    }

export default function CountryList({countries, onItemClick}:Iprops){
    return <C.Wrapper>
               {countries.map((pais)=>(
                <CountryItem pais={pais}
                onItemClick={onItemClick}    
                /> 
               ))}
            </C.Wrapper>
    
}