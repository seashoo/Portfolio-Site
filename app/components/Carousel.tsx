"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projectData } from "../components/Projects";

export default function Carousel(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current]);

  const startDrag = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const endDrag = (e: React.MouseEvent) => {
    const newDragEnd = e.clientX;
    const deltaX = newDragEnd - dragStart;

    const dragThreshold = 50;

    if (deltaX > dragThreshold) {
      prevSlide();
    } else if (deltaX < -dragThreshold) {
      nextSlide();
    }

    setDragEnd(newDragEnd);
  };

  const nextSlide = () => {
    setCurrent(current === projectData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projectData.length - 1 : current - 1);
  };

  return (
    <div className="" onMouseDown={startDrag} onMouseUp={endDrag}>
      {projectData.map((project, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <div className="flex flex-col items-center h-full">
              <div className="flex items-center m-4 p-2 mx-2 w-full">
                <button
                  className="justify-start hover:text-red text-xl md:text-4xl mr-4 md:mr-8"
                  onClick={prevSlide}
                >
                  &larr;
                </button>
                <div className="flex flex-col items-center w-full">
                  {project.image ? (
                    <Image
                      className="select-none rounded-3xl object-cover" // Set the size for images
                      src={project.image}
                      alt={project.title}
                      width={150} // Set to your desired smaller width
                      height={100} // Set to your desired smaller height
                      layout="fixed" // Changed layout to fixed for consistent sizing
                    />
                  ) : project.link ? (
                    <iframe
                      title="Project Frame"
                      src={project.link}
                      className="w-[1100px] h-[600px] bg-[#ffffff]" // Shortened width and height for the iframe
                    />
                  ) : (
                    <div className="w-full h-[300px] flex items-center justify-center">
                      <p>No image or link available.</p>
                    </div>
                  )}
                </div>
                <button
                  className="justify-end hover:text-red text-xl md:text-4xl ml-4 md:ml-8"
                  onClick={nextSlide}
                >
                  &rarr;
                </button>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="text-xl md:text-3xl underline text-left w-2/3">
                  {project.title}
                </h2>
                <p className="mb-4 text-base md:text-xl text-left w-2/3">
                  {project.description}
                </p>
                <ul className="grid grid-cols-7 lg:grid-cols-10 gap-4 text-xs text-left w-2/3">
                  {project.icons.map((icon, icon_ind) => (
                    <li key={icon_ind} className="w-8 h-8 lg:w-12 lg:h-12 mr-8">
                      <div
                        onMouseEnter={() => setHoveredIcon(icon)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className="relative"
                      >
                        <Image
                          src={`/${icon}.svg`}
                          width={50}
                          height={50}
                          alt="icon"
                          className="select-none rounded-lg"
                        />
                        {hoveredIcon === icon && (
                          <div className="whitespace-nowrap absolute top-0 left-0 bg-primary border-2 border-light-black text-xs px-2 py-1 rounded">
                            {icon}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row items-center mt-8 lg:mt-4 text-xs md:text-sm text-left w-2/3">
                  {project.demo && (
                    <button
                      className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      View Demo
                    </button>
                  )}
                  {project.code && (
                    <button
                      className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                      onClick={() => window.open(project.code, "_blank")}
                    >
                      View Code
                    </button>
                  )}
                  {project.presentation && (
                    <button
                      className="hover:bg-red rounded-lg text-primary mr-6 bg-light-black p-2 mb-2"
                      onClick={() =>
                        window.open(project.presentation, "_blank")
                      }
                    >
                      View Presentation
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center space-x-3 mt-4">
        {projectData.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-light-black" : "bg-light-black opacity-50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
