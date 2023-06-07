import { Expose, Type } from "class-transformer";
import { User } from "@/core/domain/vaillant/user/user";
import { UserRankPerGuildDto } from "@/shared/dto/user-rank-per-guild.dto";

export class AuthenticateResponse {

  @Expose()
  @Type(() => User)
  user?: User;

  @Expose()
  @Type(() => UserRankPerGuildDto)
  userRankPerGuild?: UserRankPerGuildDto;

  @Expose()
  newUser?: boolean;
}