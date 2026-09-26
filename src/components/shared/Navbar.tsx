"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { ExerciseContext } from "@/app/context/ExerciseContext";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  const { todayPlan, savePlan } = useContext(ExerciseContext);

  return (
    <div className="border-b border-gray-800 bg-[#0b0d0f]">
      <nav className=" container mx-auto navbar sticky top-0 z-50 min-h-14  px-5 text-white">
        {/* ================= MOBILE MENU ================= */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm px-2 text-white sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-44 rounded-lg border border-gray-800 bg-[#111419] p-2 shadow-xl"
            >
              <li>
                <Link
                  href="/"
                  className="text-xs text-gray-300 hover:bg-[#1c2128] hover:text-white"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-plans"
                  className="text-xs text-gray-300 hover:bg-[#1c2128] hover:text-white"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="ml-1 flex items-center gap-2">
            <span className="text-lg text-lime-400">
              <Image src={logo} alt=""></Image>
            </span>

            <span className="text-sm font-bold tracking-wide">FITLOG</span>
          </Link>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="navbar-center hidden sm:flex">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="rounded-full px-4 py-1.5 text-[12px] font-semibold text-gray-500 transition hover:bg-[#1A2312] hover:text-lime-500 "
            >
              Workouts
            </Link>

            <Link
              href="/listed-plans"
              className="rounded-full px-4 py-1.5 text-[12px] font-semibold text-gray-500 transition hover:bg-[#1A2312] hover:text-lime-500 "
            >
              My Plan
            </Link>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end gap-3">
          {/* Plan */}
          <Link
            href="/listed-plans"
            className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-white"
          >
            <span>Plan</span>

            <span className="badge badge-sm border-0 bg-lime-400 text-[10px] font-bold text-black">
              {todayPlan?.length ?? 0}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/listed-plans"
            className="flex items-center gap-1 text-[12px] text-gray-400 hover:text-white"
          >
            <span>Saved</span>

            <span className="badge badge-sm border border-gray-700 bg-transparent text-[10px] text-gray-400">
              {savePlan?.length ?? 0}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
