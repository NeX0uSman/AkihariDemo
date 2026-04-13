"use client";
import { CheckCircleIcon, ClockIcon, UserIcon } from "@phosphor-icons/react";
import React from "react";

const WhyUs = () => {
  return (
    <section className="flex flex-col items-center gap-4 bg-(--bg-tertiary) h-auto py-5 px-6 md:py-24 mx-auto border-b border-(--border)">

      <div className="w-full h-auto flex flex-col items-center">
        <div className="rounded-xl w-full h-auto border border-(--accent-border) bg-(--pill-bg) p-1 text-(--accent)">
          Dlaczego my
        </div>

        <p className="text-xl p-1 font-bold">
          Szkoła stworzona z myślą o tobie
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <div className="p-4 flex flex-row items-start gap-2 bg-(--bg-secondary) rounded-xl border border-(--border)">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <ClockIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1>Elastyczne godziny</h1>
            <p className="text-(--text-muted) text-sm">
              Rano, wieczorem i w weekendy — dopasowujemy się do Ciebie.
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-row items-start gap-2 bg-(--bg-secondary) rounded-xl border border-(--border)">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <UserIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1>Doświadczeni instruktorzy</h1>
            <p className="text-(--text-muted) text-sm">
              Min. 10 lat praktyki i certyfikaty egzaminatora.
            </p>
          </div>
        </div>

        <div className="p-4 flex flex-row items-start gap-2 bg-(--bg-secondary) rounded-xl border border-(--border)">
          <div className="p-2 bg-(--pill-bg) rounded-xl">
            <CheckCircleIcon size={32} weight="light" color="#EA580C" />
          </div>

          <div className="">
            <h1>Gwarancja zdawalności</h1>
            <p className="text-(--text-muted) text-sm">
              Nie zdałeś? Dodatkowe jazdy w cenie kursu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
