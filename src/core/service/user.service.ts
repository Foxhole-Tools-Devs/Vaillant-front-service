import { AbstractService } from "@/core/service/abstract.service";
import { DiscordUser } from "@/core/domain/discord/discord-user";
import { AuthenticateRequest } from "@/shared/dto/authenticate/authenticate.request";
import { AuthenticateResponse } from "@/shared/dto/authenticate/authenticate.response";

export class UserService extends AbstractService {

  static readonly CHECK_DISCORD_ID_REGISTERED = "auth/exist";
  static readonly AUTHENTICATE_USER_BY_DISCORD_ID = "auth/login";

  public constructor(){
    super();
  }

  public async userExistByDiscordId( id: string ){
    return await this.postBack<boolean>(UserService.CHECK_DISCORD_ID_REGISTERED, id, Boolean);
  }

  public async authenticateUser(discordUser: DiscordUser) {
    const request = {
      user: {
        discordUser
      },
    } as AuthenticateRequest;

    return await this.postBack<AuthenticateResponse>(UserService.AUTHENTICATE_USER_BY_DISCORD_ID, request, AuthenticateResponse)
  }
}