import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { QuemSomosComponent } from '../../shared/quem-somos/quem.somos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
