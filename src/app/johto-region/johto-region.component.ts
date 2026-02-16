import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-johto-region',
  standalone: true,
  templateUrl: './johto-region.component.html',
  styleUrls: ['./johto-region.component.css']
})
export class JohtoRegionComponent {
  leaders = signal([
    {name: 'Falkner', location: 'Violet City', badge: 'Zephyr Badge', team: [{ pokemon: 'Pidgey', level: 9 }, { pokemon: 'Pidgeotto', level: 13 }]},
    {name: 'Bugsy', location: 'Azalea Town', badge: 'Hive Badge', team: [{ pokemon: 'Metapod', level: 14 }, { pokemon: 'Kakuna', level: 14 }, { pokemon: 'Scyther', level: 16 }]},
    {name: 'Whitney', location: 'Goldenrod City', badge: 'Plain Badge', team: [{ pokemon: 'Clefairy', level: 18 }, { pokemon: 'Miltank', level: 20 }]},
    {name: 'Morty', location: 'Ecruteak City', badge: 'Fog Badge', team: [{ pokemon: 'Gastly', level: 21 }, { pokemon: 'Haunter', level: 21 }, { pokemon: 'Gengar', level: 25 }, { pokemon: 'Haunter', level: 23 }]},
    {name: 'Chuck', location: 'Cianwood City', badge: 'Storm Badge', team: [{ pokemon: 'Primeape', level: 27 }, { pokemon: 'Poliwrath', level: 30 }]},
    {name: 'Jasmine', location: 'Olivine City', badge: 'Mineral Badge', team: [{ pokemon: 'Magnemite', level: 30 }, { pokemon: 'Magnemite', level: 30 }, { pokemon: 'Steelix', level: 35 }]},
    {name: 'Pryce', location: 'Mahogany Town', badge: 'Glacier Badge', team: [{ pokemon: 'Seel', level: 27 }, { pokemon: 'Dewgong', level: 29 }, { pokemon: 'Piloswine', level: 31 }]},
    {name: 'Clair', location: 'Blackthorn City', badge: 'Rising Badge', team: [{ pokemon: 'Dragonair', level: 37 }, { pokemon: 'Dragonair', level: 37 }, { pokemon: 'Dragonair', level: 37 }, { pokemon: 'Kingdra', level: 40 }]}
  ]);
}  