import FaqParentBlock from "@/components/FaqParentBlock";
import Pill from "@/components/Pill";
import React from "react";
import { faqCategories } from "@/const/faq";
const page = () => {
  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-start items-center gap-6 p-8">
      <Pill text="Pytania i odpowiedzi" />
      <div
        style={{
          animationDelay: `0.2s`,
          animationFillMode: "both",
        }}
        className="flex flex-col gap-2 justify-center items-center animate-fadeUpHeader"
      >
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold xl:font-extrabold text-center leading-tight">
          Wszystko o Twoim <span className="text-(--accent)">kursie</span>
        </h1>
        <p className="text-(--text-secondary) max-w-md text-center">
          Sprawdź najczęstsze pytania i zacznij naukę bez zbędnego stresu.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 p-8 max-w-6xl w-full">
        {faqCategories.map((category) => {
          return <FaqParentBlock key={category.id} categoryObject={category} />;
        })}
      </div>
    </div>
  );
};

export default page;
