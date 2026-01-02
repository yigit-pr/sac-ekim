import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function StickyBar() {
    return (
        <>
            {/* Mobile Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 p-3 flex gap-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex-1 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce whitespace-nowrap z-10 w-fit">
                        Ücretsiz Ön Görüşme
                    </div>
                    <Button variant="secondary" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-none border-0 relative overflow-visible">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                    </Button>
                </a>
                <a href="tel:+905555555555" className="flex-1">
                    <Button variant="primary" className="w-full shadow-none">
                        <Phone className="w-4 h-4 mr-2" />
                        Hemen Ara
                    </Button>
                </a>
            </div>

            {/* Desktop Floating Button (Optional, usually just WhatsApp) */}
            <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col gap-4">
                <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                    <div className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                </a>
            </div>
        </>
    );
}
