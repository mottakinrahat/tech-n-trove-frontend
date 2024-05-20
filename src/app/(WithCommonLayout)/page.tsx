"use client";
import Category from "@/components/UI/HomePage/Category/Category";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import TrendingProducts from "@/components/UI/HomePage/TrendingProducts/TrendingProducts";
import Title from "@/components/UI/Title/Title";
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
      <Category />
      <TrendingProducts />
    </div>
  );
};

export default HomePage;
