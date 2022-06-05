import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
    path:'update-tournament',
    loadComponent: () => import('./Components/update-tour-form-lone/update-tour-form-lone.component').then((lone) => lone.UpdateTourFormLoneComponent)
  },
  {
    path: 'create-tour',
    loadComponent: () => import('./Components/create-tour-form-lone/create-tour-form-lone.component').then((lone) => lone.CreateTourFormLoneComponent)
  },
  {
    path:'delete-tour',
    loadComponent: () => import('./Components/delete-tour-lone/delete-tour-lone.component').then((lone) => lone.DeleteTourLoneComponent)
  },
  {
    path: 'create-player',
    loadComponent: () => import('./Components/create-player-form-lone/create-player-form-lone.component').then((lone) => lone.CreatePlayerFormLoneComponent)
  },
  {
    path:'create-format-or-pairing-style-form',
    loadComponent: () => import('./Components/create-format-form/create-format-form.component').then((lone) => lone.CreateFormatFormComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
