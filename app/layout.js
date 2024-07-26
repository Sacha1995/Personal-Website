import { Inter } from "next/font/google";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import SettingsTrigger from "@/components/settings/SettingsTrigger";
import { ColorProvider } from "@/components/settings/ColorProvider";
import PageAnimatePresence from "@/components/animation/PageAnimationPresence";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sacha Uijlen",
  description: "Curriculum Vitae of a Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageAnimatePresence>
          <StoreProvider>
            <ColorProvider>
              <BurgerMenu />
              <SettingsTrigger />
              {children}
            </ColorProvider>
          </StoreProvider>
        </PageAnimatePresence>
      </body>
    </html>
  );
}
