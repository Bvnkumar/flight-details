import {Component} from '@angular/core';
import{AppGlobals} from '../app.global';
@Component({
  selector:'header',
  templateUrl:'header.component.html',
  styleUrls:['./header.component.scss']
})

export class HeaderComponent{
constructor(public appglobal:AppGlobals){

}
}