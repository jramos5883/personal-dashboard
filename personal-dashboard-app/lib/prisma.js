import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function Users() {
  const users = await prisma.user.findUnique({ where: User });
  console.log(users);
}

Users();
