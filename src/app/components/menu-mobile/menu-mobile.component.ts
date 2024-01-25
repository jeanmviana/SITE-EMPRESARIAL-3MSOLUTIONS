// meu-componente.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Adicione o código JavaScript diretamente aqui
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    btnMenu?.addEventListener('click', () => {
      menu?.classList.add('abrir-menu');
    });

    menu?.addEventListener('click', () => {
      menu?.classList.remove('abrir-menu');
    });

    overlay?.addEventListener('click', () => {
      menu?.classList.remove('abrir-menu');
    });
  }
}
