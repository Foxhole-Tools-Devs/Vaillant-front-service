import { Expose, Type } from "class-transformer";
import { UserRankPerGuildDto } from "@/shared/dto/user-rank-per-guild.dto";

export class GetOnboardInformationResponseDto {
  @Expose()
  @Type(() => UserRankPerGuildDto)
  userRankPerGuild?: UserRankPerGuildDto[];
}