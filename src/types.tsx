
export interface Result {
    name: string;
    url: string;
  }

export interface pokemen {
    name: string;
    url: string;
    imgAlt: string;
    imgUrl?: string;
  }
export interface pokeman {
    pokeman: {
        name: string;
        url: string;
        imgAlt: string;
        imgUrl?: string;
    },
    key: string,
  }

export  interface PokemanList {
    count: number;
    next: string;
    previous: string;
    list: pokemen[]
}

export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: pokeman[];
  }
  
 export interface PokemonDetails {
    abilities: [Object];
    base_experience: number;
    cries: {
        latest: string;
        legacy: string;
    };
    forms: [Object];
    game_indices: [Object];
    height: number;
    held_items: [];
    id: number;
    location_area_encounters: string;
    moves: [Object];
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        other: {
            dream_world: [Object];
            home: [Object];
            'official-artwork': [Object];
            showdown: [Object];
        }
    };
    stats: [Object];
    types: [Object];
    weight: number;
 } 