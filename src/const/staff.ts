import Slawomir from '@/assets/SlawomirBiuro.jpg'
import { Roles } from "@/types/roles.type";
import { Staff } from "@/types/Staff.type";

export const staff: Staff[] = [
  {
    name: "Sławomir Kaus",
    role: Roles.BIURO,
    photoUrl: Slawomir,
  },
];
