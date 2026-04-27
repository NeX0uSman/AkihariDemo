"use client";
import React, { useState } from "react";
import { Category } from "@/types/category.type";
import { Question } from "@/types/question.type";
import FaqChildBlock from "./FaqChildBlock";

type Props = {
  categoryObject: Category;
};

const FaqParentBlock = ({ categoryObject }: Props) => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  return (
    <div
      style={{
        animationDelay: `0.1s`,
        animationFillMode: "both",
      }}
      className="rounded-xl flex flex-col gap-4 xl:p-4"
    >
      <p
        style={{
          animationDelay: `0.1s`,
          animationFillMode: "both",
        }}
        className="text-3xl text-(--text-muted) pb-2 border-b border-(--border-subtle) font-bold animate-fadeUp"
      >
        {categoryObject.categoryTitle}
      </p>
      <div className="flex flex-col gap-2">
        {categoryObject.questions.map((question: Question, index) => (
          <div
            key={question.q}
            style={{
              animationDelay: `${(index + 1) * 0.1}s`,
              animationFillMode: "both",
            }}
            className="animate-fadeUp"
          >
            <FaqChildBlock
              key={question.q}
              question={question}
              isActive={activeQuestion === question.q}
              onToggle={() =>
                setActiveQuestion(
                  activeQuestion === question.q ? null : question.q,
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqParentBlock;
