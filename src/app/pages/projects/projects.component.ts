import {Component} from '@angular/core';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {RouterLink} from '@angular/router';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardModule,
    CarouselModule,
    ButtonDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'


})
export class ProjectsComponent {
  cards = [
    {
      message: 'Mon Portfolio',
      link: 'https://pacogalasso.com/',
      linkLabel: 'Ouvrir le portfolio',
      type: 'portfolio'
    },
    {
      message: 'Projet en cours',
      link: '#',
      linkLabel: 'En construction',
      type: 'construction'
    }
  ];
}
