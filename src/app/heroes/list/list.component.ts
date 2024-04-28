import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public nameHeroes: string[] = [
    'Spiderman',
    'Superman',
    'Ironman',
    'Chavo del Ocho',
    'Chapulin colorado',
  ];
  public deleteHero?: string;

  public deleteLastHero(): void {
    this.deleteHero = this.nameHeroes.pop();
  }
}
