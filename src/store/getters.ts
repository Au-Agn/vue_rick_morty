import {
  CHARACTERS,
  CHARACTER_ITEM,
  FAVOURITES,
  PAGE_INFO,
  EPISODE,
  ACTIVE_BUTTON,
  PAGE_NUMBER,
  URL_PARAMS
} from "./constants";
import {StoreType} from './types';

export default {
  [CHARACTERS]: (state: StoreType) => state.characters,
  [CHARACTER_ITEM]: (state: StoreType) => state.characterItem,
  [FAVOURITES]: (state: StoreType) => state.favourites,
  [PAGE_INFO]: (state: StoreType) => state.pageInfo,
  [EPISODE]: (state: StoreType) => state.episode,
  [ACTIVE_BUTTON]: (state: StoreType) => state.activeBtn,
  [PAGE_NUMBER]: (state: StoreType) => state.pageNumber,
  [URL_PARAMS]: (state: StoreType) => state.urlParams,
};
