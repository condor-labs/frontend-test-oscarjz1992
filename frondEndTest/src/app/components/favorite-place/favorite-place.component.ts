import { HomeServiceService } from './../../services/home-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-place',
  templateUrl: './favorite-place.component.html',
  styleUrls: ['./favorite-place.component.styl']
})
export class FavoritePlaceComponent implements OnInit {
  
  places_favorite: any;
  @Input() set placesFavorite(data: any){
    this.places_favorite = data
  }
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    console.log(this.places_favorite)
    this.concatNameCityWithPrefixCity()
    this.convertDegrees()
  }

  public concatNameCityWithPrefixCity(){
    if(this.places_favorite.length>0){
      this.places_favorite = this.places_favorite.map(item => {
        let nameCity = `${item.name} - ${item.sys.country}`, 
            icon = item.weather[0].icon
        return {...item, name: nameCity, icon: icon}
      })
      console.log(this.places_favorite)
    }
  }

  public convertDegrees(){
    for(let i = 0, n = this.places_favorite.length; i < n; i++){
      this.places_favorite[i].main.temp = this.homeService.convertDegrees(this.places_favorite[i].main.temp)
    }
  }

}
