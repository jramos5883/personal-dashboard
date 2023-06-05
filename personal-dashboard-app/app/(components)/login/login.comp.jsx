export default function LogIn() {
  return (
    <div className="bg-blue-100 flex flex-col w-1/2 items-center">
      <h1 className="text-3xl m-4">Have an account? Log in here!</h1>
      <p className="p-4 pl-4">Email:</p>
      <input className="w-2/3" />
      <p className="p-4 pl-4">Password:</p>
      <input className="w-2/3" />
      <button className="w-20 h-10 bg-gray-300 rounded-lg m-4">Log In</button>
    </div>
  );
}
