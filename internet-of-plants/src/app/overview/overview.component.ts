import { Component, OnInit } from '@angular/core';

export interface Plant {
  name: string;
  scientificName: string;
  plantTime: string;
  description: string;
  photoName: string;
}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})


export class OverviewComponent implements OnInit {
  plantsList: Plant[] = [];
  sunflower: Plant = {
    name: 'Girasol',
    scientificName: 'genus Helianthus',
    plantTime: 'Otoño',
    description: 'Plantas fabulosas',
    photoName: 'sunflower.jpg'
  };
  basel: Plant = {
    name: 'Albahaca',
    scientificName: 'genus Helianthus',
    plantTime: 'Verano',
    description: 'Especial para pizzas',
    photoName: 'sunflower.jpg'
  };
  cherry: Plant = {
    name: 'Tomate Cherry',
    scientificName: 'genus Helianthus',
    plantTime: 'Verano',
    description: 'Los mejores tomates',
    photoName: 'sunflower.jpg'
  };
  mint: Plant = {
    name: 'Menta',
    scientificName: 'genus Helianthus',
    plantTime: 'Verano',
    description: 'Para una limonada',
    photoName: 'sunflower.jpg'
  };

  constructor() { }

  ngOnInit() {
    this.plantsList.push(this.sunflower);
    this.plantsList.push(this.basel);
    this.plantsList.push(this.cherry);
    this.plantsList.push(this.mint);
  }

}
