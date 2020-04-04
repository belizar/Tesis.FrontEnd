import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService implements NgbDateParserFormatter  {
  
  constructor() {}
  
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
        return {year: this.toInteger(dateParts[2]), month: null, day: null};
      } else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
        return {year: this.toInteger(dateParts[2]), month: this.toInteger(dateParts[1]), day: null};
      } else if (dateParts.length === 3 && this.isNumber(dateParts[2]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[0])) {
        return {year: this.toInteger(dateParts[2]), month: this.toInteger(dateParts[1]), day: this.toInteger(dateParts[0])};
      }
    }
    return null;
  }
  
  
   format(date: NgbDateStruct): string {
    return date ?
        `${this.isNumber(date.day) ? this.padNumber(date.day) : ''}/${this.isNumber(date.month) ? this.padNumber(date.month) : ''}/${date.year}` : '';
  }

  toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }

  isNumber(value: any): value is number {
    return !isNaN(this.toInteger(value));
  }

  padNumber(value: number) {
    if (this.isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return '';
    }
  }

}


@Injectable({
  providedIn: 'root'
})
export class DateService implements NgbDateAdapter<Date>  {

  fromModel(value: any): NgbDateStruct {

    if(value && typeof value == 'string') {   
      let splittedValue = value.split('/');
      value  = new Date(splittedValue[2] as unknown as number, 
                        splittedValue[1] as unknown  as number - 1, 
                        splittedValue[0] as unknown as number)
    }

    return  value ? { 
          year: value.getFullYear(),
          month: value.getMonth(),
          day: value.getDate() 
        } : null
  }
  toModel(date: NgbDateStruct): Date {
   return date ? new Date(date.year, date.month, date.day) : null;
  }
  
  constructor() {}
 

}


