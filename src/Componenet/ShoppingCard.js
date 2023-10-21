import * as React from "react";

import { Card, Button,Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { formatDate } from "../Utils/Date";

export default function ShoppingCard(props) {
    const formattedDate = formatDate();

  return (
    <Box>
      <Card sx={{border:'2px solid red',width:'300px',display:'flex',flexDirection:'column',flexFlow:'wrap'}}>
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" component='img' height='194' width='298'  alt="hello"/>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
          {props.Title}
          </Typography>
          <Typography> {props.Price}$</Typography>
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
          <Typography>Published{formattedDate}</Typography>
        </CardActions>
      </Card>
    </Box>
  )
}
