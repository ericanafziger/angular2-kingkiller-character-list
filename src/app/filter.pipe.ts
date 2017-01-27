import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input, filter): any {
    var output = [];
    if (input!==null) {
      if (filter === "femaleCharacters") {
        for (var i=0; i <input.length; i++) {
          if (input[i].gender === "Female") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    } else {
      return output;
    }
  }

}
