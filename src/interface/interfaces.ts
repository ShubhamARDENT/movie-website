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
