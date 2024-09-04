import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";




export const metadata = {
  title: "NextJs Tailwind Sandbox",
  description: "This is a sample project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>

          <MainLayout>{children}</MainLayout>
        
        </MenuContextProvider>
      </body>
    </html>
  );
}
