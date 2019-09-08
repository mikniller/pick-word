import { WordActionTypes, SET_WORD, CLEAR_WORDS } from '../constants/actionTypes'
import IWordState from './types'
import { danishCategories, englishCategories } from '../data/danish';

let initialState : IWordState = {
  selectedWords: [],
  categories: danishCategories
} 


export default function wordReducer(state = initialState, action: WordActionTypes):IWordState {
  let newState:IWordState;
  switch (action.type) {
    case SET_WORD:
      let wrds: string[] = state.selectedWords.slice();
      wrds.push(action.word);
      newState = { ...state, selectedWords: wrds };
      break;
    case CLEAR_WORDS:
        newState = { ...state, selectedWords: [] };
      break;
    default:
            newState = { ...state };
  }
  console.log(newState);
  return newState;
}