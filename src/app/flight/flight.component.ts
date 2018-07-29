import { Component } from '@angular/core';
import { AppGlobals } from '../app.global';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'flight',
  templateUrl: 'flight.component.html',
  styleUrls: ['./flight.component.scss']
})

export class FlightComponent {
  filtered_flight = {};
  filtered_passenger = {};
  filtered = [];
  filtered_pass = [];
  selectedId;
  constructor(public appglobal: AppGlobals, public router: ActivatedRoute, public location: Location, public route: Router) {
    this.selectedId = this.router.snapshot.params.id;
    this.filtered = this.appglobal.flights.filter(data => {

      if (data.flight_no == this.selectedId) {
        return true;
      }
    });
    this.filtered_passenger = this.appglobal.passengers.filter(data => {

      if (data.flight_no == this.selectedId) {
        return true;
      }
    });
    if (this.filtered.length) {
      this.filtered_flight = this.filtered[0];

    } else {

      this.route.navigate(['/search_results/' + this.selectedId])
    }

  }
  onInit() {

  }
  goback() {
    this.location.back()
  }
}