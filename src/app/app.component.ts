import {Component} from '@angular/core';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {FooterComponent} from './pages/footer/footer.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {ContactComponent} from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, FooterComponent, SkillsComponent, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
