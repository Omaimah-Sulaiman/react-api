import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
    }
  }

  submitForm = async (e) => {
    e.preventDefault();
    const location = e.target.locationName.value;
    
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);

    console.log('our axios response', response.data[0]);
    console.log('our axios response', response.data[0].lat);
    console.log('our axios response', response.data[0].lon);
    
    
    this.setState({
      locationData: response.data[0]
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>
            Location Name:
          </label>
          <input name="locationName" type="text" placeholder="Enter the location name you want to search" />
          <input type="submit" value="search Location" />
        </form>
        <div>
          <h1>
            Location information
          </h1>
          {
     
            this.state.locationData.display_name &&
            <p>
              {this.state.locationData.display_name}<br/>Latitude:  {this.state.locationData.lat} <br/> Longitude:{this.state.locationData.lon} 
            </p>
             
            
          }
        </div>
      </div>
    )
  }
}

export default App
