import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // lo primero que hay que hacer
    // por ejemplo cargar datos de la lista
  }

 funcionConi(paula: string) {
   console.log('amor');
 }

}
