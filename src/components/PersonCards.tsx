import React from "react";
import { Instructor } from "@/types/instructor.type";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  instructors: Instructor[];
}

const PersonCards = ({ instructors }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
      {instructors.map((instructor) => (
        <div
          key={instructor.name}
          className="card-glow bg-(--bg-tertiary) border border-(--border) rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-64">
            <Image
              src={instructor.photoUrl}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <p className="text-xs text-(--text-muted) uppercase tracking-widest">
              {instructor.role}
            </p>
            <h3 className="text-xl font-bold">{instructor.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonCards;
