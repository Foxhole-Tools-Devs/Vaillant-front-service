import { Expose } from "class-transformer";

export class DiscordGuild {
  @Expose()
  id?: string;

  @Expose()
  name?: string;

  @Expose()
  image?: string;

  @Expose()
  bannerImage?: string;
}