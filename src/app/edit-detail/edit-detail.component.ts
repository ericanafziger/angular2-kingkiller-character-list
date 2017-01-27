import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
  providers: [ CharacterService ]
})
export class EditDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }
  characterId: string;
  characterToEdit;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    });
    this.characterToEdit = this.characterService.getCharacterById(this.characterId);
  }

}
