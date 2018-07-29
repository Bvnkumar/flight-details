import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppGlobals } from '../app.global';
@Component({
  selector: 'search_results',
  templateUrl: 'search_results.component.html',
  styleUrls: ['./search_results.component.scss']
})

export class SearchResultsComponent {
  term;
  filtered_flight=[];
  total_flights=[];
  constructor(public router: ActivatedRoute, public appglobal: AppGlobals) {
    this.term = this.router.snapshot.params.term;
    console.log("this.router.snapshot.params.term", this.router.snapshot.params.term);
    this.filtered_flight = this.appglobal.flights.filter(data => {
      console.log("data", data)
      if (data.flight_no == this.term) {
        return true;
      }
    });
    this.total_flights=this.appglobal.flights;
  }
}