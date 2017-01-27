import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css'],
  providers: [ CharacterService ]
})
export class EditCharacterComponent implements OnInit {
  characters;
  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }
  toEditCharacter(characterToEdit) {
    this.router.navigate(['edit-character', characterToEdit.$key]);
  }

}
