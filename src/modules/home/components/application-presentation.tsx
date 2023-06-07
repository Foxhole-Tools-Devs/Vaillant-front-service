import { AdjustmentsHorizontalIcon, CalendarIcon, KeyIcon } from "@heroicons/react/24/outline";

const ApplicationPresentation = () => {
  return (
    <section className="bg-primary-900 pb-32">
      <div className="text-secondary-100 text-center text-3xl py-8">
        <h2>
          Vaillant allows you to...
        </h2>
      </div>
      <div className="grid grid-cols-3 container mx-auto">
        <div className="flex flex-col items-center text-primary-100">
          <AdjustmentsHorizontalIcon className="h-12 w-12 text-secondary-500" />
          <div className="text-xl py-2">
            Setting the rights of your regiment
          </div>
          <div className="px-16 py-2 text-center text-md">
            Vaillant allows you to completely manage the hierarchy of your regiment
          </div>
        </div>
        <div className="flex flex-col items-center text-primary-100">
          <CalendarIcon className="h-12 w-12 text-secondary-500" />
          <div className="text-xl py-2">
            Prepare for future operations
          </div>
          <div className="px-16 py-2 text-center text-md">
            Operations can be prepared in advance and with prerequisites
          </div>
        </div>
        <div className="flex flex-col items-center text-primary-100">
          <KeyIcon className="h-12 w-12 text-secondary-500" />
          <div className="text-xl py-2">
            Login via discord
          </div>
          <div className="px-16 py-2 text-center text-md">
            All credential with discord OAuth 2.0
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationPresentation;