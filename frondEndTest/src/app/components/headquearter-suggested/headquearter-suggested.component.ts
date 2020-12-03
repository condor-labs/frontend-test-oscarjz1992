import { Component, Input, OnInit } from '@angular/core';
import { HomeServiceService } from './../../services/home-service.service';

@Component({
  selector: 'app-headquearter-suggested',
  templateUrl: './headquearter-suggested.component.html',
  styleUrls: ['./headquearter-suggested.component.styl']
})
export class HeadquearterSuggestedComponent implements OnInit {
  head_quarter_suggested: any;
  @Input() set headQuarterSugested(data: any){
    this.head_quarter_suggested = data
    this.head_quarter_suggested.nameCountry = `${this.head_quarter_suggested.name} - ${this.head_quarter_suggested.sys.country}`
  }
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }



  

}
