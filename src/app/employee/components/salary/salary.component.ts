import { Component } from "@angular/core";
import { Employee } from "../../models/employee";
import { NgForm } from "@angular/forms";
import { Salary } from "../../models/salary";

@Component({
    selector:'app-salary',
    templateUrl:'./salary.component.html',
    styleUrls:['./salary.component.css']
})
export class SalaryComponent {
ischecked: any=false;
selectedEmp: any;
onSubmit(_t13: NgForm) {
throw new Error('Method not implemented.');
}
isFormDisabled=true;
employee = new Employee();
salary = new Salary();
employees:string[]=['Ram','Neelesh','Vivek','Shubh','Abhishek','Anice','Kalyani','Pankaj','Ritu'];
years:number[]=[2025,2024]
months:string[]=['April','March']
}