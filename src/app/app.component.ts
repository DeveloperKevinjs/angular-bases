import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter: number = 10;
  valueDefault: number = this.counter;

  increiseBy(value: string) {
    if (value.toUpperCase() == 'S') {
      this.counter += 1;
    } else {
      this.counter -= 1;
    }
  }
  resetButton() {
    this.counter = this.valueDefault;
  }
}
