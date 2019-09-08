import React from "react";
import { connect } from "react-redux";
import { ClearWordAction } from "../actions/wordActions";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

type propsParam = {
    cleardWordClicked: () => {};
    words: string[];
}

type stateParam = {
    fade:boolean;
}

class SelectedWords extends React.Component<propsParam, stateParam> {
    constructor(props: propsParam) {
        super(props);
        this.cleardWordClicked = this.cleardWordClicked.bind(this);
        this.state = { fade:false };
    }

    cleardWordClicked(event: any) {
        event.preventDefault();
        this.props.cleardWordClicked();
        this.setState({ fade: true });
    }

    getWords = () => {
        return this.props.words || ['he', 'kurt'];
    }


    public render() {
        const fade = this.state.fade;
        return (
            <div className="selected-words-container">
                <div className="selected-words">{this.getWords().join(' ')}</div>
                        <Button className={fade ? 'fade btn-full' : 'btn-full'}  
                            variant="outline-primary" 
                            onAnimationEnd={() => this.setState({ fade: false })}
                            onClick={this.cleardWordClicked}>Nulstil</Button>
            </div>
        );
    }
}


function mapStateToProps(state: any) {
    return {

        words: state.word.selectedWords,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        cleardWordClicked: () => dispatch(ClearWordAction())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectedWords);