"use client";

import { useSession } from "next-auth/react";

export default function DefaultDashboard() {
  const session = useSession();
  if (!session) {
    redirect("/landingpage");
  }

  return (
    <h1 className="text-3xl text-center p-4">
      You must be logged in to see your dashboard, please sign back in to
      continue.
    </h1>
  );
}
