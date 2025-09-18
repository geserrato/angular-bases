import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../types/character.type';


const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() { }

  public characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
    console.log(`Character count ${this.characters().length}`)
  });

  public addCharacter(character: Character): void {
    this.characters.update((list) => [...list, character]);
  }
}
