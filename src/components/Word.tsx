import * as React from 'react';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';
import { AddWordAction } from '../actions/wordActions';

type propsParam = {
    word :string;
    addWordClicked:(w:string) => {};
}

class Word extends React.Component<propsParam,any> {
 
    constructor(props: propsParam){
        super(props);
        this.state = { fade: false};
        this.addWord = this.addWord.bind(this);
    }

    addWord(event:any) {
        event.preventDefault();
        this.props.addWordClicked(this.props.word);
        this.setState({ fade: true });
      }
    public render() {
      const fade = this.state.fade;
		return (
            <Col xs={12} sm={6} md={4} lg={2} className={fade ? 'fade word' : 'word'} onClick={this.addWord}  onAnimationEnd={() => this.setState({ fade: false })} >{this.props.word}</Col>
        );
	}
}


function mapStateToProps() {
    return {};
  }
  
  function mapDispatchToProps(dispatch:any) {
    return {  addWordClicked: (word: string) => dispatch(AddWordAction(word))
    };
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Word);
