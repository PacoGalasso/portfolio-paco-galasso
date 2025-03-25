import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, TableModule, CardModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
