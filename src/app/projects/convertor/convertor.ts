import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './convertor.html',
  styleUrl: './convertor.css',
})
export class Convertor {
  result = signal(0);
  convertTo: string= '';

  userReactiveForm: FormGroup = new FormGroup({
    num: new FormControl('', [Validators.required])
  });

  convertMiToKm() {
    this.convertTo = 'Km';
    const miles = this.userReactiveForm.get('num')?.value;
    this.result.set(miles * 1.60934);
    //alert(`${miles} miles is equal to ${this.result().toFixed(2)} kilometers.`);
  }
  convertKmToMi() {
    this.convertTo = 'Mi';
    const km = this.userReactiveForm.get('num')?.value;
    this.result.set(km / 1.60934);
    //alert(`${km} kilometers is equal to ${this.result().toFixed(2)} miles.`);
  }
}
