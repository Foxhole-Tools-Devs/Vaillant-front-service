import { Expose, Type } from "class-transformer";
import { ClanInformation } from "./clan-information";
import { ClanHierarchy } from "./ranks/clan-hierarchy";
import { User } from "../user/user";
import { DiscordGuild } from "../../discord/discord-guild";


export class Clan {
  @Expose()
  id?: string;

  @Expose()
  name?: string;

  @Expose()
  tag?: string;

  @Expose()
  @Type(() => User)
  leader?: User;

  @Expose()
  @Type(() => User)
  users?: User[];

  @Expose()
  @Type(() => ClanHierarchy)
  clanHierarchy?: ClanHierarchy

  @Expose()
  @Type(() => DiscordGuild)
  discordGuild?: DiscordGuild;

  @Expose()
  @Type(() => ClanInformation)
  clanInformation?: ClanInformation;
}