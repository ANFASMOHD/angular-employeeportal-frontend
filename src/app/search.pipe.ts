import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
/* first argument should  be the item which have to be transformed second*/
  transform(allEmployee: any[], searchkey:string): any[] {

    const result:any =[]

    if(!allEmployee || searchkey===""){
      return allEmployee;
    }
    allEmployee.forEach((item:any)=>{
      /* include return boolean values */
     if(item.name.trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
      result.push(item)
     }
     
    })
     return result
  }

}
