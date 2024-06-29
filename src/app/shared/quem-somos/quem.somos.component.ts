import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AnimationQuemComponent } from '../animation-quem/animation-quem.component';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'quem-somos',
  standalone: true,
  imports: [HeaderComponent, AnimationQuemComponent, ],
  templateUrl: './quem.somos.component.html',
  styleUrl: './quem.somos.component.scss'
})
export class QuemSomosComponent {

}
