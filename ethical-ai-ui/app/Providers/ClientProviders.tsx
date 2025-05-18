'use client';

import { ReactNode, useState, useEffect } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ClientProviders({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class">
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}