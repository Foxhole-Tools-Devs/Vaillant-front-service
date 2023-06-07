import BigLogo from "@/shared/components/design/big-logo";
import Logo from "@/shared/components/design/logo";

const AppHeader = () => {
  return (
    <header
      className="bg-white border-b-8 border-secondary-500 px-4 py-2.5 dark:bg-gray-800 fixed left-0 right-0 top-0 z-50">
      <div className="px-4">
        <div className="flex items-center gap-4">
          <Logo width={48} height={48}/>
          <div className="text-primary-900 dark:text-white text-3xl font-medium font-encode-sc">
            Vaillant
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;