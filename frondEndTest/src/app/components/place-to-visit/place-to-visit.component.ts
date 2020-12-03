import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-place-to-visit',
  templateUrl: './place-to-visit.component.html',
  styleUrls: ['./place-to-visit.component.styl']
})
export class PlaceToVisitComponent implements OnInit {
  
  cities: any[];
  @Input() set citiesRecommended(data: any){
    this.cities = data
  }
  constructor(private toastr: ToastrService) { }
  
  ngOnInit(): void {
    console.log(this.cities)
  }
  
  public redirectPage(){
    this.toastr.success("Te estamos redirigiendo a la dirección de enlace.")
  }

}
