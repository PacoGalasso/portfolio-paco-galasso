import {Component} from '@angular/core';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  timelineEvents = [
    {
      title: 'Obtention du CFC + maturité professionnelle',
      date: 'Aout 2025',
      description: 'Fin de mon parcours académique en tant que développeur d’application avec la maturité professionnelle. Prêt à entrer dans le monde du travail et à relever de nouveaux défis !',
    },
    {
      title: 'Début du CFC en développement', date: 'Aout 2021',
      description: 'Début de ma formation en développement d’application. Une période où j’ai acquis des compétences essentielles en programmation, bases de données et gestion de projet.',
    },
    {
      title: 'Fin scolarité obligatoire', date: 'Juillet 2021',
      description: 'Fin de mon cycle scolaire obligatoire. J’ai décidé de poursuivre mes études dans le domaine du développement d’application'
    },
    {
      title: 'Début scolarité obligatoire', date: 'Aout 2010',
      description: 'Entrée à l’école primaire, première étape vers l’apprentissage et la découverte du monde académique.',
    },
    {
      title: 'Naissance', date: 'Mai 2005',
      description: 'Le début de l’aventure ! Né en mai 2005.',
    }
  ];

  constructor() {

  }
}
