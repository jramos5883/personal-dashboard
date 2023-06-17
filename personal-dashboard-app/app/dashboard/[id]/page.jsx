"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1> Loading...</h1>;
  }

  if (status === "authenticated")
    return (
      <h1 className="text-5xl text-center py-4">
        Welcome to your dashboard, {session?.user?.name}!
      </h1>
    );
}
