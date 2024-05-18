"use client";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";
import React from "react";

const HomePage = () => {
  const darkMode: any = useAppSelector(toogleThemes);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <HeroSection />
    </div>
  );
};

export default HomePage;
