import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Simplemath } from './simplemath/simplemath';


@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
