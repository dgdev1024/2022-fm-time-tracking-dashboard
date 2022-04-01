/**
 * @file pages/api/set-account-name.js
 */

import sanitizeHtml from "sanitize-html";
import prismaClient from "../../lib/prisma-client";
import getSession from "../../lib/session";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "This method is not allowed on this endpoint." });
  }

  const session = await getSession(req);
  if (session.error) {
    return res.status(401).json({ error: session.error });
  }

  try {
    const user = await prismaClient.User.update({
      where: { email: session.user.email },
      data: { name: sanitizeHtml(req.body.name) },
    });

    return res.status(200).json({
      message: "Your name has been updated.",
      name: user.name,
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      error: "You are not logged in.",
    });
  }
};
