/**
 * @file lib/session.js
 */

import prismaClient from "./prisma-client";
import { getSession } from "next-auth/react";

export default async (req) => {
  const session = await getSession({ req });
  if (!session) {
    return { error: "You are not logged in." };
  }

  const user = await prismaClient.User.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!user) {
    return { error: "You are not logged in." };
  }

  return { session, user };
};
