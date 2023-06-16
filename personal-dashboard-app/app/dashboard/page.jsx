"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1> Loading...</h1>;
  }
  return (
    <h1 className="text-3xl text-center py-4">
      Welcome to your dashboard, {session?.user?.name || "Guest"}!
    </h1>
  );
}
