import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TableComponent } from './components/table/table.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';


const routes:Routes=[
  {path:'',children:[
  { path: 'home', component: HomeComponent },
  { path: 'post', component: RegistrationComponent },
  { path: 'table', component: TableComponent },
  { path: 'moredetails/:id', component: MoreDetailsComponent },
  { path: 'getById/:id', component: EmployeedetailsComponent},
  { path: 'put/:id', component: RegistrationComponent},
  // { path: 'delete/:id', component: TableComponent},
  // { path: 'updateForm/:s_Id', component: RegistrationformComponent },
  // { path: 'support', component: SupportComponent },
  // { path: '**', component: PagenotfoundComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplyoeeRoutingModule { }
