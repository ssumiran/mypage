import { Component, isWritableSignal, signal, WritableSignal, ɵunwrapWritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simplemath',
  imports: [FormsModule],
  templateUrl: './simplemath.html',
  styleUrl: './simplemath.css',
})
export class Simplemath {
  num1 = 0;
  num2 = 0;
  result: WritableSignal<number> = signal(0);
  invalid: WritableSignal<string> = signal('');

  resetValues() {
    this.result.set(0);
    this.invalid.set('');
  }

  addNumbers() {
    this.resetValues();
    if (isNaN(this.num1) || isNaN(this.num2)) {
        this.invalid.set('Please enter valid numbers!'); 
    } else {
      this.result.set(this.num1 + this.num2);
    }
  }

  multiplyNumbers() {
    this.resetValues();
    if (isNaN(this.num1) || isNaN(this.num2)) {
      this.invalid.set('Please enter valid numbers!'); 
    } else {
      this.result.set(this.num1 * this.num2);
    }
  }

  divideNumbers() {
    this.resetValues();
    if (isNaN(this.num1) || isNaN(this.num2)) {   
      this.invalid.set('Please enter valid numbers!'); 
    } else {        
      if (this.num2 === 0){
        this.invalid.set('Please enter valid numbers!'); 
      }
      else {
        this.result.set(this.num1 / this.num2);
      }
    }
  }

  

}
