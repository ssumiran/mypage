import { Component, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-vowelsfinder',
  imports: [],
  templateUrl: './vowelsfinder.html',
  styleUrl: './vowelsfinder.css',
})
export class Vowelsfinder implements OnInit {

  ngOnInit(): void {
    this.findVowelOfEachWord();
  }

  words = signal<string[]>(['apple', 'book', 'idea', 'sky', 'banana']);
  result = signal<string[]>([]);

  findVowelOfEachWord() {
    const vowels = 'aeiou';
    const vowelWords = this.words().filter(word =>
      ['a', 'e', 'i', 'o', 'u'].includes(word.toLowerCase().slice(-1))
    ); 
    this.result.set(this.words().filter(word =>
      ['a', 'e', 'i', 'o', 'u'].includes(word.toLowerCase().slice(-1))));
    //alert(`Words that end with a vowel: ${vowelWords.join(', ')}`);
  }

}
