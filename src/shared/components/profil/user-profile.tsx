import { User } from "@/core/domain/vaillant/user/user";
import { If, Then, When } from "react-if";
import Image from "next/image";

interface UserProfileProps {
  user?: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  console.log(user)

  return (
    <div>
      <When condition={ !!user }>
        <div className="flex flex-row p-2 pl-4">
          <div className="">
            <div className="text-lg text-primary-900 font-encode-sc">
              { user?.name }
            </div>
            <div className="flex align-baseline gap-1">
              <div className="text-secondary-500 text-[0.8em]">
                [96eRT]
              </div>
              <div className="text-[#992d22] text-[0.8em]">
                Capitaine
              </div>
            </div>
          </div>
          <div className="w-12 mx-2">
            <If condition={!!user?.discordUser?.image}>
              <Then>
                { !!user?.discordUser?.image &&
                <Image width="60" height="60" className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-900 "
                       src={user?.discordUser?.image} alt={user?.name ?? "profile"}/>
                }
              </Then>
            </If>
          </div>
        </div>
      </When>
    </div>
  )
}

export default UserProfile