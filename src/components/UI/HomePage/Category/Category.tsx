import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../../Title/Title";
import Image from "next/image";

const productCategory = [
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
  {
    productImage: "https://i.ibb.co/9Nhpkkz/pngwing-com-7.png",
    title: "Smart watch",
  },
];
const Category = () => {
  return (
    <Container>
      <div>
        <Box sx={{ marginTop: "80px" }}>
          <Title
            upperText="explore product by category"
            heading="Product Category"
          ></Title>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {productCategory.map((category, index) => (
              <Box
                key={index + 1}
                sx={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 5px 12px lightgray",
                  width: "120px",
                  height: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                 
                }}
              >
                <Image
                  src={category?.productImage}
                  height={80}
                  width={80}
                  alt="products"
                ></Image>
                <Typography>{category?.title}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </div>
    </Container>
  );
};

export default Category;
