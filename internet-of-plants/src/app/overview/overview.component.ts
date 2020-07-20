import { Component, OnInit } from '@angular/core';

export interface Plant {
  name: string;
  scientificName: string;
  plantTime: string;
  description: string;
  perene: boolean;
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
    scientificName: 'Genus Helianthus',
    plantTime: 'Otoño',
    perene: true,
    description: 'Plantas fabulosas',
    photoName: 'assets/photos/sunflower.jpg'
  };
  basel: Plant = {
    name: 'Albahaca',
    scientificName: 'Genus Helianthus',
    plantTime: 'Verano',
    perene: false,
    description: 'Especial para pizzas',
    photoName: 'assets/photos/basil.jpg'
  };
  cherry: Plant = {
    name: 'Tomate Cherry',
    scientificName: 'Genus Helianthus',
    plantTime: 'Verano',
    perene: true,
    description: 'Los mejores tomates',
    photoName: 'assets/photos/cherry-tomato.jpg'
  };
  mint: Plant = {
    name: 'Menta',
    scientificName: 'Genus Helianthus',
    plantTime: 'Verano',
    perene: false,
    description: 'Para una limonada',
    photoName: 'assets/photos/mint.jpeg'
  };

  constructor() { }

  ngOnInit() {
    this.plantsList.push(this.sunflower);
    this.plantsList.push(this.basel);
    this.plantsList.push(this.cherry);
    this.plantsList.push(this.mint);
    this.plantsList.push(this.basel);
    this.plantsList.push(this.cherry);
    this.plantsList.push(this.basel);
    this.plantsList.push(this.mint);
    this.plantsList.push(this.basel);

  }

}
