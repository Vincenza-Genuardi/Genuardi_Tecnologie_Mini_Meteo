import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { TODAYComponent } from './today/today.component';
import { WEEKLYComponent } from './weekly/weekly.component';
import { INFORMAZIONIComponent } from './informazioni/informazioni.component';

const routes: Routes = [
  { path: '', redirectTo: 'HOME', pathMatch: 'full'},
  { path: 'HOME', component: HOMEComponent},
  { path: 'TODAY', component: TODAYComponent},
  { path: 'WEEKLY', component: WEEKLYComponent},
  { path: 'INFORMAZIONI', component: INFORMAZIONIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
