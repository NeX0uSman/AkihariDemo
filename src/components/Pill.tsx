import { DotIcon } from "lucide-react";
import React from "react";
type Props = {
  text: string;
};
const Pill = ({text}: Props) => {
  return (
      <div className="animate-fadeUpHeader flex flex-row justify-center items-center bg-(--pill-bg) border border-(--pill-border) rounded-full font-medium px-2">
        <DotIcon size={21} color="#EA580C" />
        <span className="text-(--pill-text) pr-3 text-md">{text}</span>
      </div>
  );
};

export default Pill;
