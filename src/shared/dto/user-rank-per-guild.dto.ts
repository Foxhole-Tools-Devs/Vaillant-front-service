import { Expose, Type } from "class-transformer";
import { DiscordRole } from "@/core/domain/discord/discord-role";
import { DiscordGuild } from "@/core/domain/discord/discord-guild";

export class UserRankPerGuildDto {
  @Expose()
  @Type(() => DiscordRole)
  roles?: DiscordRole[];

  @Expose()
  @Type(() => DiscordGuild)
  guild?: DiscordGuild;

  @Expose()
  admin?: boolean;
}