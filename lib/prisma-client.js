/**
 * @file lib/prisma-client.js
 */

import { PrismaClient } from "@prisma/client";

let prismaClient;
if (process.env.NODE_ENV === "development") {
  if (typeof global.prismaClient === "undefined") {
    global.prismaClient = new PrismaClient();
  }

  prismaClient = global.prismaClient;
} else {
  prismaClient = new PrismaClient();
}

export default prismaClient;
