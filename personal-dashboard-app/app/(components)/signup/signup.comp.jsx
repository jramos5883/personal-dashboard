export default function SignUp() {
  return (
    <div className="bg-blue-100 flex flex-col w-1/2 justify-center text-center items-center">
      <h1 className="text-3xl m-4">Don&apos;t have an account? Sign up here!</h1>
      <p className="p-4">Email:</p>
      <input className="w-2/3" />
      <p className="p-4">Password:</p>
      <input className="w-2/3" />
      <p className="p-4">Confirm Password:</p>
      <input className="w-2/3" />
      <button className="w-20 h-10 bg-gray-300 rounded-lg m-4">Sign Up</button>
    </div>
  );
}
