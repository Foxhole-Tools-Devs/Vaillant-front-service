import { Expose, Type } from "class-transformer";
import { DiscordRole } from "../../../discord/discord-role";
import "reflect-metadata"

export class ClanRank {
  @Expose()
  id?: number;

  @Expose()
  name?: string;

  @Expose()
  description?: string;

  @Expose()
  @Type(() => DiscordRole)
  discordRole?: DiscordRole;

  @Expose()
  @Type(() => ClanRank)
  inferiorRanks?: ClanRank[];
}