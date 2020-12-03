import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { OutdoorActivitiesModule } from './outdoor-activities/outdoor-activities.module';
import { ActivitiesComponent } from './outdoor-activities/activities/activities.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ToastrModule } from 'ngx-toastr';
import { FavoritePlaceComponent } from './components/favorite-place/favorite-place.component';
import { HeadquearterSuggestedComponent } from './components/headquearter-suggested/headquearter-suggested.component';
import { PlaceToVisitComponent } from './components/place-to-visit/place-to-visit.component'


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ForecastComponent,
    FavoritePlaceComponent,
    HeadquearterSuggestedComponent,
    PlaceToVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    OutdoorActivitiesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
