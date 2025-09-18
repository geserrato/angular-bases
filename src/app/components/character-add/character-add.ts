import { Character } from './../../types/character.type';
import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal<string>('');
  powerLevel = signal<number>(0);

  newCharacter = output<Character>();

  protected addCharecter(): void {
    if (this.name() === '' || this.powerLevel() <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      powerLevel: this.powerLevel()
    }

    this.newCharacter.emit(newCharacter);

    this.name.set('');
    this.powerLevel.set(0);
  }
}
