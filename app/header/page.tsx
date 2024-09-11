"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderImages from "../components/HeaderImages";

export default function Header() {
  
  return (
    <section>
  <div className="flex flex-row items-center justify-center text-light-black">
    <div className="bg-light-black w-2 h-12"></div>
    <div className="mt-8 ml-4 mr-4 text-center whitespace-nowrap">
      <span className="text-5xl tracking-wider lg:text-9xl md:text-7xl lg:tracking-wide">Sahran Ashoor</span>
      <div className="bg-red h-8 md:mb-2"></div>
      <span className="text-xs lg:text-3xl md:text-lg tracking-wider">
        Computer Engineering @ The University of Houston
      </span>
    </div>
    <div className="bg-light-black w-2 h-12"></div>
  </div>
  <HeaderImages />
</section>
  );
}
