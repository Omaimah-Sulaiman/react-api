import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';


export class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.weatherData
    };
  }
//title:  image_url: "htt
  render() {
    return (
      <div>
      <li key={this.props.value.title}>title :
        {this.props.value.title}
      </li>
      <li key={this.props.value.overview}>overview: 
      {this.props.value.overview}
    </li>
    <li key={this.props.value.average_votes}>average_votes: 
      {this.props.value.average_votes}
    </li>
    <li key={this.props.value.total_votes}>total_votes: 
      {this.props.value.total_votes}
    </li>
    <li key={this.props.value.image_url}>image_url:
      {this.props.value.image_url}
    </li>
    </div>
      );
  }
}

export default Movie