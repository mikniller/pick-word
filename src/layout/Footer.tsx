import * as React from 'react';
import SelectedWords from '../components/SelectedWords'

export default class Footer extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { };
    }
    public render() {
		return (
            <div className="footer fixed-bottom">
               <SelectedWords />
            </div>
        );
	}
}
