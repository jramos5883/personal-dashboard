import AuthProvider from "./authProvider";
import Navbar from "./(navbar)/navbar.comp";
import "./styles/globals.css";

import { getServerSession } from "next-auth";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
