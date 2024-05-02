import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  character(): Character[] {
    return [...this.dbzService.character];
  }
  idEmit(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  characterEmit(character: Character): void {
    this.dbzService.characterEmit(character);
  }
}
