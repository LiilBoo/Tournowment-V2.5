import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
//*---------- My stuff ---------
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UpdateTourFormLoneComponent } from './Components/update-tour-form-lone/update-tour-form-lone.component';
import { DeleteTourLoneComponent } from './Components/delete-tour-lone/delete-tour-lone.component';
import { CreateTourFormLoneComponent } from './Components/create-tour-form-lone/create-tour-form-lone.component';
import { CreatePlayerFormLoneComponent } from './Components/create-player-form-lone/create-player-form-lone.component';



const adminComponents = [
  DashboardComponent,
];

@NgModule({
  declarations: [
    ...adminComponents,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
