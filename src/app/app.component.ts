import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MainArticleComponent} from './components/main-article/main-article.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, WelcomeComponent, MainArticleComponent]
})
export class AppComponent {
  title = 'newsy';
}
