import DiscordProvider from "next-auth/providers/discord"
import NextAuth, { NextAuthOptions } from "next-auth";
import { UserService } from "@/core/service/user.service";
import { UserRegistrationStepEnum } from "@/core/domain/vaillant/user/user-registration-step.enum";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    })
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    async signIn({ user, account}) {
      const userService = new UserService();
      console.log(user)
      const response =  await userService.userExistByDiscordId(user.id);
      console.log(response)
      return !response;
    },
    async redirect({ url, baseUrl}) {
      return "/app"
    },
    async session({ session, newSession, trigger, token }){
      session.user = {
        name: token.name ?? undefined,
        discordUser: {
          id: token.discordId,
          name: token.name ?? "name" +
            "",
          image: token.picture ?? "",
        }
      }

      session.registrationState = UserRegistrationStepEnum.CREATE_CLAN;

      return session;
    },
    async jwt({ token, trigger, user, account, session }) {
      if (trigger == "signIn") {
        token.id = user?.id;
        token.discordId = account?.providerAccountId;
        token.name = user?.name ?? user?.name;
        token.picture = user?.image;
      }
      return token;
    }
  },
}

export default NextAuth(authOptions)