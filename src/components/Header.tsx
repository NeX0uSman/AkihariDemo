"use client";
import { CaretLeftIcon, HexagonIcon, ListIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/akinariLogo.png";
import Image from "next/image";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMenuOpen(false);
    }, 250);
  };
  return (
    <>
      <header className="flex w-full h-15 text-sm justify-between items-center border-b border-(--border) p-2 font-[syne] bg-(--bg-tertiary) md:justify-around">
        <section className="flex gap-2 items-center justify-center">
          <HexagonIcon size={38} weight="bold" color="#EA580C" />
          <Link href="/landing" className="text-(--text-primary) font-bold">
            Akinari
          </Link>
        </section>

        <section className="flex gap-5 items-center md:justify-around ">
          <Link
            href="/courses"
            className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200"
          >
            Kursy
          </Link>
          <Link
            href="/instructors"
            className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200"
          >
            Instruktorzy
          </Link>
          <Link
            href="/contact"
            className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200"
          >
            Kontakt
          </Link>
          <Link
            href="/enrollment"
            className="bg-(--accent) hover:bg-(--accent-hover) transition-colors rounded-md px-3 py-2 font-semibold text-xs text-(--text-primary) cursor-pointer"
          >
            Zapisz się
          </Link>
          <ListIcon
            size={28}
            weight="light"
            color="#9BA3A6"
            className="md:hidden active:scale-95 transition-all duration-200 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </section>
      </header>

      {isMenuOpen && (
        <div
          className={`${isClosing ? "animate-slideOut" : "animate-fadeIn"} fixed top-0 left-0 w-full h-screen overflow-hidden bg-(--bg-secondary) z-50 flex flex-col items-center justify-start gap-4`}
        >
          <div
            className="cursor-pointer active:scale-85 transition-all duration-200 w-full flex flex-row justify-start items-start ml-4 mt-4 p-2 h-[25vh]"
            onClick={() => closeMenu()}
          >
            <CaretLeftIcon
              size={38}
              weight="light"
              className="p-2 bg-(--bg-secondary)  rounded-xl border border-(--border)"
            />
          </div>

          <div className="w-full h-full z-50 flex flex-col items-center justify-start gap-4">
            <div>
              <Image src={logo} alt="logo"/>
            </div>
            <div className="flex flex-col gap-4"></div>

            <Link
              href="/courses"
              style={{ animationDelay: '0.1s', animationFillMode: "both",}}
              className="nav-link animate-fadeUp active:scale-95 p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Kursy
            </Link>
            <Link
              href="/instructors"
              style={{ animationDelay: '0.2s', animationFillMode: "both", }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Instruktorzy
            </Link>
            <Link
              href="/contact"
              style={{ animationDelay: '0.3s', animationFillMode: "both", }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Kontakt
            </Link>
            <Link
              href="/enrollment"
              style={{ animationDelay: '0.4s', animationFillMode: "both", }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl bg-(--accent) text-white hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Zapisz się
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
