import { OutdoorActivitiesModule } from './outdoor-activities/outdoor-activities.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'activities'
  },
  {
    path: 'outdoor_activities',
    loadChildren: () => import(`./outdoor-activities/outdoor-activities.module`).then(m => m.OutdoorActivitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
