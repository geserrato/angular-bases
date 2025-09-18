import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAdd],
  templateUrl: './dragonball-super-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragonballSuperPageComponent {
  // Traditional Injection by constructor
  // constructor(
  //   public dragonballService: DragonballService
  // ) { }

  // New way to inject recomendation for angular team
  protected dragonballService = inject(DragonballService);

}
