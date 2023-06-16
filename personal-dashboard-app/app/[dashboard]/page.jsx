"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    router.push(`/dashboard/${session.user?.id}`);
  }

  return <h1>Dashboard!</h1>;
}
