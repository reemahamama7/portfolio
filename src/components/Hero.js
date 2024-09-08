import React from "react";
import Rema from "../assets/rema.png";

import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">R</span>ima <br />
            full stack Developer
          </h1>

          <p className="py-5">I am proficient in laravel and JavaScript, React.js and Tailwind CSS</p>

          <div className="flex py-5 ">
            {/* <a href="https://www.youtube.com/@coderamrin" className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a> */}
            <a href="https://www.facebook.com/share/UV4Z2g69MgkYBz7x/?mibextid=qi2Omg" className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a href="/#projects" className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img src={Rema} alt="coding illustration" className="lgw-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
