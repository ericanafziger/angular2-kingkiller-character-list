import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { ActivatedRoute, Params, Router  } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
  providers: [ CharacterService ]
})
export class EditDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private characterService: CharacterService) { }
  characterId: string;
  characterToEdit;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.characterId = urlParameters['id'];
    });
    this.characterToEdit = this.characterService.getCharacterById(this.characterId);
  }
  goBack() {
    this.router.navigate(['edit-character']);
  }
  saveEdit(name:string, tagLine:string, description:string, category:string) {
    var editedCharacter = new Character(description, name, tagLine, category);
    this.characterService.editCharacter(editedCharacter, this.characterId);
    this.router.navigate(['edit-character']);
  }
  deleteCharacter() {
    if(confirm("Are you sure you want to delete this character?")) {
      this.characterService.deleteCharacter(this.characterId);
      this.router.navigate(['edit-character']);
    }
  }
}
