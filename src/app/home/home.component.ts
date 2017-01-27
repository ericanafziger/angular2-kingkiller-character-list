import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CharacterService ]
})
export class HomeComponent implements OnInit {

  characters;
  selectedCategory: string = "allCharacters";
  
  onChange(optionFromMenu) {
    this.selectedCategory = optionFromMenu;
  }

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }
  toCharacterDetail(clickedCharacter) {
    this.router.navigate(['characters', clickedCharacter.$key])
  }

}
