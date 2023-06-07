import { Expose, Type } from "class-transformer";

export class GetOnboardInformationRequestDto {
  @Expose()
  discordId?: string;
}