import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
const MovieList = (props) =>{
  

  return (
    <>
 <Card sx={{ flexGrow: 1,mx:2,my:2 }}>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 9, md: 12 }}>
      {props.movies.map((movie, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
           <Box sx={{my:1}}>
           <Typography sx={{mx:3,color:'teal',fontWeight:'bold'}}>{movie.Title}</Typography>

           <img src={movie.Poster} alt='movie' width="100%" height="260px"></img>
           <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mx:2}}>
          
         
          <Button   href="#text-buttons" sx={{bgcolor:'black',fontSize:'12px'}}>Add to Cart</Button>
           <Button   href={movie.trailer} sx={{mx:2,bgcolor:'black',fontSize:'12px'}}>Watch Trailer</Button>

        
           </Box>
           </Box>
               
          </Grid>
        ))}
      </Grid>
    </Card>

    </>

  )
}

export default MovieList






 
