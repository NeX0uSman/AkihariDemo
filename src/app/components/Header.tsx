"use client";
import { HexagonIcon, ListIcon } from "@phosphor-icons/react";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex w-full h-15 text-sm justify-between items-center border-b border-(--border) p-2 font-[nunito] bg-(--bg-tertiary) md:justify-around">
      <section className="flex gap-2 items-center justify-center">
        <HexagonIcon size={38} weight="bold" color="#EA580C" />
        <p className="text-(--text-primary) font-bold">Akinari</p>
      </section>

      <section className="flex gap-5 items-center md:justify-around ">
        <span className="hidden text-md text-(--text-secondary) md:block">Kursy</span>
        <span className="hidden text-md text-(--text-secondary) md:block">Instruktorzy</span>
        <span className="hidden text-md text-(--text-secondary) md:block">Cennik</span>
        <span className="hidden text-md text-(--text-secondary) md:block">Kontakt</span>
        <button
          className="bg-(--accent) hover:bg-(--accent-hover) transition-colors rounded-md px-3 py-2 font-semibold text-xs text-(--text-primary)">
          Zapisz się
        </button>
        <ListIcon size={28} weight="light" color="#9BA3A6" className="md:hidden"/>
      </section>
    </header>
  );
};

export default Header;
