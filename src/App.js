import "./App.css";
import MovieCard from "./components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import StarRating from "./components/starRating/StarRate";
import { SelectRating, HalfRating } from "./components/RateComp";
import React, { useEffect, useState } from "react";
import MovieData from "./components/MovieData";
import Filter from "./components/Filter";
import mList from "./components/MList";
function App() {

  const [movielist, setMovielist] = useState(MovieData);
  const [movielistF, setMovielistF] = useState([]);
  const movie = [
    MovieData.map((movie) => (
      <MovieCard
        movie={movie}
        title={movie.title}
        affcihe={movie.affiche}
        rate={movie.rate}
        key={movie.id}
      />
    ))
  ];
  const filterrate = (rate) => {
    console.log(rate);
    if (!rate) {
      setMovielistF(movielist);
    } else {
      const listF = movielist.filter((value) => value.rate === rate);
      setMovielistF(listF);
    }
  };

  useEffect(() => {
    // movielist;
    setTimeout(() => {
      setMovielist(movielist);
      setMovielistF(movielist);
    }, 2000);
  });

  return (
    <Container>
      {/* <Row>
        <h4>the Star Rating tuto</h4>
      <StarRating />
    
    </Row> */}
      <Row>
        <Col md={{ span: 4, offset: 4 }} sm="auto">
          <Filter filterrate={(m) => filterrate(m)} />
          
        </Col>
      </Row>
     {/* <Row>
        this is the movies total list
        <Col>
          <mList/>
        </Col>
          <br></br>
        end of the list
        </Row> */}
      {/*<Row>
       <Col >
        {
          movie
        }
      </Col> 
      </Row>*/}
      <br></br>
      <Row>
        <Col md={4}>
          <MovieCard
            title="TITANIC"
            description="good movie"
            rate={3.5}
            affcihe="https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
          />
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <MovieCard
            title="ESCAPE PLAN"
            description="good movie"
            rate={3}
            affcihe="https://resizing.flixster.com/neWlRHqzUrMTSHs8vM8mzT15mRc=/206x305/v2/https://flxt.tmsimg.com/assets/p9911264_p_v10_ap.jpg"
          />
        </Col>
        <Col md={4}>
          <MovieCard
            title="JUMANJI"
            description="good movie"
            rate={4}
            affcihe="https://fr.web.img6.acsta.net/pictures/17/11/07/13/40/0517792.jpg"
          />
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <MovieCard
            title="PREDESTINATION"
            description="good movie"
            rate={2.5}
            affcihe="https://image.tmdb.org/t/p/w500/sYjpJZEdwELjdHy4OVzazeJVT0z.jpg"
          />
        </Col>
      </Row>
      {/* <Row>
        <SelectRating />
      </Row> 
      <Row>
        <HalfRating value={4} />
      </Row>*/}
      
      
    </Container>
  );
}

export default App;

//const movie = MovieData.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
