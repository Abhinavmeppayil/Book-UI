import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allbooks:[],searchkey:string,bookname:string ): any[] {

    const result:any=[]
    if(!allbooks || searchkey=='' || bookname==''){
      return allbooks

    }
    //searching

    allbooks.forEach((product:any)=>{
      if(product[bookname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product)

      }
    }

    )
    return result;
  }

}
