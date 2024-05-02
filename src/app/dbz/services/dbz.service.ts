import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public character: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 7500,
    },
  ];

  public characterEmit(character: Character): void {
    const newCharacter = { id: uuid(), ...character };
    this.character.push(newCharacter);
  }

  // public elementDeletedForId(index: number): void {
  //   this.character.splice(index, 1);
  // }
  public deleteCharacterById(id: string): void {
    this.character = this.character.filter((value) => value.id !== id);
  }
}
