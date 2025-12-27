import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  inputValueToChild = signal('Pass value to child component using input ');

  outputFromChildData = signal<string>('');
  outputFromChild($event: any) {
    this.outputFromChildData.set($event);
  }
}
