import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

// I may need to integrate a dashbaord before I can fix the code below.
// Just want to use the session and redirect to make sure landing page
// directs to a users dashboard after logging in.

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/landingpage");
  }
}
