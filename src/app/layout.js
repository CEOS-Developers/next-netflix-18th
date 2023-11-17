import BottomNav from "@/components/Common/BottomNav";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="mainContainer">
        <StyledComponentsRegistry>
          {children}
          <BottomNav />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
