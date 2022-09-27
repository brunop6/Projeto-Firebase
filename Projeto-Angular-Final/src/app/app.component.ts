import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

