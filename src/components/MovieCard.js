import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Rating from "./rating";
//import Rate from "./Rate";
import { HalfRating } from "./RateComp";
function MovieCard({ title, affcihe,description,rate}) {
  //const { title, affcihe, rate,description}= movie;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={affcihe} />
        <Card.Body>
          <Card.Title>Card {title}</Card.Title>
          <Card.Text>
            {description}
             <HalfRating value={rate}></HalfRating>
          </Card.Text>
          
          <Button variant="primary">Movie Trailer</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
{
  /* <Card style={{ width: "18rem" }}>
<Card.Img variant="top" src={affcihe} />
<Card.Body>
  <Card.Title>Card {title}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
      <Rate />
  </Card.Text>
  <Button variant="primary">Movie Trailer</Button>
</Card.Body>
</Card> */
}
