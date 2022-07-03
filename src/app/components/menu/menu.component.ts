import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas= [{
    nombre: 'Home',
    path: '/home'
  },
  {
    nombre: 'about',
    path: '/about'
  },
  {
    nombre: 'Contact',
    path: '/contact'
  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
