"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderImages from "../components/HeaderImages";

export default function Header() {
  
  return (
    <section>
    <div className="flex flex-row justify-center text-light-black">
      <div className="bg-light-black w-2 mt-12"></div>
      <div className="mt-8 ml-4 mr-4 w-fit whitespace-nowrap flex flex-col items-center">
        <span className="text-5xl tracking-wider lg:text-9xl md:text-7xl lg:tracking-wide">Sahran Ashoor</span>
        <div className="bg-red-500 h-8 w-full md:mb-2"></div> <!-- Explicit height and color -->
        <span className="text-xs lg:text-3xl md:text-lg tracking-wider text-center">
          Computer Engineering @ The University of Houston
        </span>
      </div>
      <div className="bg-light-black w-2 mt-12"></div>
    </div>
    <HeaderImages />
  </section>
  );
}
