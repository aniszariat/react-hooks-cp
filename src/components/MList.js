import React from "react";
import {Row,Col} from "react-bootstrap";
import MovieCard from "./MovieCard"
import MovieData from "./MovieData";
function mList() {
  const a =[]
  return (
    
       a=[...MovieData.map((movie) => (
        <Col >
           <MovieCard movie={movie} title={movie.title} affcihe={movie.affiche} rate={movie.rate} key={movie.id} />
        </Col>
      ))]
    
  );
}

export default mList;

