import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { of } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {

  constructor(
    private employeeServices: EmployeeService,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public employees: Employee[] = [];
  public employee!: Employee;
  public datasource = new MatTableDataSource<Employee>();

  displayedColumns: string[] = [
    'index',
    'name',
    'age',
    'gender',
    'department',
    'doj',
    'active',
    'actions'
  ];

  ngOnInit() {
    this.getAllStudents();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  getAllStudents() {
   this.employees = this.employeeServices.loadEmployee();
   console.log(this.employees);
  //  this.calculateAge();
    this.datasource = new MatTableDataSource<Employee>(this.employees);
    setTimeout(() => {
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }
 
  getSearchInputData(data: any) {
    let searchInput = (data.target as HTMLInputElement).value;
    this.datasource.filter = searchInput.trim().toLowerCase();
  }

  getStudentIdForDeleteData(id: number) {
    this.employeeServices.deleteEmp(id);
    this.employees = this.employeeServices.loadDatAfter();
    this.refreshTable();
    window.alert("Successfully deleted...");
  }
  
  refreshTable() {
    this.datasource = new MatTableDataSource<Employee>(this.employees);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  getStudentIdForShowingData(id: any) {
    this.router.navigate(['/getById', id]);
  }

  goToRegister(){
    this.router.navigate(['/post'])
  }

  getStudentIdForUpdateData(id:any){
    this.router.navigate(['/put',id+1])
  }

  goToDetailedComponent(id:any) {
   this.router.navigate(['/moredetails',id])
    }

   
}
