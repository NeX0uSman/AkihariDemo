import React from "react";
import { instructors } from "@/const/instructors";
import Pill from "@/components/Pill";
import PersonCards from "@/components/PersonCards";

const page = () => {
  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col items-center gap-6 p-8">
      <Pill text={'NASZ ZESPÓŁ'}/>
      <div className="flex flex-col gap-2 justify-center items-center animate-fadeUpHeader text-center">
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold">
          Twoi <span className="text-(--accent)">instruktorzy</span>
        </h1>
        <p className="text-(--text-secondary)">
          Doświadczeni i certyfikowani — jesteś w dobrych rękach
        </p>
      </div>
        <PersonCards instructors={instructors}/>
    </div>
  );
};

export default page;