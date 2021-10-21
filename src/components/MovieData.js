const labels = [
  { 0.5: "Useless" },
  { 1: "Useless+" },
  { 1.5: "Poor" },
  { 2: "Poor+" },
  { 2.5: "Ok" },
  { 3: "Ok+" },
  { 3.5: "Good" },
  { 4: "Good+" },
  { 4.5: "Excellent" },
  { 5: "Excellent+" }
];
const MovieData = [
  {
    id: 1,
    title: "TITANIC",
    rate: 3.5,
    description: (labels.filter(e=> e.key== 5)).value,
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 2,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 3,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 4,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 5,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 6,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 7,
    title: "TITANIC",
    rate: 3,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 8,
    title: "TITANIC",
    rate: 1.5,
    description: "Romatic film : Jack& Rose loves each other",
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  }
];
export default MovieData;
