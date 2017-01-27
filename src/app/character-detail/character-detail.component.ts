import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  providers: [ CharacterService ]
})
export class CharacterDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }
  characterId: string;
  characterToDisplay;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    });
    this.characterToDisplay = this.characterService.getCharacterById(this.characterId);
  }

}
