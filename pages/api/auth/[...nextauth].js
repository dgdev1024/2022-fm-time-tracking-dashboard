/**
 * @file pages/api/auth/[...nextauth].js
 */

import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "../../../lib/prisma-client";

export default NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
