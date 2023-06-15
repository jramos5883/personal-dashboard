"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return (
      <div>
        <p className="px-4">...</p>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-row">
        <Link className="px-4" href={"/dashboard"}>
          <Image
            src={session.user?.image ?? "/mememan.webp"}
            width={50}
            height={50}
            alt="Your Name"
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <button className="px-4" onClick={() => signIn()}>
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return (
    <button className="px-4" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
