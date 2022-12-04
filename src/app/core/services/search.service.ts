import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SearchService implements PipeTransform {

  
  transform(list: any[], value: any[], key: any[]): any {
    value.forEach((name, index) => {
      if (name) {
        list = list.filter((item) => {
          return (item[key[index]]
            .toString()
            .toUpperCase()
            .indexOf(name) !== -1)
        });
      }
    });
    return list;
  }
  constructor() { }
}

