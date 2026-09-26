import Image from "next/image";
import React from "react";
import footer_logo from "@/assets/SVG.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#0b0d0f]">
      <section className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={footer_logo}
            alt="FitLog"
            width={24}
            height={24}
          />

          <h1 className="text-lg font-bold text-white">
            FITLOG
          </h1>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-[#6B7280] sm:text-right">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </section>
    </footer>
  );
};

export default Footer;