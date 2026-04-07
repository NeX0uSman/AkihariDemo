'use client'
import { HexagonIcon, ListIcon } from "@phosphor-icons/react";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row w-100vw h-10 text-s justify-around items-center border-b border-b-[#404749] p-2 font-[nunito] bg-[#1a1c1d]">
      <section className="w-1/3 flex justify-start gap-2 items-center">
        <HexagonIcon size={32} weight="bold" color="orange" />{" "}
        <p className="text-[#e6e8e9] font-bold">Akinari</p> <p></p>
      </section>
      <section className="w-2/3 flex justify-end gap-5 items-center">
        <button className="bg-amber-600 rounded-md border-0  p-0.5 font-semibold">
          Zapisz sie
        </button>
        <ListIcon size={32} weight="light" color="white" />
      </section>
    </header>
  );
};

export default Header;
