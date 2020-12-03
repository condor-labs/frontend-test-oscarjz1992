import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './../../services/home-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.styl']
})
export class ActivitiesComponent implements OnInit {

  constructor(private homeService: HomeServiceService) { }
  venues: any;
  loading: boolean = false
  headquarters: any;
  forecasts: any;
  favoritePlaces: [] = []
  headQuartesSuggested: any;
  citiesRecommendedFilter: any[];
  ngOnInit(): void {
    this.getPronostico()
    this.getSedes()
    this.getCiudades()
  }
  
  /** RETORNA TODAS LAS SEDES EXISTENTES */
  public  getSedes(){
    this.loading = true
    this.homeService.getData("Sedes").subscribe(response =>{
      this.loading = false
      this.venues = response
      if(this.venues.places.length>0){
        this.headquarters = this.venues.places.find(venue => venue.main_headquarter)
        this.headquarters.main.temp = this.homeService.convertDegrees(this.headquarters.main.temp)
        this.favoritePlaces = this.venues.places.filter(venue => !venue.main_headquarter)
        this.headQuartesSuggested = this.venues.places.find(venue => venue.name === 'Cartagena')
        this.getForecastSuggested()
      }
      console.group("Sedes")
      console.log(response)
    })
  }

  /** RETORNA TODOS LOS PRONOSTICOS */
  public getPronostico(){
    this.loading = true
    this.homeService.getData("Pronostico").subscribe(response =>{
      this.loading = false
      console.group("Pronostico")
      console.log(response)
      this.forecasts = response
    })
    
  }

  /** RETORNA TODAS LAS CIUDADES EXISTENTES */
  public getCiudades(){
    this.loading = true
    this.homeService.getData("Ciudad").subscribe(response =>{
      this.loading = false
      console.group("Ciudad")
      console.log(response)
      this.citiesRecommendedFilter = response.result
      if(this.citiesRecommendedFilter.length>0){
        for(let i = 0, n = this.citiesRecommendedFilter.length; i < n; i++){
          this.citiesRecommendedFilter[i].main.temp = this.homeService.convertDegrees(this.citiesRecommendedFilter[i].main.temp)
        }
      }
      this.citiesRecommendedFilter = this.citiesRecommendedFilter.filter(citie => +citie.main.temp > 24 && +citie.main.temp < 30)
      console.groupEnd()
    })
  }

  public getForecastSuggested(){
    let objectCityWithForecasts = this.forecasts,
        resultTemp = objectCityWithForecasts.list.filter(place => +place.main.temp > 25 && +place.main.temp < 28),
        resultOrder = this.sortForecastsForHumedity(resultTemp)[0];
        resultOrder.name = `${this.forecasts.city.name}`
        resultOrder.sys = {country: this.forecasts.city.country}
        this.headQuartesSuggested = resultOrder
  }

  public sortForecastsForHumedity(array: any){
    return array.sort((a,b) => {
      return a.main.humidity > b.main.humidity ? 1 : a.main.humidity < b.main.humidity ? -1 : 0
    })
  }


}
