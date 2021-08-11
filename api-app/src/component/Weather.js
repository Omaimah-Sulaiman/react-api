import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';


export class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          test : this.props.weatherData
        };
      }
    
    render() {
        return (
          <div>
            
          <li key={this.props.value.date}>
            {this.props.value.date}
          </li>
          <li key={this.props.value.description}>
          {this.props.value.description}
        </li>
        </div>
          );
        
    }

}

    export default Weather 