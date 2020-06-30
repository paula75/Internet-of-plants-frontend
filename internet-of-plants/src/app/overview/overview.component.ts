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
  plantsList: Plant[];
  sunflower: Plant = {
    name: 'Girasol',
    scientificName: 'genus Helianthus',
    plantTime: 'Otoño',
    description: 'Plantas fabulosas',
    photoName: 'sunflower.jpg'
  };
  constructor() { }

  ngOnInit() {
    this.plantsList.push(this.sunflower);
  }

}
