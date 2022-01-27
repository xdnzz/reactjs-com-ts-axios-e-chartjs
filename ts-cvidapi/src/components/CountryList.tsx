import {Country} from '../tipagems/index'


    type Iprops ={
        countries: Country[];
    }

export default function CountryList({countries}:Iprops){
    return <ul>
               {countries.map((country)=>(
                   <li key={country.ID}>{country.Country}</li>
               ))}
            </ul>
    
}