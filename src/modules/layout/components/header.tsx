import Button from "@/shared/components/inputs/Button";
import BigLogo from "@/shared/components/design/big-logo";
import Link from "next/link";
import { signOut ,signIn, useSession } from "next-auth/react";
import { Else, If, Then } from "react-if";
import UserProfile from "@/shared/components/profil/user-profile";
import DropdownButton, { DropdownOption } from "@/shared/components/inputs/dropdown-button";
import {
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  UserIcon
} from "@heroicons/react/24/outline";

const Header = () => {
  const { data } = useSession();

  const options: DropdownOption[] = [
    {
      placeholder: <div className="flex justify-between align-middle py-1 px-4 hover:bg-secondary-200"><UserIcon className="w-6 h-6" /> <span>My profile</span></div>,
    },
    {
      placeholder: <div className="flex justify-between align-middle py-1 px-4 hover:bg-secondary-200"><ClipboardDocumentCheckIcon className="w-6 h-6" /><span>Dashboard</span></div>
    },
    {
      placeholder: <div className="flex justify-between align-middle py-1 px-4 hover:bg-secondary-200"><CalendarDaysIcon className="w-6 h-6"/><span>Events</span></div>
    },
    {
      placeholder: <div className="flex justify-between border-gray-800 border-t text-alert-600 align-middle py-1 px-4 hover:bg-alert-600 hover:text-white"><ArrowLeftOnRectangleIcon className="w-6 h-6" /><span>Logout</span></div>,
      onClick: () =>  signOut(),
    }
  ]

  return (
    <div className="flex justify-between w-full bg-gray-200 dark:bg-gray-900 h-36 p-16 z-10 border-b-[8px] border-secondary-500">
      <Link className="-m-12" href="/">
        <div>
          <BigLogo/>
        </div>
      </Link>
      <div className="flex justify-around max-w-screen-md w-full text-secondary-300 font-semibold uppercase">
        <div className="hover:text-white transition-all">
          <Link href="/blog">
            Blog
          </Link>
        </div>
        <div className="hover:text-white transition-all">
          <Link href="/tutorial">
            Tutorial
          </Link>
        </div>
        <div className="hover:text-white transition-all">
          <Link href="/project">
            The project
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <If condition={ data?.user != undefined }>
          <Then>
            <DropdownButton className="bg-secondary-200 dark:bg-white" optionsClassName="bg-secondary-200 dark:bg-white" placeHolder={ <UserProfile user={ data?.user } /> } options={ options } />
          </Then>
          <Else>
            <div className="flex flex-col gap-4">
              <Button onClick={() => signIn()} className="w-40 p-2 uppercase font-encode-sc text-primary-950 text-xl rounded-xl bg-secondary-500 hover:bg-white hover:text-secondary-500 transition-all">
                Login
              </Button>
            </div>
          </Else>
        </If>
      </div>
    </div>
  )
}

export default Header;