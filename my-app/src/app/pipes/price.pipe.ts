import { Pipe, PipeTransform } from '@angular/core';
import Vacation from '../models/Vacation';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(vacations: Vacation[], vacationPrice: number): any {
    const filtered = vacations.filter(vacation=>vacation.price >= vacationPrice)
    return filtered
  }

}
