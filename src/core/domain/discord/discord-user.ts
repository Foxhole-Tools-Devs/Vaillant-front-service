import { Expose } from "class-transformer";

export class DiscordUser {
  @Expose()
  id?: string;

  @Expose()
  name?: string;

  @Expose()
  image?: string;

  @Expose()
  email?: string;
}