import { Expose, Type } from "class-transformer";
import { ClanRank } from "../clans/ranks/clan-rank";
import { DiscordUser } from "../../discord/discord-user";
import { FactionEnum } from "../foxhole/faction.enum";

export class User {
  @Expose()
  id?: number

  @Expose()
  name?: string;

  @Expose()
  factionEnum?: FactionEnum;

  @Expose()
  @Type(() => DiscordUser)
  discordUser?: DiscordUser;

  @Expose()
  @Type(() => ClanRank)
  actualRank?: ClanRank;

  @Expose()
  moderator?: boolean;

  @Expose()
  banned?: boolean;
}