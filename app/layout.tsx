import "~/app/ui/styles/global.css";
import { ViewTransitions } from "next-view-transitions";
import { PropsWithChildren } from "react";
import { inter } from "~/app/ui/fonts/fonts";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
