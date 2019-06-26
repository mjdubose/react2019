import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./js/SeasonDisplay.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        //only purpose is to initialize component state.
        this.state = {lat: null, errorMessage: ''};
    }
    //state = {lat: null, errorMessage: ''};
    componentDidMount(){
        //called when component is loaded.. runs once per component.
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message })
        );
    }

    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div> <SeasonDisplay lat={this.state.lat}/> </div>
        }
        return <div>Loading...</div>
    }

}

ReactDOM.render(<App />,document.querySelector('#root'));