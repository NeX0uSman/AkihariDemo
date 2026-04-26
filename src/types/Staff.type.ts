import { BaseUser } from "./BaseUser.type";
import { Roles } from "./roles.type";

export interface Staff extends BaseUser {
  role: Roles.BIURO;
}