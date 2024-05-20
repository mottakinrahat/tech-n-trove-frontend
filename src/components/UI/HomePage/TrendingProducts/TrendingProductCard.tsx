import React from 'react';
import Title from "../../Title/Title";
import Image from "next/image";
import Card from '@mui/material/Card';
import { Box, Container, Stack, Typography } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const ProductCard = [

// {
//     productImage:"https://m.media-amazon.com/images/I/71W0+kFYV7L.jpg",
//     title: "Web-Cam",
// }

// ]


const TrendingProductCard = () => {
    return (
       
   <Container>
        
           
      <div> 
           
          <Box sx={{ marginTop: "80px" }}>
                  
          <Title
            upperText="GO TO DAILY DEALS"
            heading="TRENDING PRODUCTS"
          ></Title>
           
          </Box>


      {/* Card-1 Design  */}

      <Box>
      <Card sx={{ 
        maxWidth: 320, 
        borderRadius: 2, 
        boxShadow: 'none', 
        border: '1px solid #d3d3d3',
        backgroundColor: 'white' 
      }}>
        <CardMedia
          component="img"
          alt="Web Cam"
          height="80"
          image="https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SL1500_.jpg"
          padding = "8px"
        />
        <Box sx={{ padding: '8px 16px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
            ৳ 3399
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
              4800
            </Typography>
          </Box>
         
          <Typography variant="body2" color="red" sx={{ marginTop: '4px' }}>
            28% OFF
          </Typography>

          <Typography variant="body2" color="green" sx={{ marginTop: '4px' }}>
            In stock
          </Typography>

        </Box>



        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web-Cam
          </Typography>


          <Typography variant="body2" color="text.secondary">
            High-definition webcam with 1080p resolution for crisp video quality.
          </Typography>


        </CardContent>




        <CardActions>
        <Button 


  size="small" 

  startIcon={<ShoppingCartIcon />}
>
  Add To Cart
       </Button>
       
       
       <Button 
            size="small" 

          >
           See details
          </Button>
        </CardActions>
      </Card>
    </Box>
       

      

      </div>







   </Container>

    




    );
};

export default TrendingProductCard;