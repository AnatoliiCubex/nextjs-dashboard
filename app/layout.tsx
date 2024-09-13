import "~/app/ui/styles/global.css";

import { PropsWithChildren } from "react";
import { inter } from "~/app/ui/fonts/fonts";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className + " antialiased"}>{children}</body>
    </html>
  );
}
