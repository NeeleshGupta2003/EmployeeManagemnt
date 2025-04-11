import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { EmplyoeeRoutingModule } from './emplyoee-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { CustomeEmailDirective } from '../shared/validators/custome-email.directive';
import { CustomMaskingDirective } from './directives/custom-masking.directive';
import { SalaryComponent } from './components/salary/salary.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegistrationComponent,
    TableComponent,
    EmployeedetailsComponent,
    MoreDetailsComponent,
    SalaryComponent,
    CustomeEmailDirective,
    CustomMaskingDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmplyoeeRoutingModule,
    SharedModule
  ],
  exports: [EmplyoeeRoutingModule],
})
export class EmplyoeeModule {}
