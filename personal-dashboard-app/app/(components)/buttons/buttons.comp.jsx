"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session, status);

  useEffect(() => {
    if (status === "authenticated") {
      router.push(`/dashboard/${session.user.id}`);
    }
  }, [status, session, router]);

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
        <Link className="px-4" href={`/dashboard/${session.user.id}`}>
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
  return <button onClick={() => signOut()}>Sign out</button>;
}
