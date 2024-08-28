import "../src/css/globals.scss";
import "../app/fonts.css";
import StoreProvider from "./StoreProvider";
import SettingsTrigger from "@/components/settings/SettingsTrigger";
import { ColorProvider } from "@/components/settings/ColorProvider";
import Socials from "@/components/socials/Socials";

export const metadata = {
  title: "Sacha Uijlen",
  description: "Curriculum Vitae of a Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ColorProvider>
            <Socials />
            <SettingsTrigger />
            {children}
          </ColorProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
