"use client";
import { FacebookLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center bg-(--bg-tertiary) p-2">
      <a
        href="tel:+4861xxxxxxx"
        className="text-(--accent) font-bold text-sm hover:text-(--accent-hover) duration-300 transition-colors"
      >
        +48 61 xxx xxxx
      </a>
      <div className="md:flex md:flex-row md:gap-4">
        <p className="md:block hidden text-(--text-muted) text-sm hover:text-white transition-all duration-200 cursor-pointer">
          Regulamin
        </p>
        <p className="md:block hidden text-(--text-muted)  text-sm hover:text-white transition-all duration-200 cursor-pointer">
          Polityka prywatności
        </p>
        <p className="text-(--text-muted) text-sm">© 2025 Akinari · Poznań</p>
      </div>
      <div className="flex gap-4 items-center">
        <a
          href="https://www.facebook.com/oskakinari"
          target="_blank"
          className="flex items-center gap-2 text-(--text-secondary) hover:text-(--accent) transition-colors"
        >
          <FacebookLogoIcon size={20} />
          <span className="text-sm">Facebook</span>
        </a>
        <a
          href="https://www.youtube.com/@oskakinari9130"
          target="_blank"
          className="flex items-center gap-2 text-(--text-secondary) hover:text-(--accent) transition-colors"
        >
          <YoutubeLogoIcon size={20} />
          <span className="text-sm">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
