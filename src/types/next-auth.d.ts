import NextAuth, { DefaultSession } from "next-auth";
import { User } from "@/core/domain/vaillant/user/user";
import { UserRegistrationStepEnum } from "@/core/domain/vaillant/user/user-registration-step.enum";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"],
    registrationState: UserRegistrationStepEnum,
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    image?: string;
    discordId?: string;
    clanId?: number;
  }
}