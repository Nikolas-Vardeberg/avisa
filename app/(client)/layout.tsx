
import Menu from "@/common/components/Menu";
import "./globals.css";
import React from 'react'
import { ThemeProvider } from "@/common/components/theme-provider";
import Footer from "@/common/components/Footer";

export default async function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Menu />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </body>
    )
}