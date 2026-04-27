"use client";
import { Question } from "@/types/question.type";
import { CaretDownIcon } from "@phosphor-icons/react";
import React from "react";

type Props = {
  question: Question;
  isActive: boolean;
  onToggle: () => void;
};

const FaqChildBlock = ({ question, isActive, onToggle }: Props) => {
  return (
    <div className="border border-(--border) rounded-xl overflow-hidden">
      <p className="flex flex-row justify-between items-center p-4 cursor-pointer text-white font-bold  border-b border-(--border-subtle)" onClick={onToggle}>
        {question.q}
        <CaretDownIcon
          size={21}
          weight="light"
          className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          color={`${isActive ? '#EA580C' : '#FFFFFF'}`}
        />
      </p>
<div className={`grid transition-all duration-300 ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
  <div className="overflow-hidden">
    <p className="px-4 pb-4 text-(--text-secondary) text-md pt-4">{question.a}</p>
  </div>
</div>
    </div>
  );
};

export default FaqChildBlock;