import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent {
  tabIndex: number = 0;
  showAboutContent = false;

  toggleAboutContent() {
    this.showAboutContent = !this.showAboutContent;
  }
}
