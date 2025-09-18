import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../types/character.type';
import { CharacterAdd } from "../../components/character-add/character-add";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAdd],
  templateUrl: './dragonball-super-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonballSuperPageComponent {

  name = signal<string>('Gohan');
  powerLevel = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9001 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 }
  ]);

  protected addCharacter(character: Character): void {
    console.log({ character });
    this.characters.update((list) => [...list, character]);
  }
}
