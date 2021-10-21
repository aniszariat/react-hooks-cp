import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

//import * as React from 'react';
//import Rating from '@mui/material/Rating';
//import Box from '@mui/material/Box';
//import StarIcon from '@mui/icons-material/Star';


export function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

export function HalfRating({ value }) {
  return (
    <Stack spacing={1}>
      <h1>FilmRating</h1>

      <Rating
        name="half-rating-read"
        defaultValue={value}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}

export const SelectRating = () => {
  return (
    <Stack spacing={1}>
      <h1>SelectRating</h1>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      {/* <h1>the rating is {Rating.value}</h1> */}
    </Stack>
  );
};

// source ="https://mui.com/components/rating/"



{/* 
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
*/}