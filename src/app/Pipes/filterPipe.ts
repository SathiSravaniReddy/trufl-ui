import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tablefilter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any,seatedvalues:any) {       
        var arr = [];
        value.forEach((item) => {
            if (item.TableType == seatedvalues) {
                arr.push(item);
            }
        })
        return arr;
       
    }
}
