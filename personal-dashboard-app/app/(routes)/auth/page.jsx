import SignUp from "@/app/(components)/signup/signup.comp";
import LogIn from "@/app/(components)/login/login.comp";

export default function Auth() {
  return (
    <div>
      <h1 className="text-3xl text-center m-4">I am the Auth Page!</h1>
      <div className="flex">
        <SignUp />
        <LogIn />
      </div>
    </div>
  );
}
