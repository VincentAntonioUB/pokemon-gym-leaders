import { Injectable, Signal, signal } from '@angular/core';

export interface Pokemon {
  pokemon: string;
  level: number;
}

export interface Leader {
  name: string;
  location: string;
  badge: string;
  team: Pokemon[];
  specialty?: string;
}

@Injectable({
  providedIn: 'root',
})
export class HoennRegionService {
  private leaders = signal<Leader[]>([
    {
      name: 'Roxanne',
      location: 'Rustboro City',
      badge: 'Stone Badge',
      specialty: 'Rock',
      team: [
        { pokemon: 'Geodude', level: 12 },
        { pokemon: 'Geodude', level: 12 },
        { pokemon: 'Nosepass', level: 15 },
      ],
    },
    {
      name: 'Brawly',
      location: 'Dewford Town',
      badge: 'Knuckle Badge',
      specialty: 'Fighting',
      team: [
        { pokemon: 'Machop', level: 16 },
        { pokemon: 'Meditite', level: 16 },
        { pokemon: 'Makuhita', level: 19 },
      ],
    },
    {
      name: 'Wattson',
      location: 'Mauville City',
      badge: 'Dynamo Badge',
      specialty: 'Electric',
      team: [
        { pokemon: 'Voltorb', level: 20 },
        { pokemon: 'Magneton', level: 22 },
        { pokemon: 'Manectric', level: 24 },
      ],
    },
    {
      name: 'Flannery',
      location: 'Lavaridge Town',
      badge: 'Heat Badge',
      specialty: 'Fire',
      team: [
        { pokemon: 'Numnel', level: 24 },
        { pokemon: 'Slugma', level: 24 },
        { pokemon: 'Camerupt', level: 26 },
        { pokemon: 'Torkoal', level: 29 },
      ],
    },
    {
      name: 'Norman',
      location: 'Petalburg City',
      badge: 'Balance Badge',
      specialty: 'Normal',
      team: [
        { pokemon: 'Slaking', level: 27 },
        { pokemon: 'Vigoroth', level: 27 },
        { pokemon: 'Slaking', level: 29},
        { pokemon: 'Spinda', level: 27 },
      ],
    },
    {
      name: 'Winona',
      location: 'Fortree City',
      badge: 'Feather Badge',
      specialty: 'Flying',
      team: [
        { pokemon: 'Swablu', level: 29 },
        { pokemon: 'Tropius', level: 30 },
        { pokemon: 'Pelipper', level: 30 },
        { pokemon: 'Skarmory', level: 31 },
        { pokemon: 'Altaria', level: 33 },
      ],
    },
    {
      name: 'Tate and Liza',
      location: 'Mossdeep City',
      badge: 'Mind Badge',
      specialty: 'Psychic',
      team: [
        { pokemon: 'Claydol', level: 41 },
        { pokemon: 'Xatu', level: 41 },
        { pokemon: 'Lunatone', level: 42 },
        { pokemon: 'Solrock', level: 42 },
      ],
    },
    {
      name: 'Wallace',
      location: 'Sootopolis City',
      badge: 'Rain Badge',
      specialty: 'Water',
      team: [
        { pokemon: 'Luvdisc', level: 30 },
        { pokemon: 'Whiscash', level: 32 },
        { pokemon: 'Sealeo', level: 34 },
        { pokemon: 'Seaking', level: 33 },
        { pokemon: 'Milotic', level: 35 },
      ],
    },
  ]);

  getleader(){
    return this.leaders;
  }
}