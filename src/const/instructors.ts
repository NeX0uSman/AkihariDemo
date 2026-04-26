import Slawomir from "@/assets/SlawomirInstructor.jpg";
import Jaroslaw from "@/assets/JaroslawInstructor.jpg";
import Marek from "@/assets/MarekInstructor.jpg";
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
