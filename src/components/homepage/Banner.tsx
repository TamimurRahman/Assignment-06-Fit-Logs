import Image from "next/image";
import React from "react";
import banner_logo from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto m-12">
      <div className="grid grid-cols-2 items-center gap-55 bg-[#222630] p-20 rounded-2xl">
        <div className="flex flex-col gap-5 justify-start w-130">
          <h6>WORKOUT LIBRARY</h6>
          <h1 className="text-5xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="bg-[#C2F800] hover:bg-blue-700 text-black w-55 font-bold py-2 px-4 rounded">
            BROWSE WORKOUTS
          </button>
        </div>
        <Image src={banner_logo} alt=""></Image>
      </div>
    </section>
  );
};

export default Banner;
