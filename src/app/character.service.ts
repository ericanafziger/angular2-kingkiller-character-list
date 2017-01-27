import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.characters = angularFire.database.list('characters');
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterById(characterId: string) {
    return this.angularFire.database.object('/characters/' + characterId)
  }

  addCharacter(characterToAdd: Character) {
    this.characters.push(characterToAdd);
  }

  editCharacter(editedCharacter: Character, characterId: string) {
    var characterToEdit = this.getCharacterById(characterId);
    characterToEdit.update({
      name: editedCharacter.name,
      tagLine: editedCharacter.tagLine,
      description: editedCharacter.description,
      category: editedCharacter.category,
      species: editedCharacter.species,
      gender: editedCharacter.gender,
    });
  }

  deleteCharacter(characterId: string) {
    var characterToDelete = this.getCharacterById(characterId);
    characterToDelete.remove();
  }
}
