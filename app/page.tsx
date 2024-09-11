"use client";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Main from "./main/page";

export default function Home() {
  const [finishedTyping, setFinishedTyping] = useState(false);
  const [isWelcomeMessageVisible, setIsWelcomeMessageVisible] = useState(true);
  

  const handleExitComplete = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFinishedTyping(true);
  };

  return (
    <main className="flex flex-col bg-primary w-screen h-screen overflow-hidden text-light-black">
      <CSSTransition
        in={isWelcomeMessageVisible}
        timeout={500}
        classNames="fade"
        unmountOnExit
        onExited={handleExitComplete}
      >
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center h-screen text-xl md:text-4xl">
            <Image
              src="/panda.gif"
              width={200}
              height={200}
              alt=""
              className="select-none hidden md:block"
            />
            <Image
              src="/panda.gif"
              width={100}
              height={100}
              alt=""
              className="select-none md:hidden ml-6"
            />
            <div className="mr-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to my portfolio!")
                  .callFunction(() => {
                    setIsWelcomeMessageVisible(false);
                  })
                  .start();
              }}
            />
            </div>
          </div>
        </div>
      </CSSTransition>
      {finishedTyping && <Main />}
    </main>
  );
}
