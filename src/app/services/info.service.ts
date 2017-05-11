import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InfoService {
  systemData:Object;

  constructor(private http:Http) {
    http.get('./src/app/data/systems.json').subscribe(res => this.systemData = res.json());
  }

  get(game:string, selectSystem:string, property:string) {
    return this.systemData[game]["options"][selectSystem][property]
  }

  guaranty(game:string, selectSystem:string, property:string) {
    var arr:string[] = this.systemData[game]["options"][selectSystem][property];
    var result:string = '';
    arr.forEach(v => result += v + ' ');
    return result
  }

  forYear(year:any, price:number) {
    switch (year) {
      case '2014' :
        return Math.round(price * 104);

      case '2015' :
        return Math.round(price * 106);

      case '2016' :
        return Math.round(price * 104);

      default :
        alert('Error: Година?');
    }

  }

}
