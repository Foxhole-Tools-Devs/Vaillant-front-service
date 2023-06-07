import { DiscordRole } from "@/core/domain/discord/discord-role";
import classNames from "classnames";

type DiscordRoleTagProps = {
  discordRole: DiscordRole;
}

const DiscordRoleTag = ({ discordRole }: DiscordRoleTagProps) => {
  console.log(discordRole.color)
  const mainColor = `#${discordRole.color ?? "424549"}`;

  return (
    <div style={ { color: mainColor, borderColor: mainColor }} className={ "rounded-2xl text-xs border border-2 pt-1 pb-0.5 px-1 " } >
      { discordRole.name }
    </div>
  )
}

export default DiscordRoleTag;

