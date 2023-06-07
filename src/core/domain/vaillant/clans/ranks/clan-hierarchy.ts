import { Expose, Type } from "class-transformer";
import { ClanRank } from "./clan-rank";

export class ClanHierarchy {
  @Expose()
  id?: number;

  @Expose()
  @Type(() => ClanRank)
  leader?: ClanRank;
}