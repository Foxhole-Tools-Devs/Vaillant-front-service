import { UserRankPerGuildDto } from "@/shared/dto/user-rank-per-guild.dto";
import Button from "@/shared/components/inputs/Button";
import DiscordRoleTag from "@/shared/components/design/discord-role-tag";
import Image from "next/image";
import DiscordGuildLogo from "@/shared/components/design/discord-guild-logo";

type ClanTileProps = {
  userRanksGuild: UserRankPerGuildDto
  join: boolean;
}

const ClanTile = ({ userRanksGuild, join }: ClanTileProps) => {

  const roles = userRanksGuild.roles?.slice(0, 3);
  const rolesTags = roles?.map(role => <DiscordRoleTag key={ role.id } discordRole={ role } />)
  const guild = userRanksGuild.guild;

  return (
    <div className="flex justify-between w-full p-2 my-2 bg-gray-100 dark:bg-gray-900">
      <div className="px-2 w-16">
        <DiscordGuildLogo imageUrl={ guild?.image } className="relative rounded w-16 h-16 fill-secondary-500" />
      </div>
      <div className="grid w-full px-8">
        <div className="text-lg font-exo">
          { userRanksGuild.guild?.name }
        </div>
        <div className="flex gap-1">
          {rolesTags}
        </div>
      </div>
      <Button className="m-2 w-32 bg-secondary-500 text-xl hover:bg-secondary-700 transition-all">
        { join ? "Join" : "Register" }
      </Button>
    </div>
  )
}

export default ClanTile;