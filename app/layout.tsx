import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Management System",
  description: "Manage your school like pro"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="Siniotech" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
