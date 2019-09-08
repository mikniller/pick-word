import { WordActionTypes, SET_WORD, CLEAR_WORDS } from '../constants/actionTypes'


export function AddWordAction(word:string) : WordActionTypes { 
    return { type: SET_WORD, word: word} 
}

export function ClearWordAction() : WordActionTypes { 
    return  { type: CLEAR_WORDS } 
}


