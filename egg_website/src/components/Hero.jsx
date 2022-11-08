import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        EGGCELLENT
      </h1>
      <Link className="py-6 px-10 bg-yellow-600 rounded-full text-3xl hover:bg-yellow-500 transition duration-500 ease-in-out flex items-center animate-bounce">
        Order Now <AiOutlineShoppingCart className="ml-4" />
      </Link>
    </section>
  );
};

export default Hero;
