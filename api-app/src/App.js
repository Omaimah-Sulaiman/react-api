import React, { Component } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './component/Weather';
import Movie from './component/Movie';


import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationinformation: '',
      error: false,
      weatherData:'',
      movieData:''

    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    const location = e.target.locationinformation.value;
    try {
      const responseWeather = await axios.get(
        `http://localhost:8080/weather?lon=35.91&lat=31.95&searchQuery=${location}`
      )
      const responseMovie = await axios.get(
        `http://localhost:8080/movies?searchQuery=${location}`
      )
      console.log(responseMovie.data);
      console.log(responseWeather.data);
      const response = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`)

      this.setState({
        locationinformation: response.data[0],
        weatherData: responseWeather.data,
        movieData: responseMovie.data

      });

    } catch {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <Container>

        <Row>

          <form onSubmit={this.submitForm}>

            <Form.Label>Location Name:</Form.Label>
            <Form.Control name='locationinformation'
              type='text'
              placeholder='Enter the location name you want to search' />

            <div className="d-grid gap-2">
              <Button type='submit' variant="primary" size="lg">
                search
              </Button>

            </div>
          </form>
          <div className='text-center'>
            <h1>Location information</h1>

            {this.state.locationinformation.display_name && (
              <p>{this.state.locationinformation.display_name}</p>
            )}

            {this.state.locationinformation.display_name && (
              <Image
                src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.state.locationinformation.lat},${this.state.locationinformation.lon}&zoom=16&size=1100x600&markers=icon:large-red-cutout|${this.state.locationinformation.lat},${this.state.locationinformation.lon}&markers=icon:large-red-cutout|${this.state.locationinformation.lat},${this.state.locationinformation.lon}&path=fillcolor:%23add8e6|weight:1|color:blue|${this.state.locationinformation.lat},${this.state.locationinformation.lon}|${this.state.locationinformation.lat},${this.state.locationinformation.lon}|${this.state.locationinformation.lat},${this.state.locationinformation.lon}|${this.state.locationinformation.lon}`}
                alt='location'
              />

            )}

            {this.state.locationinformation.display_name && (

              <ul>
                <h1>weather data</h1>
                {
                  this.state.weatherData.map((value) => {
                    return (
                      <Weather
                        value={value}
                      />
                    );

                  })
                }
              </ul>

            )}
            {this.state.locationinformation.display_name && (
              <ul>
                <h1>weather data</h1>
              {this.state.movieData.map((value) => {
                return (

                <Movie
                  value={value}
                />

                );

                })
              
              }
              </ul>
            )}
          </div>

        </Row>

      </Container>

    );
  }
}

export default App;
