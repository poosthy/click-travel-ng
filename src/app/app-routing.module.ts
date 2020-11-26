import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app.component';
// import { BilletComponent } from './billet';

const routes: Routes = [
  {path: ''  , redirectTo:"/Home" ,pathMatch: "full"},
  {path: 'home'  , component: HomeComponent,},
  // {path: 'billet' , component: BilletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
