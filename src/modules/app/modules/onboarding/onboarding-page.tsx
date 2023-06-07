import Image from "next/image";
import { useSession } from "next-auth/react";
import { Case, Switch } from "react-if";
import { UserRegistrationStepEnum } from "@/core/domain/vaillant/user/user-registration-step.enum";
import OnboardingFirstStep from "@/modules/app/modules/onboarding/onboard-first-step-choose/onboarding-first-step";
import OnboardingSecondStep
  from "@/modules/app/modules/onboarding/onboard-second-step-register-clan/onboarding-second-step";
import { useState } from "react";

const OnboardingPage = () => {
  const [stateRegistration, setStateRegistration] = useState<UserRegistrationStepEnum>(UserRegistrationStepEnum.CREATE_CLAN);
  const { data } = useSession();

  return (
    <>
      <div className="fixed -z-10 h-screen w-screen">
        <Image className="-z-10" src="/OnboardingImage.jpg" fill alt="Foxhole"/>
      </div>
      <div className="flex w-screen h-screen items-center justify-center">
        <div
          className="w-2/3 max-w-3xl bg-gray-100 dark:bg-gray-800 p-4 border-t-8 border-secondary-500 text-primary-950 dark:text-gray-100">
          <Switch>
            <Case condition={stateRegistration == UserRegistrationStepEnum.NOT_REGISTERED}><OnboardingFirstStep/></Case>
            <Case condition={stateRegistration == UserRegistrationStepEnum.CREATE_CLAN}><OnboardingSecondStep /></Case>
            <Case condition={stateRegistration == UserRegistrationStepEnum.USER_REGISTER}></Case>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default OnboardingPage;