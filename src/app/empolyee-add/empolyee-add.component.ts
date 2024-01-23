import { Component } from '@angular/core';
import { employeeModel } from '../employee-model';
import { AdminapiService } from '../services/adminapi.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empolyee-add',
  templateUrl: './empolyee-add.component.html',
  styleUrls: ['./empolyee-add.component.css']
})
export class EmpolyeeAddComponent {
/* variable to store the value from the input box which have structure of employee model */
  employee:employeeModel={}


  constructor(private api:AdminapiService,private router:Router){}

  cancelEmployee(){
    this.employee={}
  }

  addEmployee(){
    console.log(this.employee);

    if(!this.employee.name || !this.employee.email || !this.employee.id ||!this.employee.status){
      Swal.fire({
        icon:"info",
        title:"Ooops...",
        text:`Please fill the completely`
       });
    }
    else{
      this.api.addEmployeeApi(this.employee).subscribe({
        next:(res:employeeModel)=>{
          console.log(res);
          Swal.fire({
            icon:"success",
            title:"WOW",
            text:`${res.name} Added Successfully`
           });
           this.employee={}
           this.router.navigateByUrl('employees')
          
        }
        ,
        error:(err:any)=>{
          console.log(err);
          Swal.fire({
            icon:"error",
            title:"Ooops.......",
            text:`failed`
           });
          
        }
      })
    }

   
    
  }

}
