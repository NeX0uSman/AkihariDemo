"use client";
import {
  CaretLeftIcon,
  HexagonIcon,
  ListIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/akinariLogo.webp";
import Image from "next/image";
import { Button } from "./ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsMenuOpen(false);
    }, 250);
  }; //refactor in future!
  const [isDark, setIsDark] = useState(false);

  const themeChange = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <>
      <header className="flex w-full h-15 text-sm justify-between items-center border-b border-(--border) p-2 font-[syne] bg-(--bg-tertiary) md:justify-around">
        <section className="flex gap-2 items-center justify-center">
          <HexagonIcon size={38} weight="bold" color="#EA580C" />
          <Link href="/" className="text-(--text-primary) font-bold">
            Akinari
          </Link>
        </section>

        <section className="flex gap-5 items-center md:justify-around ">
          <Link
            href="/FAQ"
            className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200"
          >
            Pytania
          </Link>
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
          <Button className="hidden md:block" onClick={() => themeChange()}>
            {isDark ? (
              <MoonIcon size={52} weight="light" />
            ) : (
              <SunIcon size={52} weight="light" />
            )}
          </Button>
        </section>
      </header>

      {isMenuOpen && (
        <div
          className={`${isClosing ? "animate-slideOut" : "animate-fadeIn"} fixed top-0 left-0 w-full h-screen overflow-hidden bg-(--bg-secondary) z-50 flex flex-col items-center justify-start gap-4`}
        >
          <div className="cursor-pointer w-full flex flex-row justify-between items-start p-2">
            <CaretLeftIcon
              size={38}
              weight="light"
              className="p-2 bg-(--bg-secondary)  rounded-xl border border-(--border) active:scale-85 transition-all duration-200 ml-4 mt-4"
              onClick={() => closeMenu()}
            />
            <Button
              className="block p-2 bg-(--bg-secondary) rounded-xl border border-(--border) active:scale-85 transition-all duration-200 mr-4 mt-4"
              onClick={() => themeChange()}
            >
              {isDark ? (
                <MoonIcon
                  size={52}
                  weight="light"
                  color={
                    isDark ? "text-(--text-primary)" : "text-(--text-primary)"
                  }
                />
              ) : (
                <SunIcon size={52} weight="light" />
              )}
            </Button>
          </div>

          <div className="w-full h-full z-50 flex flex-col items-center justify-start gap-4">
            <div>
              <Image
                src={logo}
                alt="logo"
                className="w-[250px] h-[125px] object-contain animate-fadeUpHeader"
              />
            </div>
            <Link
              href="/FAQ"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
              className="nav-link animate-fadeUp active:scale-95 p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Pytania
            </Link>
            <Link
              href="/courses"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              className="nav-link animate-fadeUp active:scale-95 p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Kursy
            </Link>
            <Link
              href="/instructors"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Instruktorzy
            </Link>
            <Link
              href="/contact"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl text-(--text-secondary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
              onClick={() => closeMenu()}
            >
              Kontakt
            </Link>
            <Link
              href="/enrollment"
              style={{ animationDelay: "0.5s", animationFillMode: "both" }}
              className="nav-link animate-fadeUp p-2 w-full text-center text-2xl bg-(--accent) text-(--text-primary) hover:text-(--text-primary) hover:transition-all duration-200 border-b border-t border-(--border)"
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
