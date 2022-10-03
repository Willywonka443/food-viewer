import React from 'react'
import { Typography, Grid, Button, Card, CardContent } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom'



 const TestGrid = () => {
     const people = ["Julie","Jeff","Dean","Willy","Ty","Frank"]
     return (
        <>
        
        <Grid container spacing ={2} sx={{pt: 2}}>

            
            {
                people.map(
                    (value, index) => {
                        return (
                            <Grid key={index} item xs={6} md={2} >
                                <Card>
                                    <CardContent>
                                        {value}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                )
            }            
        </Grid>
        

            <Typography>I'm the Test Grid</Typography>
            <Button component={Link} to="/Search" variant='contained' endIcon={<ArrowForwardIcon />}>Search</Button>
        </>
     )
 }

 export default TestGrid