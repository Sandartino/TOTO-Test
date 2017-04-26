import {Component, ViewChildren, QueryList, ViewChild} from '@angular/core';
import {T535Component} from "./t535/t535.component";


@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

/*  @ViewChildren(T535Component) iterate:QueryList<T535Component>;*/

  constructor() {

  }


  /*result() {
    this.iterate.forEach(instance535 => instance535.iterate());
  }*/

}
