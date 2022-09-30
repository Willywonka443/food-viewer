import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const SearchResults = ({food, title }) => {

    return(
    <>
      
      {
          //ternary 
          (food.length > 0) ?  (<Typography variant="h4">{title}</Typography>
          ) : (
            <></>
          ) 
          

      }

      <Grid container spacing={2} sx={{pt:2}}>


        {
          food.map(
            (value, index) => {
              return (
                <Grid key={index} item xs={6} md={2} >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={value.image_url}
                        alt={value.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {value.name}
                        </Typography>
                      
                       <Typography variant="subtitle2" color="text.secondary">
                        Rating: {value.rating} <br/>
                        Reviews: {value.review_count} 
                        </Typography> <br/>
                        
                        <Typography variant="body1" color="text.secondary">
                        {value.location.address1} <br/>
                        {value.location.city}, {value.location.state} 
                        </Typography>
                       
                        <Typography variant="body2" color="text.secondary" fontWeight='bold'>
                        {value.display_phone}
                        </Typography>

                      </CardContent>
                      <CardActions>
                        <Button size="small">Details</Button>
                        {/* <Button size="small">Learn More</Button> */}
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            }
          )
        }

      </Grid>

    </>

  )
}

export default SearchResults