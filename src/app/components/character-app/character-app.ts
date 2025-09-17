import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-character-app',
  imports: [],
  templateUrl: './character-app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAppComponent {
  name = signal<string>('');
  powerLevel = signal<number>(0);


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
