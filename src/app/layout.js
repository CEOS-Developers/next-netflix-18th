import BottomNav from "@/components/Common/BottomNav";
import "./globals.css";

export const metadata = {
  title: "Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="mainContainer">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
