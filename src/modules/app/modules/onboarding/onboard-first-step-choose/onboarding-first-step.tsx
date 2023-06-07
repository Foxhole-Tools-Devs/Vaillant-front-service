import useSWR from "swr";
import { fetchOnboardInformation } from "@/shared/api/onboarding-api";
import { useSession } from "next-auth/react";
import ClansRecap from "@/modules/app/modules/onboarding/components/clans-recap";
import {
  GetOnboardInformationResponseDto
} from "@/shared/dto/onboarding/response/get-onboard-information-response.dto";
import { Else, If, Then } from "react-if";

const OnboardingFirstStep = () => {

  const { data: session } = useSession();
  const { data, error, isLoading } = useSWR<GetOnboardInformationResponseDto>('/api/onboard/information', fetchOnboardInformation)

  console.log(data)

  return (
    <div>
      <div className="text-2xl font-encode-sc px-2 decoration-secondary-500 pb-4">
        Choose your clan :
      </div>
      <If condition={ isLoading }>
        <Then>
          Loading . . .
        </Then>
        <Else>
          <ClansRecap userRankPerGuild={ data?.userRankPerGuild } />
        </Else>
      </If>
    </div>
  )
}

export default OnboardingFirstStep;