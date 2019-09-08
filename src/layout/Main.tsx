import * as React from 'react';
import { ICategories } from '../models/Category';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import WordCategory from '../components/WordCategory';

export default class Main extends React.Component<ICategories, any> {
    constructor(props: ICategories) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
            <div className="wrap">
                <div id="main" className="main clear-top mg-1-right mg-1-left">
                <Tabs defaultActiveKey="0_key_tab" id="uncontrolled-tab-example">
                        { this.props.list.map((value, index) => {
                                return <Tab eventKey={index+'_key_tab'} title={value.name} key={'tab-'+index}>
                                        <WordCategory category={value}></WordCategory>
                                        </Tab>  
                           })
                        }
                        </Tabs>
                </div>
                
            </div>
        );
    }
}
