import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  templateUrl: './kanto-region.component.html',
  styleUrls: ['./kanto-region.component.css']
})

export class KantoRegionComponent {
  leaders = signal([
    {name: 'Brock', location: 'Pewter City', badge: 'Boulder Badge', team: [{ pokemon: 'Geodude', image: 'https://www.pokemon.com/us/pokedex/geodude', level: 12 }, { pokemon: 'Onix', level: 14, }]},
    {name: 'Misty', location: 'Cerulean City', badge: 'Cascade Badge', team: [{ pokemon: 'Staryu', level: 18 }, { pokemon: 'Starmie', level: 21 }]},
    {name: 'Lt. Surge', location: 'Vermilion City', badge: 'Thunder Badge', team: [{ pokemon: 'Voltorb', level: 21 }, { pokemon: 'Magnemite', level: 22 }, { pokemon: 'Raichu', level: 24 }]},
    {name: 'Erika', location: 'Celadon City', badge: 'Rainbow Badge', team: [{ pokemon: 'Tangela', level: 24 }, { pokemon: 'Weepinbell', level: 29 }, { pokemon: 'Gloom', level: 29 }]},
    {name: 'Koga', location: 'Fuchsia City', badge: 'Soul Badge', team: [ { pokemon: 'Koffing', level: 37 }, { pokemon: 'Koffing', level: 37 }, { pokemon: 'Muk', level: 39 }, { pokemon: 'Weezing', level: 43 }]},
    {name: 'Sabrina', location: 'Saffron City', badge: 'Marsh Badge', team: [{ pokemon: 'Kadabra', level: 38 }, { pokemon: 'Mr. Mime', level: 37 }, { pokemon: 'Venomoth', level: 38 }, { pokemon: 'Alakazam', level: 43 }]},
    {name: 'Blaine', location: 'Cinnabar Island', badge: 'Volcano Badge', team: [{ pokemon: 'Growlithe', level: 42 }, { pokemon: 'Ponyta', level: 40 }, { pokemon: 'Rapidash', level: 42 }, { pokemon: 'Arcanine', level: 47, image:'' }]},
    {name: 'Giovanni', location: 'Viridian City', badge: 'Earth Badge', team: [ { pokemon: 'Rhyhorn', level: 45 }, { pokemon: 'Dugtrio', level: 42 }, { pokemon: 'Nidoqueen', level: 44 }, { pokemon: 'Nidoking', level: 45 },{ pokemon: 'Rhydon', level: 50 }]}
  ]);
}
