import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HomePageAppBar from '../Componenet/AppBar';
import { Button, Typography } from '@mui/material';
// import { Padding } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>

      <Box sx={{ p: '25px', backgroundColor: 'White', height: '100vh' }}>
        <HomePageAppBar />
        <Outlet />
        <Box sx={{ height: '90vh', py: '5%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6} lg={5}>

              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '20%' }}>
                  <Typography sx={{
                    px: 5, fontSize: '32px', fontFamily: 'monospace',
                    fontWeight: 500, color: '#EE9322'
                  }}>Dagopia Cinema </Typography>

                  <Typography
                    sx={{
                      mx: 1, fontSize: '20px', fontFamily: 'monospace',
                      fontWeight: 900, color: 'black'
                    }}>Best Movie Center In Ethiopia </Typography>
                  <Button variant="contained" sx={{ bgcolor: '#EE9322', my: 3, borderRadius: '15px' }}>Join Now </Button>
                  <Typography sx={{ mx: 3, fontWeight: 'bold' }}>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it. The Auto-layout makes the items equitably share the available space.
                    That also means you can set the width of one item and the others will automatically resize around it.</Typography>

                </Paper>
              </Box>

            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Box sx={{ height: '100%', width: '100%', display: 'flex', borderRadius: '7px', justifyContent: 'center', alignItems: 'center', backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80')" }}>
                <Box>
                  <Button variant="contained" sx={{ bgcolor: '#EE9322', my: 3, borderRadius: '15px' }}>Join Now </Button>

                </Box>
              </Box>

            </Grid>

            <Grid item xs={12}>


              <Box sx={{ height: '40vh', width: '100%', display: 'flex', borderRadius: '7px', justifyContent: 'center', alignItems: 'center', backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinemablend.com%2Fstreaming-news%2Fgreat-movies-like-encanto-what-to-watch-if-you-like-the-disney-movie&psig=AOvVaw03QoVD000XJjsXAa472vTV&ust=1697618091235000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCLDPnbrW_IEDFQAAAAAdAAAAABAI')" }}>
                <Typography>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it. The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it</Typography>
              </Box>
            </Grid>

          </Grid>

        </Box>


      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box><Button>Hello</Button></Box>
        <Box><Button>Hello</Button></Box>


      </Box>
      <Box sx={{ display: 'inline-flex' }}>
        <Box><Button>Hello</Button></Box>
        <Box><Button>Hello</Button></Box>

      </Box>

    </>
  )
}
export default Home;