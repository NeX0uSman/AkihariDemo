"use client";
import {
  CheckCircleIcon,
  ClockIcon,
  DesktopIcon,
  UserIcon,
} from "@phosphor-icons/react";
import React from "react";

const WhyUs = () => {
  return (
    <section className="flex flex-col items-center gap-5 bg-(--bg-secondary) h-auto py-5 px-6 md:py-24 mx-auto border-b border-t border-(--border)">
      <div className="w-full h-auto flex flex-col items-center">
        <div className="rounded-xl w-full md:w-1/3 h-auto md:text-center border border-(--accent-border) bg-(--pill-bg) p-1 text-(--accent)">
          Dlaczego my
        </div>

        <p className="text-xl p-1 font-bold">
          Szkoła stworzona z myślą o tobie
        </p>
      </div>

      <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
        <div className="p-4 flex flex-row items-start md:flex-col md: justify-center md:gap-5 gap-2 bg-(--bg-tertiary) rounded-xl border border-(--border) md:w-130 md:h-70">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <ClockIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1 className="md:text-3xl">Elastyczne godziny</h1>
            <p className="text-(--text-muted) text-sm md:text-xl">
              Rano, wieczorem i w weekendy — dopasowujemy się do Ciebie.
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-row items-start md:flex-col md: justify-center md:gap-5 gap-2 bg-(--bg-tertiary) rounded-xl border border-(--border) md:w-130 md:h-70">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <UserIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1 className="md:text-3xl">Doświadczeni instruktorzy</h1>
            <p className="text-(--text-muted) text-sm md:text-xl">
              Min. 10 lat praktyki i certyfikaty egzaminatora.
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-row items-start md:flex-col md: justify-center md:gap-5 gap-2 bg-(--bg-tertiary) rounded-xl border border-(--border) md:w-130 md:h-70">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <CheckCircleIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1 className="md:text-3xl">Gwarancja zdawalności</h1>
            <p className="text-(--text-muted) text-sm md:text-xl">
              Nie zdałeś? Dodatkowe jazdy w cenie kursu.
            </p>
          </div>
        </div>

        <div className="p-4 hidden md:flex flex-row items-start md:flex-col md: justify-center md:gap-5 gap-2 bg-(--bg-tertiary) rounded-xl border border-(--border) md:w-130 md:h-70">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <DesktopIcon size={42} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1 className="md:text-3xl">Nowoczesna platforma</h1>
            <p className="text-(--text-muted) text-sm md:text-xl">
              Harmonogram jazd, materiały i postępy — wszystko w jednym miejscu
              online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
