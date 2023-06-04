import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex navbar-container bg-blue-300 h-24 justify-between items-center text-center">
      <h1 className="text-3xl px-4">Dashboard Navbar</h1>
      <Link className="px-4" href="/auth">
        Log In / Sign Up
      </Link>
    </div>
  );
}
