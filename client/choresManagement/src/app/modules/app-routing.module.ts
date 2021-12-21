import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChoreComponent } from '../components/add-chore/add-chore.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'addchore', component:AddChoreComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"*" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
