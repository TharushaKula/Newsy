import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MainArticleComponent} from './components/main-article/main-article.component';
import {LatestNewsComponent} from './components/latest-news/latest-news.component';
import {NewsyStoryComponent} from './components/newsy-story/newsy-story.component';
import {MustReadComponent} from './components/must-read/must-read.component';
import {EditorsPickComponent} from './components/editors-pick/editors-pick.component';
import {CategoriesBlockComponent} from './components/categories-block/categories-block.component';
import {TopCreatorComponent} from './components/top-creator/top-creator.component';
import {EmailSectionComponent} from './components/email-section/email-section.component';
import {HomeComponent} from './pages/home/home.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      HeaderComponent, 
      FooterComponent, 
      WelcomeComponent, 
      MainArticleComponent,
      LatestNewsComponent,
      NewsyStoryComponent,
      MustReadComponent,
      EditorsPickComponent,
      CategoriesBlockComponent,
      TopCreatorComponent,
      EmailSectionComponent,
      HomeComponent
    ]
})
export class AppComponent {
  title = 'newsy';
}
