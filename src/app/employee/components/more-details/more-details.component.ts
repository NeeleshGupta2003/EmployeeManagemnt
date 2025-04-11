import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
})
export class MoreDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private employeeServices: EmployeeService
  ) {}
  ngOnInit() {
    this.getEmpId();
  }

  public selectedId:any;
 public employee!:Employee;

  public getEmpId() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.selectedId = param.get('id');
    });
    this.getDataById();
  }

  getDataById(){
    this.employee = this.employeeServices.getEmployeeById(this.selectedId);
    }
}
