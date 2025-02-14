"use client"

export default function Footer() {
    return(
        <footer className="p-2 bg-background">
            <p className="text-foreground text-center">&copy; {new Date().getFullYear()}. Nordiva</p>
        </footer>
    )
}