"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderImages from "../components/HeaderImages";

export default function About() {
  return (
    <section className="flex flex-row justify-center items-center text-light-black">
      <div className="flex flex-row bg-primary w-2/3 lg:w-1/2 mt-16">
        <div className="bg-light-black"></div>
        <div className="w-fit text-light-black tracking-widest mx-4 my-4">
        <span className="text-2xl md:text-4xl underline text-center items-center justify-center flex flex-row">
            About Me
        </span>
        <br></br><br></br>
            <span className="text-base md:text-xl ">
            Hey! I&apos;m <span className="hover:text-red">Sahran Ashoor</span>, a sophomore studying <span className="hover:text-red">computer engineering</span> at the University of Houston. I&apos;m interested in working in <span className="hover:text-red">AI</span> and <span className="hover:text-red">embedded software</span>, and outside of tech, I love photography, travel, and playing the electric guitar.
          </span>
          <br></br><br></br>
          <span className="text-base md:text-xl">
          Feel free to connect with me on <span className="hover:text-red"><a href="https://www.linkedin.com/in/ashoorsahran/" target="_blank">LinkedIn</a></span>, check out my work on <span className="hover:text-red"><a href="https://github.com/seashoo" target="_blank">GitHub</a></span>, or shoot
          me an <span className="hover:text-red"><a href="mailto:ashoorsahran@gmail.com" target="_blank">email</a></span>!
          </span>
        </div>
      </div>
    </section>
  );
}
