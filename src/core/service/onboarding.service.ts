import { AbstractService } from "@/core/service/abstract.service";
import { GetOnboardInformationRequestDto } from "@/shared/dto/onboarding/request/get-onboard-information-request.dto";
import {
  GetOnboardInformationResponseDto
} from "@/shared/dto/onboarding/response/get-onboard-information-response.dto";

export class OnboardingService extends AbstractService {
  static readonly GET_USER_ONBOARDING_INFORMATION = "users/onboarding/information";

  public constructor(){
    super();
  }

  async getOnboardInformation( discordId?: string ): Promise<GetOnboardInformationResponseDto>{
    const request = {
      discordId,
    } as GetOnboardInformationRequestDto;

    return await this.getBack<GetOnboardInformationResponseDto>(`${OnboardingService.GET_USER_ONBOARDING_INFORMATION}?id=${discordId}`, undefined, GetOnboardInformationRequestDto);
  }
}