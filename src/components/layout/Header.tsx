"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "İletişim", href: "#whatsappForm" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold tracking-tight font-display transition-colors text-primary">
                            İzmir<span className="text-secondary"> Saç Tedavileri</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-secondary text-slate-800"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="#whatsappForm">
                            <Button size="sm" className="ml-4">
                                Ücretsiz Analiz
                            </Button>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-800" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-800" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg flex flex-col gap-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-slate-800 py-2 border-b border-slate-100 last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="#whatsappForm" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full mt-2">
                            Ücretsiz Analiz
                        </Button>
                    </a>
                </div>
            )}
        </header>
    );
}
