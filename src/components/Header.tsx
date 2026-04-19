"use client";
import { HexagonIcon, ListIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex w-full h-15 text-sm justify-between items-center border-b border-(--border) p-2 font-[nunito] bg-(--bg-tertiary) md:justify-around">
      <section className="flex gap-2 items-center justify-center">
        <HexagonIcon size={38} weight="bold" color="#EA580C" />
        <Link href="/landing" className="text-(--text-primary) font-bold">Akinari</Link>
      </section>

      <section className="flex gap-5 items-center md:justify-around ">
        <Link href="/courses" className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200">Kursy</Link>
        <Link href="/instructors" className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200">Instruktorzy</Link>
        <Link href="/prices" className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200">Cennik</Link>
        <Link href="/contact" className="hidden text-md text-(--text-secondary) md:block hover:text-(--text-primary) hover:transition-all duration-200">Kontakt</Link>
        <button
          className="bg-(--accent) hover:bg-(--accent-hover) transition-colors rounded-md px-3 py-2 font-semibold text-xs text-(--text-primary) cursor-pointer">
          Zapisz się
        </button>
        <ListIcon size={28} weight="light" color="#9BA3A6" className="md:hidden"/>
      </section>
    </header>
  );
};

export default Header;
