import {Component} from '@angular/core';
import{AppGlobals} from '../app.global';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector:'passenger',
  templateUrl:'passenger.component.html',
  styleUrls:['./passenger.component.scss']
})

export class PassengerComponent{
filtered_passenger = {};
  filtered = []
  selectedId;
  constructor(public appglobal: AppGlobals, public router: ActivatedRoute,public location:Location) {
    this.selectedId = this.router.snapshot.params.name;
 
    this.filtered = this.appglobal.passengers.filter(data => {
    
      if (data.name == this.selectedId) {
        return true;
      }
    });

    this.filtered_passenger = this.filtered[0];

  }
  goback(){
    this.location.back()
  }
}