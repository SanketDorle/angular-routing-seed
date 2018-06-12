import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  title = 'app';
  constructor(private router: Router) {} 

  goTo(){
    this.router.navigate(['/information-2']);
  }
}
