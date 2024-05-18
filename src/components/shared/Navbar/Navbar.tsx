"use client";
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { toogleTheme, toogleThemes } from "@/redux/themeSlice/themeSlice";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Navbar = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(toogleThemes);
  const handleToggleThemes = () => {
    dispatch(toogleTheme());
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Box>
      <Box bgcolor="black" paddingX={10} color="white">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "8px",
              backgroundColor: "primary.main",
            }}
          >
            <FacebookIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Box sx={{ color: "primary.main" }}>
              <CalendarMonthIcon />
            </Box>
            <Typography>May 18,2024</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Box sx={{ color: "primary.main" }}>
              <EmailIcon />
            </Box>
            <Typography>techandtrove@gmail.com</Typography>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX={10}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src="https://i.ibb.co/F5WvHLr/TNT-Logo-9.png"
            height={100}
            width={100}
            alt="alternative"
          ></Image>
          <Image
            src="https://i.ibb.co/qDMb5yb/whitebg.png"
            height={150}
            width={150}
            alt="alternative"
          ></Image>
        </Box>
        <Box>
          {" "}
          <Button
            variant="text"
            onClick={handleToggleThemes}
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2"
          >
            {darkMode ? (
              <HiOutlineMoon size={30} />
            ) : (
              <HiOutlineSun size={30} />
            )}
          </Button>
          <Button style={{ color: "white" }}>Sign In</Button>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: darkMode ? "#3C0753" : "#ffffff",
            paddingX: "112px",
            position: "absolute",
            top: -40,
            zIndex: 999,
            borderTop: "6px solid #E49714",
            borderBottom: "6px solid #E49714",
            borderRadius: 50,
            maxWidth: "1200px",
            color: darkMode ? "white" : "black",
          }}
          maxHeight={96}
          fontSize={18}
        >
          <Stack
            py={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              gap={4}
              justifyContent="space-between"
              alignItems="center"
              display={{ xs: "none", sm: "hidden", md: "flex" }}
            >
              <Typography component="div">
                <Link href="/">Home</Link>
              </Typography>
              <Typography component="div">
                <Link href="/buy">Buy</Link>
              </Typography>
              <Typography component="div">
                <Link href="/searchresult">Properties</Link>
              </Typography>
              <Typography component="div">
                <Link href="/aboutus">About Us</Link>
              </Typography>
            </Stack>

            <Stack
              direction={{ lg: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
              paddingX="32px"
              display={{ xs: "none", sm: "hidden", md: "flex" }}
            >
              <Typography
                component="div"
                sx={{
                  backgroundColor: "#E7E7E7",
                  borderRadius: "50px",
                  padding: "6px",
                }}
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Typography>
            </Stack>
            <IconButton
              onClick={toggleDropdown}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {showDropdown ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Stack>
          {showDropdown && (
            <Box
              sx={{
                height: "auto",
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 9999,
                marginTop: 8,
              }}
            >
              <Typography component="div">
                <Link href="/">Home</Link>
              </Typography>
              <Typography component="div">
                <Link href="/buy">Buy</Link>
              </Typography>
              <Typography component="div">
                <Link href="/searchresult">Properties</Link>
              </Typography>
              <Typography component="div">
                <Link href="/aboutus">About Us</Link>
              </Typography>
              <Stack
                direction={{ lg: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
                paddingX="32px"
              >
                <Typography component="div"></Typography>
                <Button
                  variant="text"
                  onClick={handleToggleThemes}
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2"
                >
                  {darkMode ? (
                    <HiOutlineMoon size={30} />
                  ) : (
                    <HiOutlineSun size={30} />
                  )}
                </Button>
                <Button variant="text">Sign In</Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
