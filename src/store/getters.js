import {
  CHARACTERS,
  CHARACTER_ITEM,
  FILTERED_CHARACTERS,
  FAVOURITES,
  PAGE_INFO,
  EPISODE,
} from "./types";

export default {
  [CHARACTERS]: (state) => state.characters,
  [CHARACTER_ITEM]: (state) => state.characterItem,
  [FILTERED_CHARACTERS]: (state) => state.filteredCharacters,
  [FAVOURITES]: (state) => state.favourites,
  [PAGE_INFO]: (state) => state.pageInfo,
  [EPISODE]: (state) => state.episode,
};
