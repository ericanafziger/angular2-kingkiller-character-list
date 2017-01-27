import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CharacterService ]
})
export class HomeComponent implements OnInit {
  
  characters;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
