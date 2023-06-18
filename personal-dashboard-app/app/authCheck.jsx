"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function AuthCheck({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session, status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/dashboard");
    return null;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
