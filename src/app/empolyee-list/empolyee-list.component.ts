import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../services/adminapi.service';
import { employeeModel } from '../employee-model';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {
/* Onint is an interface to implement ngOnInit  */

   allEmployee:employeeModel[]=[]
   
   searchKey: string=""
   /* paginaton */
   p:number=1;

  constructor(private api:AdminapiService){}
   
  /* lifecylcle hook - call just after the components created and constructor is called  */
  ngOnInit(): void {
  this.allEmployeeDetails()
  }

  allEmployeeDetails(){
      this.api.getAllEmployeeApi().subscribe({
        next:(res:any)=>{
     
        this.allEmployee=res
        console.log(this.allEmployee);
        

        },
      error:(err:any)=>{
        console.log(err);
        
      }
        
        
      })
  }

  removeEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployeeDetails()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    
      
    })
  }

  sortId(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }

  generatePDF(){
    /* create a object foe jsPDF  */
    const pdf = new jsPDF()

    let head : [['Id','Employee name','Email','Status']]

    let body : any =[]

    this.allEmployee.forEach((item:any)=>{
      body.push([item.id,item.name,item.email,item.status])
    })
    /* fontsize */
    pdf.setFontSize(16)

    /* title */
    pdf.text('Employee Details',10,10)

    /* table */

    autoTable(pdf,{head:body})

    /* to open in new tab */
    pdf.output('dataurlnewwindow')
     /* save and download */
    pdf.save('employee.pdf')
  }

 

}
