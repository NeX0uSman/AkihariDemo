import { BaseUser } from "./BaseUser.type";
import { Roles } from "./roles.type";

export interface Instructor extends BaseUser {
  role: Roles.INSTRUCTOR;
}
