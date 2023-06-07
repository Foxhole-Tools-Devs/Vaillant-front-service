import Logo from "@/shared/components/design/logo";

const BigLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Logo height={96} width={96} />
      </div>
      <div>
        <div className="text-primary-900 dark:text-white text-6xl font-medium font-encode-sc">
          Vaillant
        </div>
        <div className="text-center text-secondary-500 dark:text-secondary-100 text-sm font-encode-sc">
          Plan - Organize - Conquer
        </div>
      </div>
    </div>
  )
}

export default BigLogo;