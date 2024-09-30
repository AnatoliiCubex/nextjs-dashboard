import "~/app/ui/styles/global.css";
import { ViewTransitions } from "next-view-transitions";
import { PropsWithChildren } from "react";
import { inter } from "~/app/ui/fonts/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "Next.js Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
