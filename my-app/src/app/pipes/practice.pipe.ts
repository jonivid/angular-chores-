import  Vacation  from 'src/app/models/Vacation';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practice'
})
export class PracticePipe implements PipeTransform {

  transform(vacations: Vacation[], destinationName: string): any {
    return vacations.filter(vacation=> (vacation.destination?.toLocaleLowerCase())?.includes(destinationName.toLowerCase()));
  }

}
