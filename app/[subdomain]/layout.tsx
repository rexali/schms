import AppNavBar from "./components/AppNavBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <AppNavBar />
            {children}
        </section>
    );
}
