import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center bg-(--bg-tertiary) p-2">
      <a href="tel:+4861xxxxxxx" className="text-(--accent) font-bold text-sm hover:text-(--accent-hover) duration-300 transition-colors">
        +48 61 xxx xxxx
      </a>
      <div className="md:flex md:flex-row md:gap-4">
        <p className="md:block hidden text-(--text-muted) text-sm hover:text-white transition-all duration-200 cursor-pointer">
          Regulamin
        </p>
        <p className="md:block hidden text-(--text-muted)  text-sm hover:text-whitetransition-all duration-200 cursor-pointer">
          Polityka prywatności
        </p>
        <p className="text-(--text-muted) text-sm">© 2025 Akinari · Poznań</p>
      </div>
    </div>
  );
};

export default Footer;
