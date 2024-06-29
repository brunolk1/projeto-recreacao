import { Component } from '@angular/core';
import { SectionSobreComponent } from './section-sobre/section-sobre.component';
import { SectionOndeComponent } from './section-onde/section-onde.component';
import { SectionBrincadeirasComponent } from './section-brincadeiras/section-brincadeiras.component';
import { SectionDizemComponent } from './section-dizem/section-dizem.component';
import { ContatoComponent } from '../contato/contato.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionSobreComponent, SectionOndeComponent, SectionBrincadeirasComponent, SectionDizemComponent, ContatoComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
