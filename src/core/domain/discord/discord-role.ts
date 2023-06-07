import { Expose } from "class-transformer";

export class DiscordRole {
  @Expose()
  id?: string;

  @Expose()
  name?: string;

  @Expose()
  color?: string;
}