import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {



    render() {
        return (
            <>
            <br />
            <h1>Weather Information ☁ </h1>
            <br />                
                <ListGroup style={{display:'inline-block'}}>
                    
                <ListGroup.Item action variant="success">
                {this.props.weatherData[0].valid_date} <br></br>
                {this.props.weatherData[0].description}
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                {this.props.weatherData[1].valid_date} <br></br>
                {this.props.weatherData[1].description}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                {this.props.weatherData[2].valid_date} <br></br>
                {this.props.weatherData[2].description}
                </ListGroup.Item>

                </ListGroup>
                

            </>

        )
    }
}


export default Weather;