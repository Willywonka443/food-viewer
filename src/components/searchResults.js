import { Badge, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, ListItem, Rating, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { DeliveryDining, TakeoutDining  } from "@mui/icons-material";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';









const SearchResults = ({ food, title, setRestId}) => {


  
  
  const navigate = useNavigate()
  const goToDetails = (id) => {
    setRestId(id)
    navigate("/detail")
  }



  return (
    <>

      {
        //ternary 
        (food.length > 0) ? (<Typography variant="h4">{title}</Typography>
        ) : (
          <></>
        )


      }

      <Grid container spacing={2} sx={{ pt: 2 }}>


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
                          <Rating
                            name="rating"
                            value={value.rating}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 1 }} />}
                          /> <br />
                        
                          

                        </Typography> <br/>

                        
                          <Badge badgeContent={value.review_count}   max={99999} color="primary" >
                            <ReviewsIcon/>
                          </Badge> <br/>
                          {
                          value.transactions.map( (value2) => {
                            let icon;
                           
                          
                            if (value2 === "delivery") {
                              icon = <DeliveryDining/>;
                            }
                            if (value2 === "pickup") {
                              icon = <TakeoutDining/>;
                            }
                            if (value2 === "restaurant_reservation"){
                              icon = <DinnerDiningIcon/>
                            }
                            return(

                                    <ListItem >
                                      <Chip
                                        icon={icon} 
                                        label={value2}
                                      />
                                    </ListItem>
                                  );
                                })
                                
                            }

                        <Typography variant="body1" color="text.secondary">
                          {value.location.address1} <br />
                          {value.location.city}, {value.location.state}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" fontWeight='bold'>
                          {value.display_phone}
                        </Typography>

                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={(e) => goToDetails(value.id)}>Details</Button>

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