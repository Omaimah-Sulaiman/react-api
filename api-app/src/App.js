import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      mapInfo:""
    }
  }

  submitForm = async (e) => {
    e.preventDefault();
    const location = e.target.locationName.value;
    
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);
    const response1 = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=16&size=480x480&markers=icon:large-red-cutout|17.450419,78.381149&markers=icon:large-red-cutout|17.451377,78.379525&path=fillcolor:%23add8e6|weight:1|color:blue|17.452945,78.380055|17.452765,78.382026|17.452020,78.381375|17.452045,78.380846|17.452945,78.380055
    `);


    console.log('our axios response', response.data[0]);
    console.log('our axios response', response.data[0].lat);
    console.log('our axios response', response1.data);
    
    
    this.setState({
      locationData: response.data[0],
      mapInfo:response1.data
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
              {this.state.locationData.display_name}<br/>Latitude:{this.state.locationData.lat} <br/> Longitude:{this.state.locationData.lon} 
              <Image src={this.state.mapInfo} fluid />
            </p>
          }
        </div>
      </div>
    )
  }
}

export default App
