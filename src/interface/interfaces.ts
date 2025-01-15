export interface Ipokemon {
  name: string;
  url: string;
}

export interface IpokemonData {
  name: string;
  id: number;
  types: number[];
  type: number;
  sprites: string;
  front_default: string;
}

export interface IPaginationUrl {
  handleNext: () => void;
  handlePrevious: () => void;
  nextUrl: string | null;
  prevUrl: string | null;
}

export interface simplePokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;

  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  cries: {
    latest: string;
  };

  types: {
    type: {
      name: string;
    };
  }[];

  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];

  stats: {
    base_stat: number;
  }[];
}

export interface Ipokemons {
  pokemon: simplePokemon;
  onClick?: () => void;
}
