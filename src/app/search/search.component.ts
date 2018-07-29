import {Component} from '@angular/core';
import{AppGlobals} from '../app.global';
import {Router} from '@angular/router'
@Component({
  selector:'search',
  templateUrl:'search.component.html',
  styleUrls:['./search.component.scss']
})

export class SearchComponent{
  search_term;
  novalue=false;
constructor(public router:Router){

}
searchTerm(search_term){
  if(search_term){
    this.novalue=false;
this.router.navigate(['/search_results/'+search_term])
  }else{
    this.novalue=true;
  }
}
 clearError(){
    this.novalue=false;
  }
}