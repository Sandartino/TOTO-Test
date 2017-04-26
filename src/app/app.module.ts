import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }      from './app.component';
import { T535Component }     from './t535/t535.component';
import { T642Component }     from './t642/t642.component';
import { T649Component }     from './t649/t649.component';
import { CombinatoricsFiveService } from "./services/combinatorics-five.service";
import { UserNumsDirective } from './directives/user-nums.directive';
import { SelectSystemDirective } from './directives/select-system.directive';
import { ClearDirective } from './directives/clear.directive';

@NgModule({
  declarations: [
    AppComponent,
    T535Component,
    UserNumsDirective,
    T642Component,
    T649Component,
    SelectSystemDirective,
    ClearDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CombinatoricsFiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
