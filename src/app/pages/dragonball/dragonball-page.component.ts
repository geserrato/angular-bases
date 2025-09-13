import {Component, signal} from '@angular/core';

type Character = {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal<string>('Gohan');
  powerLevel = signal<number>(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000},
    {id: 4, name: 'Piccolo', powerLevel: 6500},
    {id: 5, name: 'Frieza', powerLevel: 12000},
    {id: 6, name: 'Cell', powerLevel: 15000},
    {id: 7, name: 'Majin Buu', powerLevel: 20000},
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
