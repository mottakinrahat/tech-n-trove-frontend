"use client";
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { toogleTheme, toogleThemes } from "@/redux/themeSlice/themeSlice";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
    <Box
      sx={{
        backgroundColor: darkMode ? "#3C0753" : "secondary.main",
        paddingX: "112px",
        position: "relative",
        color: darkMode ? "white" : "black",
      }} // Added position relative
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
        <Box>
          <Image
            src="https://i.ibb.co/HhbnBms/Hertiage-Nest-Final-LOGO-1-1.png"
            height={40}
            width={40}
            alt="alternative"
          ></Image>
        </Box>
        <Stack
          direction={{ lg: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          paddingX="32px"
          display={{ xs: "none", sm: "hidden", md: "flex" }}
        >
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
          <Typography component="div">
            <Link href="/flash-sale">Manage Rentals</Link>
          </Typography>
          <Button variant="text">Sign In</Button>
        </Stack>
        {/* Toggle Icon for Small Devices */}
        <IconButton
          onClick={toggleDropdown}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {showDropdown ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Stack>
      {/* Dropdown for Small Devices */}
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
            marginTop: 8, // Added margin top to separate from the button
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
            <Typography component="div">
              <Link href="/flash-sale">Manage Rentals</Link>
            </Typography>
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
  );
};

export default Navbar;
