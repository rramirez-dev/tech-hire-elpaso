"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 max-w-[1440px] mx-auto flex justify-between items-center text-black py-4 px-4 md:px-32 bg-white drop-shadow-sm">
        <a href="#">
          <Image
            src="/images/techhireep_logo.png"
            alt="Tech Hire El Paso Logo"
            width={100}
            height={100}
          ></Image>
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3  hover:text-red-500 rounded-md transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3 hover:text-red-500 rounded-md transition-all">
            <Link href="/events">Events</Link>
          </li>
          <li className="p-3 hover:text-red-500 rounded-md transition-all">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="relative xs:flex sm:flex md:flex items-center justify-center gap-3">
          <Link
            href="/login"
            className=" hidden xl:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Login
          </Link>
          <Image
            className="xl:hidden text-5xl cursor-pointer block"
            src="/images/menu.png"
            width={30}
            height={30}
            alt="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></Image>
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute xl:hidden top-22 left-0 w-full bg-white flex flex-col items-center gap-2 font-medium text-md transform transition-transform p-5 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease,opacity 0.3s ease" }}
        >
          <ul>
            <li className="list-none w-full text-center p-2 hover:text-red-500 transition-all cursor-pointer">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="list-none w-full text-center p-2 hover:text-red-500 transition-all cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="list-none w-full text-center p-2 hover:text-red-500 transition-all cursor-pointer">
              <Link href="/events" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Events
              </Link>
            </li>
            <li className="list-none w-full text-center p-2 hover:text-red-500 transition-all cursor-pointer">
              <Link href="/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Contact
              </Link>
            </li>
            <li className="list-none w-full text-center p-2 hover:text-red-500 transition-all cursor-pointer">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mb-5"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
