import Carousel from "../components/Carousel";

export default function Projects() {
  return (
    <main className="items-center">
      <div className="items-center justify-center flex flex-col">
        <span className="text-2xl md:text-4xl underline">Projects</span>
        <span className="text-base mt-2 animate-pulse">
          Interact with my work!
        </span>
      </div>
      <Carousel />
    </main>
  );
}
// Remove the extra closing curly braces