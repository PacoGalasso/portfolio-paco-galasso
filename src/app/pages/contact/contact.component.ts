import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      type: 'mail',
      label: 'Email',
      icon: 'envelope',
      link: 'mailto:pacogalasso@gmail.com'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/paco-galasso-6738b6249'
    },
    {
      type: 'github',
      label: 'GitHub',
      icon: 'github',
      link: 'https://github.com/PacoGalasso'
    }
  ];
}
