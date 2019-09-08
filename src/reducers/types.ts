import { CategoryModel } from "../models/Category";

export default interface IWordState {
    selectedWords: string[];
    categories: CategoryModel[]; 
}

