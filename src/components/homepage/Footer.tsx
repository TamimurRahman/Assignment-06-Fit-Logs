import Image from "next/image";
import React from "react";
import footer_logo from "@/assets/SVG.png";
const Footer = () => {
  return (
    <div className="shadow-sm shadow-gray-300 mt-25 ">
      <section className="container mx-auto flex justify-between mt-15 mb-15 ">
        <div className="flex gap-2">
          <Image src={footer_logo} alt=""></Image>
          <h1 className="font-bold text-lg">FITLOG</h1>
        </div>
        <p className="text-[#6B7280] text-lg">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </section>
    </div>
  );
};

export default Footer;
