export const SET_WORD = 'SET_WORD';
export const CLEAR_WORDS = 'CLEAR_WORDS';

interface AddWordAction {
    type: typeof SET_WORD;
    word: string;
  }
  
  interface ClearWordAction {
    type: typeof CLEAR_WORDS;
  }

  export type WordActionTypes = AddWordAction | ClearWordAction