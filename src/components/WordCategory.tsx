import * as React from 'react';
import {  ICategoryModel } from '../models/Category';
import Word from './Word';


export default class WordCategory extends React.Component<ICategoryModel, any> {
    constructor(props: ICategoryModel){
        super(props);
        this.state = { };
    }
    public render() {
		return (
            <div className="wordContainer">
                {   this.props.category.words.map((value, index) => {
                       return <Word word={value} key={'category'+index}></Word>
                    })
                }
                </div>
        );
	}
}
