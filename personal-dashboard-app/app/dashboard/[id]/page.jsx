import { prisma } from "@/lib/prisma";

export default async function UserDashboard() {
  const user = await prisma.user.findUnique({ where: id });

  return user;
}
