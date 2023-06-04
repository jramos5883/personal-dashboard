import SignIn from "@/app/(components)/signin/signin.comp";
import SignUp from "@/app/(components)/signup/signup.comp";

const Auth = () => {
  return (
    <div>
      <h1>I am the Auth Page!</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
