import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { QuemSomosComponent } from './shared/quem-somos/quem.somos.component';
import { MainComponent } from './shared/main/main.component';
import { BotaoComponent } from './shared/botao/botao.component';
import { RouterOutlet } from '@angular/router';
import { BotaoTopoComponent } from './shared/botao-topo/botao-topo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, QuemSomosComponent ,BotaoComponent, RouterOutlet, BotaoTopoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tata.recreacao';
}
