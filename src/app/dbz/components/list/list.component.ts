import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public idEmit: EventEmitter<string> = new EventEmitter();
  public onDeleteId(id?: string): void {
    if (!id) return;
    this.idEmit.emit(id);
  }
  //@Output()
  // public indexEmit: EventEmitter<number> = new EventEmitter();
  // public onDeleteId(index: number): void {
  //   this.indexEmit.emit(index);
  //   console.log(index);
  // }
}
