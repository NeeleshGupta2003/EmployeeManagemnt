import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {

constructor(private route:ActivatedRoute,private router:ActivatedRoute, private employeeService: EmployeeService){}
public name:any;
public selectedId:any;
public employee!:Employee;

ngOnInit(){
  this.getIdForDisplayData();
}

getIdForDisplayData() {
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.selectedId = params.get('id');
    this.getDataById();
});
}

getDataById(){
this.employee = this.employeeService.getEmployeeById(this.selectedId);
}


// getStudentById(stdId:any){
//   this.studentService.getStudentById(stdId).subscribe({
//     next:(data) => {
//     this.student = data;

// console.log(this.student);
//   },
// error:(err)=>{
//   console.log(err);
// }}
// );
// }

// gotoStudentList() {
//   let selectedIds = this.selectedId;
//   this.router.navigate(['/studentList',{id:selectedIds}]);
//   }

  // nextStd() {
  // let nextId =parseInt(this.id)+1;
  // let nextName=String(this.name);
  // this.router.navigate(['/studentList',nextId,nextName]);
  // }
  // prevStd() {
  //   let prevId =parseInt(this.id)-1;
  //   let prevName=String(this.name);
  //   this.router.navigate(['/studentList',prevId,prevName]);
  // }
}




