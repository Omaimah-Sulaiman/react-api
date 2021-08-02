import React, { Component } from 'react'
import axios from 'axios';
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './App.css'

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
    try{
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);
    console.log('our axios response', response.data[0]);
    console.log('our axios response', response.data[0].lat);
    this.setState({
      locationData: response.data[0]
    });
    } 
    catch(err) {
      alert(err); 
    }
    
  };
  
  // onClickSubmit=()=>{
  //   if(!(this.state.locationData)){
  //     alert('this location not supported on this browser') 
  //     // this.setState({
  //     //   locationData:{}
  //     // })
  //   }
  // }

  render() {
    return (
      <div>
        <Header/>
        <form onSubmit={this.submitForm} id="form">
          <label>
            Location Name:
          </label>
          <input name="locationName" type="text" placeholder="Enter the location name you want to search" /><br/>
          <input type="submit" value="search Location" />
        </form>
        <div>
          <h1>
            Location information
          </h1>
          { 
            this.state.locationData.display_name && 
            <p>
              {this.state.locationData.display_name}<br/>Latitude:{this.state.locationData.lat} <br/> Longitude:{this.state.locationData.lon} <br/>
              <Image src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.locationData.display_name}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=16&size=480x480&markers=icon:large-red-cutout|${this.state.locationData.lat},${this.state.locationData.lon}`}  />
            </p>
           }
        </div>
      </div>
    )
  }
}

export default App
