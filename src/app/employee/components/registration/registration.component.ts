import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import * as moment from 'moment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employees: Employee[] = [];
  employee = new Employee();
  selectedId: number | null = null;

  states: string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
                      "Gujarat","Haryana","Himachal Pradesh", "Jharkhand","Karnataka", "Kerala", "Madhya Pradesh",
                      "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan", 
                      "Sikkim", "Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
                       ];

citiesByState: { [key: string]: string[] } = {
 "Andhra_Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
 "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Bomdila"],
 "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
 "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
 "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba"],
 "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
 "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
 "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
 "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan"],
 "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
 "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
 "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
 "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
 "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
 "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Bishnupur"],
 "Meghalaya": ["Shillong", "Tura", "Nongstoin", "Baghmara"],
 "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
 "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
 "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
 "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
 "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
 "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
 "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
 "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
 "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
 "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
 "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Haldwani"],
 "West Bengal": ["Kolkata", "Asansol", "Durgapur", "Siliguri"]
  };
   
  departments:string[]=['Admin','CS','IT','QA','BR','HR'];
  genders:string[]=['Male','Female','Other'];
  

  ngOnInit() {
    this.getIdForEditEmployee();
  }

  onSubmit(employeeForm: NgForm) {
    if (this.selectedId != null) {
      employeeForm.value.age = this.calculateAge(employeeForm.value.dob);
      this.employeeService.editEmployee(this.selectedId, employeeForm.value);
      this.selectedId = null;
    } else {
      employeeForm.value.age = this.calculateAge(employeeForm.value.dob);
      this.employeeService.addEmployees(employeeForm.value);
    }
    employeeForm.resetForm();
  }

  getIdForEditEmployee() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const idParam = param.get('id');
      if (idParam !== null) {
        this.selectedId = Number(idParam);
        this.employee = this.employeeService.getEmployeeById(this.selectedId);
      }
    });
  }

  isFormDisabled: boolean = true;
  ischecked: boolean = false;
  disableSelect = new FormControl(false);
  selectedDate: Date | null = null;


  calculateAge(getDob:Date):number{
    const birthDate = getDob ;
    const birthMoment = moment(birthDate, 'DD-MM-YYYY');
    const empAge = moment().diff(birthMoment, 'years');
    return empAge;
  }

empCities:string[]=[];
  getEmployeeState(selectedState:any){
  let empState = selectedState.target.innerText;
    if (this.citiesByState[empState]) {
     this.empCities = this.citiesByState[empState];
    } 
  }
}
