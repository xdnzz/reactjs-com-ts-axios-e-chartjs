export type Country = {
    updated: number;
    Country: string;
    NewConfirmed: number;
    NewRecovered: number;
    ID: string;
    countryInfo: {
        "_id": number;
        "iso2": string;
        "iso3": string;
		"lat": number;
		"long": any;
		"flag": string;
    }   
}

export type GlobalData = {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date;
}

export type ResponseData = {
       Countries: Country[];
       Date: string;
       Global: GlobalData;
       ID: string;
       Message: string;
    }


