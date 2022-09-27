import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService) {}

  switchTheme(){
    let dark = document.querySelector('#btn-dark') as HTMLInputElement;
    let app = document.querySelector('#app') as HTMLElement;
    let img = document.querySelector('#img-dark') as HTMLImageElement;

    app.classList.toggle("dark-mode");

    if(dark.checked){
      img.src = "./../assets/sunny-outline.svg";
    } else {
      img.src = "./../assets/moon-outline.svg";
    }
  }
}

