import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

const FeaturedPost = (props) => {
const { post } = props;

  return(
    <Grid item xs={12} md={6} >
    <CardActionArea component="a" href="#">

    
  <Card sx={{ display: "flex"}} >
    <CardContent >
    <Typography component="h2" variant="h5">
      {post.title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      {post.date}
    </Typography>
    <Typography variant="subtitle1" paragraph >
      {post.description}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      Continue reading...
    </Typography>
    </CardContent>
    <CardMedia component="img" 
      sx={{width: 160, display: { xs: 'none', sm: 'block' } }} 
      image={post.image}
      alt={post.imageLabel}
      />
  </Card>
  </CardActionArea>
  </Grid>
  );
};

export default FeaturedPost;
