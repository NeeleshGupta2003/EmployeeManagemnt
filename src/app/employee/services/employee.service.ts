import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  public employees: Employee[] = [];
  public dummyEmployees: Employee[] = [];
  employee = new Employee();

  loadEmployee(): Employee[] {
    if (this.employees.length === 0) {
        this.employees = [
          {
            name: 'Kavita',
            address: 'Rajiv Nagar',
            city: 'Jabalpur',
            zipCode: '482001',
            state: 'Madhya Pradesh',
            dob: new Date('2000-04-03'),
            doj: new Date('2022-06-15'),
            age:25,
            gender: 'Female',
            phone: '7890091853',
            email: 'kv1@gmail.com',
            department:'BR'
          },
          {
            name: 'Rahul',
            address: 'Nehru Colony',
            city: 'Bhopal',
            zipCode: '462001',
            state: 'Madhya Pradesh',
            dob: new Date('1998-07-19'),
            doj: new Date('2021-01-10'),
            age:27,
            gender: 'Male',
            phone: '9827091234',
            email: 'rahul@example.com',
             department:'CS'
          },
          {
            name: 'Anjali',
            address: 'Shivaji Nagar',
            city: 'Indore',
            zipCode: '452001',
            state: 'Madhya Pradesh',
            dob: new Date('1999-02-15'),
            doj: new Date('2023-03-01'),
            age:26,
            gender: 'Female',
            phone: '7012345678',
            email: 'anjali@gmail.com',
            department:'HR'
          },
      ];
    }
    return this.employees;
  }

  public addEmployees(employeeForm: Employee) {
    const newEmployee: Employee = {
      name: employeeForm.name,
      address: employeeForm.address,
      city: employeeForm.city,
      zipCode: employeeForm.zipCode,
      dob: employeeForm.dob,
      age:employeeForm.age,
      department:employeeForm.department,
      gender: employeeForm.gender,
      phone: employeeForm.phone,
      email: employeeForm.email,
      state:employeeForm.state,
      doj:employeeForm.doj
    };

    this.employees.push(newEmployee);
    window.alert('Employee successfully added...');
  }

  public getEmployeeById(emp_id: number) {
    if (this.employees.length === 0) {
      this.loadEmployee();
    }
    return this.employees[emp_id - 1];
  }

  public deleteEmp(id: any) {
    if (id >= 0 && id < this.employees.length) {
      this.employees.splice(id, 1);
    }
  }
  editEmployee(id: any, employeeForm: Employee) {
    const updatedEmployee: Employee = {
      name: employeeForm.name,
      address: employeeForm.address,
      city: employeeForm.city,
      zipCode: employeeForm.zipCode,
      dob: employeeForm.dob,
      age:employeeForm.age,
      department:employeeForm.department,
      gender: employeeForm.gender,
      phone: employeeForm.phone,
      email: employeeForm.email,
      state:employeeForm.state,
      doj:employeeForm.doj
    };
    this.employees[id-1] = updatedEmployee;
    window.alert('Employee details updated successfully!');
  }

  loadDatAfter(): Employee[] {
    return this.employees;
  }
}
