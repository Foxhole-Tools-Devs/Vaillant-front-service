import { Expose, Type } from "class-transformer";
import { User } from "@/core/domain/vaillant/user/user";

export class AuthenticateRequest {
  @Expose()
  @Type(() => User)
  user?: User;
}