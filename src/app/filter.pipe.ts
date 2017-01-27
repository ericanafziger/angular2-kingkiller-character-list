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
      } else if (filter === "maleCharacters") {
        for (var i=0; i <input.length; i++) {
          if (input[i].gender === "Male") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filter === "humanCharacters"){
        for (var i=0; i <input.length; i++) {
          if (input[i].species === "Human") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (filter === "faeCharacters") {
        for (var i=0; i <input.length; i++) {
          if (input[i].species === "Fae") {
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
