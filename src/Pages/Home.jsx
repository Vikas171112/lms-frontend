import React from "react";
import heroBgImage from "../assets/heroBgImage.webp";
import TypewriterComponent from "typewriter-effect";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 min-w-full">
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-container text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800">
            Stay Ahead of
            <br /> the Curve With our{" "}
            <span className="text-orange-400">
              <TypewriterComponent
                options={{
                  strings: [
                    "Practical",
                    "Affordable",
                    "Cutting-Edge",
                    "In-Demand",
                  ], // More options
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000, // Pause between loops
                  cursor: "|", // Customize cursor
                  wrapperClassName: "inline", // Prevents line breaks
                }}
              />
            </span>
            Courses
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn valuable skills and advance your career.
          </p>
          <button
            onClick={() => {
              navigateavigate("/courselist");
            }}
            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            Explore Courses
          </button>
        </div>
        <div className="image-container w-full md:w-1/2 lg:w-2/5">
          <img
            src={heroBgImage}
            alt="Hero Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
