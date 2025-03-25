import {Component} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule,
    NgForOf,
    NgOptimizedImage,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  categories = ['Tous', 'Frontend', 'Backend', 'Langages', 'Bases de données', 'Outils', 'Méthodologies'];
  selectedCategory = 'Tous';

  skills = [
    {name: 'Java', category: 'Langages', icon: '/assets/java.svg'},
    {name: 'C#', category: 'Langages', icon: '/assets/csharp.svg'},
    {name: 'PHP', category: 'Langages', icon: '/assets/php.svg'},
    {name: 'Python', category: 'Langages', icon: '/assets/python.svg'},
    {name: 'JavaScript', category: 'Langages', icon: '/assets/javascript.svg'},
    {name: 'TypeScript', category: 'Langages', icon: '/assets/typescript.svg'},
    {name: 'HTML5', category: 'Frontend', icon: '/assets/html5.svg'},
    {name: 'CSS3', category: 'Frontend', icon: '/assets/css3.svg'},
    {name: 'Angular', category: 'Frontend', icon: '/assets/angular.svg'},
    {name: 'React', category: 'Frontend', icon: '/assets/react.svg'},
    {name: 'Spring Boot', category: 'Backend', icon: '/assets/spring.svg'},
    {name: 'MySQL', category: 'Bases de données', icon: '/assets/mysql.svg'},
    {name: 'PostgreSQL', category: 'Bases de données', icon: '/assets/postgresql.svg'},
    {name: 'MongoDB', category: 'Bases de données', icon: '/assets/mongodb.svg'},
    {name: 'Oracle', category: 'Bases de données', icon: '/assets/oracle.svg'},
    {name: 'Git', category: 'Outils', icon: '/assets/git.svg'},
    {name: 'Docker', category: 'Outils', icon: '/assets/docker.svg'},
    {name: 'JIRA', category: 'Outils', icon: '/assets/jira.svg'},
    {name: 'Trello', category: 'Outils', icon: '/assets/trello.svg'},
    {name: 'Junit', category: 'Outils', icon: '/assets/junit.svg'},
    {name: 'Liquibase', category: 'Outils', icon: '/assets/liquibase.svg'},
    {name: 'PrimeNG', category: 'Frontend', icon: '/assets/primeng.svg'},
    {name: 'RESTful APIs', category: 'Backend', icon: '/assets/api.svg'},
    {name: 'CI/CD', category: 'Méthodologies', icon: '/assets/ci-cd.svg'}
  ];

  filteredSkills = this.skills;

  ngOnInit(): void {
    this.filterSkills('Tous');
  }

  filterSkills(category: string): void {
    this.selectedCategory = category;
    this.filteredSkills = category === 'Tous'
      ? this.skills
      : this.skills.filter(skill => skill.category === category);
  }

}
