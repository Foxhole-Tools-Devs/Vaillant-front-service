import { Expose } from "class-transformer";

export class ClanInformation {
  @Expose()
  id?: number;

  @Expose()
  description?: string;

  @Expose()
  logoUrl?: string;

  @Expose()
  citation?: string;

  @Expose()
  summary?: string;

  @Expose()
  discordInviteLink?: string;

  @Expose()
  openHiring?: boolean;
}