import { parse } from "@babel/core";
import  {UNITS} from  "../constants/Colors"


export function getOppositUnit( unit: string) : string {

    return  unit == UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius ;

}


export function convertTempretureTo(unit: string, value: string) {
    const values = parseFloat(value);
    // Si la valeur n'est pas un nombre valide, retourner une chaîne vide ou une valeur par défaut
    if (isNaN(values)) {
        return '';
    }

    if (unit == UNITS.celcius) {
        const result = ((values - 32) / 1.8).toFixed(1);
        return String(result);
    } else {
        const result = (values * 1.8 + 32).toFixed(1);
        return String(result);
    }
}


 export function isIceTemperature(value: string , unit: string)  {

    const values = parseFloat(value);
    // Si la valeur n'est pas un nombre valide, retourner une chaîne vide ou une valeur par défaut
    if (isNaN(values)) {
        return false;
    }

    if (unit == UNITS.celcius) {
        return values <=0;
    }   else {
        return values <= 32;
    }

 }