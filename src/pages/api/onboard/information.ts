import { NextApiRequest, NextApiResponse } from "next";
import {
  GetOnboardInformationResponseDto
} from "@/shared/dto/onboarding/response/get-onboard-information-response.dto";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { OnboardingService } from "@/core/service/onboarding.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetOnboardInformationResponseDto>
){

  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const service = new OnboardingService();
    const response = await service.getOnboardInformation(session?.user?.discordUser?.id);
    res.status(200).json(response);
    return;
  }

  res.status(400).end();
}