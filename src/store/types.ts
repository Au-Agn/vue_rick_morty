export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export type URLParamsType = {
  page?: string;
  species?: string;
  name?: string;
};
export type PageInfoType = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type StoreType = {
  characters: CharacterType[];
  characterItem: CharacterType | null;
  filteredCharacters: CharacterType[];
  favourites: CharacterType[];
  urlParams: URLParamsType | null;
  isExistsInFavourites: boolean;
  pageInfo: PageInfoType | null;
  episode: EpisodeType | null;
};
