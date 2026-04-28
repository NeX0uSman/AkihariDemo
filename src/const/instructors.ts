import Slawomir from "../../public/SlawomirInstructor.webp";
import Jaroslaw from "../../public/JaroslawInstructor.webp";
import Marek from "../../public/MarekInstructor.webp";
import { Instructor } from "@/types/Instructor.type";

import { Roles } from "@/types/roles.type";
export const instructors: Instructor[] = [
  {
    name: "Sławomir Kaus",
    role: Roles.INSTRUCTOR,
    photoUrl: Slawomir,
  },
  {
    name: "Jarosław Januszkiewicz",
    role: Roles.INSTRUCTOR,
    photoUrl: Jaroslaw,
  },
  {
    name: "Marek Wujczak",
    role: Roles.INSTRUCTOR,
    photoUrl: Marek,
  },
];
