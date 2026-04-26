import { StaticImageData } from "next/image";
import { Roles } from "./roles.type";

export interface BaseUser {
  name: string;
  photoUrl: StaticImageData;
}