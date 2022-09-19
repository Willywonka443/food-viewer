import React from 'react'
import { Typography, Grid, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom'



 const TestGrid = () => {

     return (
        <>
        <Grid container spacing ={2}>
            <Grid item xs={6} md={2} >Hi</Grid>
            <Grid item xs={6} md={2} >Hello</Grid>
            <Grid item xs={6} md={2} >Julie</Grid>
            <Grid item xs={6} md={2} >Jeff</Grid>
            <Grid item xs={6} md={2} >Dean</Grid>
            <Grid item xs={6} md={2} >Willy</Grid>
            
        </Grid>

            <Typography>I'm the Test Grid</Typography>
            <Button component={Link} to="/Search" variant='contained' endIcon={<ArrowForwardIcon />}>Search</Button>
        </>
     )
 }

 export default TestGrid