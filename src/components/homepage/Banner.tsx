import Image from "next/image";
import React from "react";
import banner_logo from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#222630] p-6 sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          <h6 className="text-xs font-semibold tracking-widest text-[#C2F800]">
            WORKOUT LIBRARY
          </h6>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-2 w-full rounded bg-[#C2F800] px-4 py-3 text-sm font-bold text-black transition hover:bg-[#a9d900] sm:w-fit">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={banner_logo}
            alt="FitLog workout"
            className="h-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
