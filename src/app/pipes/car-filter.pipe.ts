import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string,color:string,brand:string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    color = color ? color.toLocaleLowerCase() : '';
    brand = brand ? brand.toLocaleLowerCase() : '';
    return filterText || color || brand
      ? value.filter(
          (c: Car) =>
            c.modelName?.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            c.colorName?.toLocaleLowerCase().indexOf(color) !== -1 ||
            c.brandName?.toLocaleLowerCase().indexOf(brand) !== -1
        )
      : value;
  }

}
