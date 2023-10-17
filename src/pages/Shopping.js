
import * as React from "react";
import { Route, Routes } from "react-router";
import MovieList from './MovieList';
import Home from './home';
import { Card, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { Box } from "@mui/system";
import { CardGiftcardTwoTone } from "@mui/icons-material";
export default function Shopping() {

  return (
    <Box sx={{ flex: { xs: "100%", md: "15%" }, m: 2 }}>
      <Card sx={{}}>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" component='img' height='194' width='200'  />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
          Hello
          </Typography>
          <Typography>20$</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
           
            sx={{
              mx: 2,
              bgcolor: "#ff1d58",
              fontWeight: "bold",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
                color: "#ff1d58",
              },
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}




