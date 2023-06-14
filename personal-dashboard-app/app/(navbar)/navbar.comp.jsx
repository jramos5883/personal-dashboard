import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex navbar-container bg-blue-300 h-24 justify-between items-center text-center">
      <Link className="text-3xl px-4" href="/">
        Dashboard Navbar
      </Link>
      <Link className="px-4" href="/auth">
        Log In / Sign Up
      </Link>
    </div>
  );
}
