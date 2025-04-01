"use client";
import { useState } from "react";
import HeroCarousel from "../components/Hero";
import Navbar from "../components/Nav";


export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log("RootLayout rendered");
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <HeroCarousel />
    </main>
  );
}
