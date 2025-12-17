import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mypage');
  num1: number = 0;
  num2: number = 0;
  /*
  addNumbers() {
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else {
        const sum = num1 + num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
}
function multipleNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else {
        const sum = num1 * num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
}
function devideNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else {
	if (num2 < 1){
        	document.getElementById('result').textContent = 'Please enter valid numbers!';
    	} else {
        	const sum = num1 / num2;
        	document.getElementById('result').textContent = 'Result: ' + sum;
	}
    }
}*/
}
