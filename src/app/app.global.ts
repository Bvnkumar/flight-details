import { Injectable } from '@angular/core';
@Injectable()
export class AppGlobals {
  passengers = [{ name: "Narendra", pnr: "123", luggage: 2, flight_no: "air123", destination: "Delhi" }, { name: "venkat", pnr: "234", luggage: 3, flight_no: "jet123", destination: "Mumbai" },{ name: "kumar", pnr: "234", luggage: 2, flight_no: "jet123", destination: "Mumbai" },{ name: "sarath", pnr: "234", luggage: 2, flight_no: "jet123", destination: "Mumbai" },{ name: "shyam", pnr: "123", luggage: 2, flight_no: "air123", destination: "Delhi" }]
  flights = [{ name: "Trujet", flight_no: 'jet123', destination: "Mumbai", image: "https://i.ndtvimg.com/i/2015-07/trujet-turbo-megha_625x300_71436298058.jpg" }, { name: "Airasia", flight_no: "air123", destination: "Delhi", image: "https://images.indianexpress.com/2018/06/airasia-759.jpg" }]
}