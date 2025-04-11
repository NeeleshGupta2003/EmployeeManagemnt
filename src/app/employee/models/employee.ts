import * as moment from "moment";

export class Employee {
    id?:number;
    name?: string="neelesh gupta";
    address?: string="1724, Rajiv Nagar";
    city?: string="Jabalpur";
    zipCode?: string="482001";
    age?:number;
    dob?:Date= new Date('2003-11-18');
    doj?:Date= new Date('2023-03-01');
    gender?: string;
    phone?:string= '7898091853';
    email?:string= 'neel.gupta@gmail.com';
    department?:string;
    state?:string='MP';
    active?:boolean;
}












