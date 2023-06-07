import { UserRankPerGuildDto } from "@/shared/dto/user-rank-per-guild.dto";
import clanTile from "@/modules/app/modules/onboarding/components/clan-tile";
import ClanTile from "@/modules/app/modules/onboarding/components/clan-tile";
import Link from "next/link";

type ClansRecapProps = {
  userRankPerGuild?: UserRankPerGuildDto[]
}

const ClansRecap = ({ userRankPerGuild }: ClansRecapProps) => {
  const joinedClans = userRankPerGuild?.filter(value => !value.admin);
  const joinedClansTiles = joinedClans?.map(clan => <ClanTile key={ clan?.guild?.id } userRanksGuild={ clan } join={ !clan.admin } />)

  const createdClans = userRankPerGuild?.filter(value => value.admin);
  const createdClansTiles = createdClans?.map(clan => <ClanTile key={ clan?.guild?.id } userRanksGuild={ clan } join={ !clan.admin } />)

  return (
    <div>
      <div>
        <div className="text-lg px-2 font-encode-sc underline underline-offset-2 decoration-2 decoration-secondary-500">
          Join a clan :
        </div>
        <div>
          { joinedClansTiles }
        </div>
      </div>
      <div>
        <div className="text-lg px-2 font-encode-sc underline underline-offset-2 decoration-2 decoration-secondary-500">
        Register a clan <span className="text-secondary-500">*</span>:
        </div>
        <div>
          {createdClansTiles}
        </div>
      </div>
      <div className="flex pt-4 text-gray-300 text-sm items-center">
        <span className="text-secondary-500">*</span>
        Invite Vaillant bot to add your discord server in the register list :
        <Link className="p-2 mx-2 rounded-3xl bg-[#7289da] text-white hover:bg-[#596BAB] transition-all"
              href="https://discord.com/api/oauth2/authorize?client_id=1021441762079801344&permissions=8&scope=bot">
          Invite discord Bot
        </Link>
      </div>
    </div>
  )
}

export default ClansRecap;