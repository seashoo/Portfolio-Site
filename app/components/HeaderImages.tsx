"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderImages() {
  const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredResume, setIsHoveredResume] = useState(false);
  const [isHoveredMail, setIsHoveredMail] = useState(false);

  return (
    <section>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center mt-10 flex-shrink-0 select-none">
          <Link href="https://www.linkedin.com/in/ashish-job/" target="_blank">
            <Image
              src={
                isHoveredLinkedin ? "/clickedLinkedin.svg" : "/openLinkedin.svg"
              }
              width={75}
              height={75}
              className="mx-4 hover:animate-pulse flex-col"
              alt=""
              onMouseOver={() => setIsHoveredLinkedin(true)}
              onMouseOut={() => setIsHoveredLinkedin(false)}
            />
          </Link>
          <Link href="https://github.com/Ashishjob" target="_blank">
            <Image
              src={isHoveredGithub ? "/clickedGithub.svg" : "/openGithub.svg"}
              width={75}
              height={75}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredGithub(true)}
              onMouseOut={() => setIsHoveredGithub(false)}
            />
          </Link>
          <Link
            href="/Ashish_Job_Resume.pdf"
            target="_blank"
          >
            <Image
              src={isHoveredResume ? "/clickedResume.svg" : "/openResume.svg"}
              width={75}
              height={75}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredResume(true)}
              onMouseOut={() => setIsHoveredResume(false)}
            />
          </Link>
          <Link href="mailto:ashishjob104@gmail.com" target="_blank">
            <Image
              src={isHoveredMail ? "/clickedMail.svg" : "/openMail.svg"}
              width={75}
              height={75}
              className="mx-4 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredMail(true)}
              onMouseOut={() => setIsHoveredMail(false)}
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:hidden md:block">
        <div className="flex items-center justify-center mt-6 flex-shrink-0 select-none">
          <Link href="https://www.linkedin.com/in/ashish-job/" target="_blank">
            <Image
              src={
                isHoveredLinkedin ? "/clickedLinkedin.svg" : "/openLinkedin.svg"
              }
              width={65}
              height={65}
              className="mx-4 hover:animate-pulse flex-col"
              alt=""
              onMouseOver={() => setIsHoveredLinkedin(true)}
              onMouseOut={() => setIsHoveredLinkedin(false)}
            />
          </Link>
          <Link href="https://github.com/Ashishjob" target="_blank">
            <Image
              src={isHoveredGithub ? "/clickedGithub.svg" : "/openGithub.svg"}
              width={65}
              height={65}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredGithub(true)}
              onMouseOut={() => setIsHoveredGithub(false)}
            />
          </Link>
          <Link
            href="https://www.ashishjob.com/Ashish_Job_Resume.pdf"
            target="_blank"
          >
            <Image
              src={isHoveredResume ? "/clickedResume.svg" : "/openResume.svg"}
              width={65}
              height={65}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredResume(true)}
              onMouseOut={() => setIsHoveredResume(false)}
            />
          </Link>
          <Link href="mailto:your-ashishjob104@gmail.com" target="_blank">
            <Image
              src={isHoveredMail ? "/clickedMail.svg" : "/openMail.svg"}
              width={65}
              height={65}
              className="mx-4 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredMail(true)}
              onMouseOut={() => setIsHoveredMail(false)}
            />
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-center mt-4 flex-shrink-0 select-none">
          <Link href="https://www.linkedin.com/in/ashish-job/" target="_blank">
            <Image
              src={
                isHoveredLinkedin ? "/clickedLinkedin.svg" : "/openLinkedin.svg"
              }
              width={50}
              height={50}
              className="mx-4 hover:animate-pulse flex-col"
              alt=""
              onMouseOver={() => setIsHoveredLinkedin(true)}
              onMouseOut={() => setIsHoveredLinkedin(false)}
            />
          </Link>
          <Link href="https://github.com/Ashishjob" target="_blank">
            <Image
              src={isHoveredGithub ? "/clickedGithub.svg" : "/openGithub.svg"}
              width={50}
              height={50}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredGithub(true)}
              onMouseOut={() => setIsHoveredGithub(false)}
            />
          </Link>
          <Link
            href="https://www.ashishjob.com/Ashish_Job_Resume.pdf"
            target="_blank"
          >
            <Image
              src={isHoveredResume ? "/clickedResume.svg" : "/openResume.svg"}
              width={50}
              height={50}
              className="mx-2 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredResume(true)}
              onMouseOut={() => setIsHoveredResume(false)}
            />
          </Link>
          <Link href="mailto:your-ashishjob104@gmail.com" target="_blank">
            <Image
              src={isHoveredMail ? "/clickedMail.svg" : "/openMail.svg"}
              width={50}
              height={50}
              className="mx-4 hover:animate-pulse"
              alt=""
              onMouseOver={() => setIsHoveredMail(true)}
              onMouseOut={() => setIsHoveredMail(false)}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
