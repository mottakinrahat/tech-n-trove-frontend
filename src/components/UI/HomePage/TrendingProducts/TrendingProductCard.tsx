import React from 'react';
import Title from "../../Title/Title";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";

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
            
        <Box sx={{ marginTop: "100px" }}>
          <Title
            upperText="GO TO DAIly DEALS"
            heading="TRENDING PRODUCTS"
          ></Title>
           
            <Box>
               
            sx={{
                //   backgroundColor: "#ffffff",
                //   boxShadow: "0 5px 12px lightgray",
                //   width: "120px",
                //   height: "120px",
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "center",
                //   alignItems: "center",
                 
                }}



            </Box>
        
        </Box>

            
        </div>
         
         </Container>

    );
};

export default TrendingProductCard;