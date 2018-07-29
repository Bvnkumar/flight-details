	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { FormsModule } from '@angular/forms';
	import { AppComponent } from './app.component';
	import { loginComponent } from './login/login.component';
	import { RouterModule, Routes } from '@angular/router';
	import { ReactiveFormsModule } from '@angular/forms';
	import { SearchComponent } from './search/search.component';
	import { SearchResultsComponent } from './search_results/search_results.component';
	import { FlightComponent } from './flight/flight.component';
	import { PassengerComponent } from './passenger/passenger.component';
	import {HeaderComponent} from './header/header.component'
	import {AppGlobals} from './app.global';

	const routes: Routes = [
	  {
	    path: 'login', component: loginComponent
	  },
	  {
	    path: '', component: loginComponent, pathMatch: 'full'
	  },
	  { path: 'search', component: SearchComponent,pathMatch: 'full' },
	  {
	    path: 'search_results/:term', component: SearchResultsComponent,pathMatch: 'full'
	  },{
	    path:'flight/:id',component:FlightComponent
	  },
	  {
	    path:'passenger/:name',component:PassengerComponent,pathMatch: 'full'
	  }

	]
	@NgModule({
	  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule],
	  declarations: [AppComponent, loginComponent, SearchComponent, SearchResultsComponent,FlightComponent,PassengerComponent,HeaderComponent],
	  providers: [AppGlobals],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }