import React from 'react'
import { Typography, Grid, Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'


 const Search = () => {

     return (
        <>
        <Grid container spacing ={2}>
            <Grid item xs={6} md={2} >I am the Search Page.</Grid>
            <Grid item xs={6} md={2} >Hello</Grid>
            <Grid item xs={6} md={2} >Julie</Grid>
            <Grid item xs={6} md={2} >Jeff</Grid>
            <Grid item xs={6} md={2} >Dean</Grid>
            <Grid item xs={6} md={2} >Willy</Grid>
            
        </Grid>

        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/TestGrid" variant="contained" startIcon={<ArrowBackIcon />}>Back</Button>
        </>
     )
 }

 export default Search