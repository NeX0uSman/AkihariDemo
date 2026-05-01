"use client";
import React from "react";
import { courses } from "../../const/courses";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, DotIcon } from "lucide-react";
import { NoteIcon } from "@phosphor-icons/react";
import Pill from "@/components/Pill";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-(--bg-secondary) w-full min-h-screen flex flex-col justify-start items-center gap-6 p-8">
      <Pill text="CENNIK 2026" />
      <div className="flex flex-col gap-2 justify-center items-center animate-fadeUpHeader">
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-center">
          Wybierz swój <span className="text-(--accent)">kurs</span>
        </h1>
        <p className="text-(--text-secondary)">
          Przejrzyste ceny, zero ukrytych opłat
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {courses.map((course) => {
          return (
            <Card
              key={course.id}
              style={{
                animationDelay: `${course.id * 0.1}s`,
                animationFillMode: "both",
              }}
              onAnimationEnd={(e) => (e.currentTarget.style.animation = "none")} //getting rid of animation after it ends to keep translateY when hovering
              className={`card-glow ${course.priority ? "border border-(--accent) card-priority" : "border border-(--border)"} bg-(--bg-tertiary)`}
            >
              <CardHeader className="h-1/4">
                <div>
                  {course.priority ? (
                    <span className="self-start text-(--text-primary) bg-(--accent) text-xs font-bold p-1 rounded-xl w-auto">
                      NAJPOPULARNIEJSZY
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-(--text-muted)">{course.category}</p>

                  {course.type === "usluga" ? (
                    " "
                  ) : (
                    <p className="border border-(--border) p-2 rounded-xl bg-(--bg-tertiary) text-(--text-muted)">
                      {course.length}
                    </p>
                  )}
                </div>

                <CardTitle className="text-3xl font-bold">
                  {course.name}
                </CardTitle>

                <p className="text-sm text-(--text-muted)">
                  {course.secondaryTitle}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <p className="text-(--accent) text-6xl md:text-7xl font-bold">
                    {course.price}
                  </p>
                  <span className="border-b border-(--border) w-full"></span>
                </div>
                {course.features.map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="flex flex-row justify-start items-center gap-2"
                    >
                      <span className="bg-(--accent-dim) p-1 border border-(--border-dim) rounded-xl">
                        <CheckIcon size={18} color="#EA580C" />
                      </span>
                      <span className="text-(--text-secondary)">{feature}</span>
                    </div>
                  );
                })}
                <Link href={course.type == "usluga" ? 'tel:+48 50 993 0923': '/enrollment'}
                  className={`${course.priority ? "bg-(--accent) hover:bg-(--accent-hover) " : "bg-(--bg-tertiary) text-(--text-secondary) border-2 border-(--border) hover:bg-(--bg-secondary) "}flex items-center justify-center w-full py-5 font-bold rounded-xl h-9 md:h-8 xs:h-6 transition-all duration-200`}
                >
                  {course.type == "usluga" ? 'Zadzwoń': 'Zapisz się'}
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div
        style={{
          animationDelay: `0.2s`,
          animationFillMode: "both",
        }}
        className="animate-fadeUp flex flex-row bg-(--bg-tertiary) w-auto justify-center items-center gap-5 md:gap-2 mt-14 p-6 rounded-xl border border-(--border)"
      >
        <NoteIcon
          size={72}
          weight="light"
          color="#EA580C"
          className="p-1 bg-(--accent-dim) border border-(--accent-border) rounded-xl"
        />
        <p className="text-md md:text-3xl">
          Płatność w wygodnych,{" "}
          <span className="text-(--accent)">nieoprocentowanych ratach</span> —
          bez prowizji, na czas trwania kursu.
        </p>
      </div>
    </div>
  );
};

export default page;
