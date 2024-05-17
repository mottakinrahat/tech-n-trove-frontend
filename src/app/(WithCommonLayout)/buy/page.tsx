"use client";
import React from "react";
import BuyCard from "./BuyCard/BuyCard";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";

const Buy = () => {
  const darkMode = useAppSelector(toogleThemes);

  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <div className="relative">
        <HeroSection
          sx={{
            height: "309px",
            width: "100%",
            backgroundImage: `url('https://i.ibb.co/YDfnK3M/Frame-108.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="absolute top-1/4 lg:left-60 w-[980px]">
        <BuyCard />
      </div>
    </div>
  );
};

export default Buy;
