import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Movies extends React.Component {
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Container>
          <br />
          <h1>Movies 📽 </h1>
          <br />
          <Row xs={1} md={3} className='g-4'>
            {this.props.movieData.map((movie, i) => (
              <Col key={i}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant='top'
                    src={movie.poster_path}
                    alt={movie.title}
                    style={{ height: '20rem' }}
                  />

                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Avg Votes: {movie.vote_average}</Card.Text>
                    <Card.Text>Total Votes: {movie.vote_count}</Card.Text>
                    <Card.Text>Popularity: {movie.popularity}</Card.Text>
                    <Card.Text>Released on: {movie.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Movies;