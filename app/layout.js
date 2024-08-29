import { Inter } from "next/font/google";
import "./globals.css";
import { MobileProvider } from "./globalComponents/IsMobileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Transform Your Future with Top-Quality Education | Tula's International School",
  description:
    "Unlock your child's potential at Tula's International School, Dehradun. Offering world-class education, state-of-the-art facilities, and a nurturing environment, we empower students to excel in academics and beyond. Join the leading CBSE boarding school in Uttarakhand today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileProvider>{children}</MobileProvider>
      </body>
    </html>
  );
}
