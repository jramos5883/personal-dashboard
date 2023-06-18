"use client";

import GoogleCalendarApi from "../(dash.comp)/dc.googleCalApi/dc.googleCalApi.comp";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1> Loading...</h1>;
  }

  if (status === "authenticated")
    return (
      <div className="container justify-center items-center">
        <h1 className="text-5xl text-center py-4">
          Welcome to your dashboard, {session?.user?.name}!
          <GoogleCalendarApi />
        </h1>
      </div>
    );
}
