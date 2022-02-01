import {
  CHARACTERS,
  CHARACTER_ITEM,
  FILTERED_CHARACTERS,
  FAVOURITES,
  PAGE_INFO,
  EPISODE,
} from "./types";
import {StoreType, CharacterType} from './type';

export default {
  [CHARACTER_ITEM]: (state: StoreType) => state.characterItem,
  [FILTERED_CHARACTERS]: (state: StoreType) => state.filteredCharacters,
  [FAVOURITES]: (state: StoreType) => state.favourites,
  [PAGE_INFO]: (state: StoreType) => state.pageInfo,
  [EPISODE]: (state: StoreType) => state.episode,
};
