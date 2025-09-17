import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../types/character.type';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {

  name = signal<string>('Gohan');
  powerLevel = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9001 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 }
  ]);

  protected addCharecter(): void {
    if (this.name() === '' || this.powerLevel() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      powerLevel: this.powerLevel()
    };

    this.characters.update(characters => [...characters, newCharacter]);
    this.name.set('');
    this.powerLevel.set(0);
  }
}
