
export class CategoryModel {
    name: string = '';
    words: string[] = [];
}

export interface ICategoryModel {
    category : CategoryModel;
}


export interface ICategories {
    list : CategoryModel[];
}

export interface IWord {
    word : string;
}
