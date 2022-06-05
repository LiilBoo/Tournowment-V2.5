import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgDashboardComponent } from './Pages/org-dashboard/org-dashboard.component';

//* Will use Resolvers to give different behavior to standalone components

const routes: Routes = [
  {path:'', component: OrgDashboardComponent},
  {
    path:'create-tour', 
    loadComponent: () => import('../AdminModule/Components/create-tour-form-lone/create-tour-form-lone.component').then((lone) => lone.CreateTourFormLoneComponent)
  },
  {
    path: 'update-my-tours',
    loadComponent: () => import('../AdminModule/Components/update-tour-form-lone/update-tour-form-lone.component').then((lone) => lone.UpdateTourFormLoneComponent)
  },
  {
    path:'delete-my-tours',
    loadComponent: () => import('../AdminModule/Components/delete-tour-lone/delete-tour-lone.component').then((lone) => lone.DeleteTourLoneComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisatorRoutingModule { }
