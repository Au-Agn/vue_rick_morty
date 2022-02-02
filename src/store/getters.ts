import {
  CHARACTERS,
  CHARACTER_ITEM,
  FILTERED_CHARACTERS,
  FAVOURITES,
  PAGE_INFO,
  EPISODE,
  ACTIVE_BUTTON
} from "./constants";
import {StoreType} from './types';

export default {
  [CHARACTERS]: (state: StoreType) => state.characters,
  [CHARACTER_ITEM]: (state: StoreType) => state.characterItem,
  [FILTERED_CHARACTERS]: (state: StoreType) => state.filteredCharacters,
  [FAVOURITES]: (state: StoreType) => state.favourites,
  [PAGE_INFO]: (state: StoreType) => state.pageInfo,
  [EPISODE]: (state: StoreType) => state.episode,
  [ACTIVE_BUTTON]: (state: StoreType) => state.activeBtn,
};
