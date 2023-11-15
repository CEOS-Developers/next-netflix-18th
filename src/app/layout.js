import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
export const metadata = {
  title: "Netflix",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="mainContainer">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
