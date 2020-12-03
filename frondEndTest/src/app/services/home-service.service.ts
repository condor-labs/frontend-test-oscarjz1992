import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) { }

  /** BASE DE CONSUMO DE ENDPOINTS */
  baseUrl: string = environment.BASE_URL
  
  public getData(service: string): Observable <any>{
    /** VALIDATE 1 - (SEDES) RETORNA TODAS LAS SEDES EXISTENTES */
    /** VALIDATE 2 - (PRONOSTICO) RETORNA TODOS LOS PRONOSTICOS */
    /** VALIDATE 3 - (CIUDAD) RETORNA TODAS LAS CIUDADES */
    let serviceConsult = service === 'Sedes' ? `${this.baseUrl}818d0158-727b-461e-9f76-06734ed7e582` : service === 'Pronostico' ? `${this.baseUrl}73c29128-d158-40db-aeae-ea78a0d762b7` : service === 'Ciudad' ? `${this.baseUrl}f8926877-849a-416f-8226-9fd9d9fc5e07` : ""
    return this.http.get<any>(serviceConsult);
  }
  
  /** CONVERT KELVIN TO CELSIUS */
  public convertDegrees(kelvin: number){
    let celsius = kelvin-273.15
    return celsius.toFixed(0)
  }
  
  /** RETURN NAME OF THE DAY OF A DATE */
  public getNameDayOfDate(date: string){
    let nameDay = moment(moment(date).format("YYYY-MM-DD")).format('dddd')
    return nameDay
  }

}
