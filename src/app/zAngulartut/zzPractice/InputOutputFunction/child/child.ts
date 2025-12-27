import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  inputParentValue = input<string>('');

  outputChildData = output<string>();
  outputToParent() {
    this.outputChildData.emit('Message from Child to Parent component using Output EventEmitter');
  }
}
