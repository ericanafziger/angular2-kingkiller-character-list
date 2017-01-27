import { Component } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
  providers: [ CharacterService ]
})
export class NewCharacterComponent {

  constructor(private chracterService: CharacterService, private router: Router) { }

  submitNewCharacter(description: string, name: string, tagLine: string, category: string, gender: string, species: string) {
    var newCharacter = new Character(description, name, tagLine, category, species, gender);
    this.chracterService.addCharacter(newCharacter);
    this.router.navigate(['']);
  }
}
