import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'model'
})
export class CarPipe implements PipeTransform {
  cars = [
    {
      mark: 'Toyota',
      model: 'Camry 75',
      class: 'S-class'
    },
    {
      mark: 'Lexus',
      model: 'IS 350',
      class: 'E-class'
    },
    {
      mark: 'Mercedes-Benz',
      model: 'C63 S',
      class: 'C-class'
    },
  ];

  transform(value: string, ...args: unknown[]): unknown {
    let result = value;

    const findCar = this.cars.find(car => car.mark === value);

    if (findCar) {
      result = findCar.model;

      // Если есть параметр со значением short, то показываем shortName
      if (args.length && args[0] === 'class') {
        result = findCar.class;
      }
    }

    return result;
  }

}
