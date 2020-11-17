import React from 'react';
import './app.less';

export default class App extends React.Component {

    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }
    render() {
        return (<div className="main">
                <input value={this.state.value} onChange={this.onChange} onBlur={() => {console.log(this.state.value)}}/>
            </div>)
    }
}