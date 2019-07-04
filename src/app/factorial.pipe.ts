import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number, args?: any): number {
    var tel=value.toString().trim().replace(/^\+/, '')
    if (tel.match(/[^0-9]/)) {
            return "Error. Correct your number!";
        }
    if(tel.length!==9) return "Error. Correct your number!";
    var city, numb;
    switch(tel.length){
    	case 9:
    		city=tel.slice(0,2);
    		numb=tel.slice(2, 9);
    		break;
    	default:
    		return value;
    }
    city='(' + city.slice(0,2) +')' ;
    numb=' ' + numb.slice(0,3) + '-' + numb.slice(3,5) + '-' + numb.slice(5,7);
    return (city+numb).trim();
}}
