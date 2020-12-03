import { HomeServiceService } from './../../services/home-service.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.styl']
})
export class ForecastComponent implements OnInit {
  forecast: any = []
  forecastCopy: any = []
  countPage: number = 1
  itemsPerPage: number = 3
  isDisabledNextButton: boolean = false
  isDisabledPrevButton: boolean = false
  @Input() set forecasts(data: any){
    this.forecast = data
    this.forecastCopy = Object.assign({}, data)
    /** GET DAY AND CONVERT DEGREES */
    for(let i = 0, n = this.forecastCopy.list.length; i < n; i++){
      this.forecastCopy.list[i].main.temp = this.homeService.convertDegrees(this.forecastCopy.list[i].main.temp)
      this.forecastCopy.list[i].date = this.homeService.getNameDayOfDate(this.forecastCopy.list[i].date)
    }
  }
  constructor(private homeService: HomeServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initCarousel()
  }
  
  public initCarousel(){
    this.forecast.list = this.forecastCopy.list.slice(0, (this.itemsPerPage*this.countPage))
    this.countPage++
  }

  /** CHANGE ITEMS PAGE */
  public newPageSlider(){
    if(this.countPage === 1){
      this.forecast.list = this.forecastCopy.list.slice(0, (this.itemsPerPage*this.countPage))
      this.countPage++
    }else if((this.itemsPerPage*this.countPage)<= this.forecastCopy.list.length){
      this.forecast.list = this.forecastCopy.list.slice(((this.itemsPerPage*this.countPage)-this.itemsPerPage), this.itemsPerPage*this.countPage)
      this.countPage++
    }else{
      this.countPage = 1
      this.newPageSlider()
    }
  }
  

}
