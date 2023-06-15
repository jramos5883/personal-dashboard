import LandingPage from "./(navbar)/(navbar-routes)/landingpage/page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/dashbaord/");
  // }

  return (
    <>
      <LandingPage />
    </>
  );
}
