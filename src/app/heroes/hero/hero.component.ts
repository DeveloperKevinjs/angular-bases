import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalized(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeNameHero(): void {
    this.name = 'SuperMan';
  }

  public changeAgeHero(): void {
    this.age = 50;
  }

  public reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
