import { InputSignal } from '@angular/core';
import { Component, input } from '@angular/core';
import { Character } from '../../../types/character.type';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  listName: InputSignal<string> = input.required<string>();
  characters: InputSignal<Character[]> = input.required<Character[]>();
}
