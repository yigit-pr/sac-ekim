"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { X, ZoomIn } from "lucide-react";

const results = [
    {
        id: 1,
        title: "4500 Greft",
        image: "/images/result-1.png", // Close up scalp/hair
        technique: "Sapphire FUE",
    },
    {
        id: 2,
        title: "3200 Greft",
        image: "/images/result-2.png", // Man smiling
        technique: "DHI",
    },
    {
        id: 3,
        title: "Ön Hat Tasarımı",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", // Mediterranean man
        technique: "Estetik",
    },
    {
        id: 4,
        title: "Sakal Ekimi",
        image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?q=80&w=800&auto=format&fit=crop", // Beard
        technique: "DHI",
    },
    {
        id: 5,
        title: "Tepe Bölgesi",
        image: "https://images.unsplash.com/photo-1503910397240-edc7320092c2?q=80&w=800&auto=format&fit=crop", // Man looking up?
        technique: "Sapphire",
    }
];

export default function BeforeAfter() {
    const [selectedImage, setSelectedImage] = useState<typeof results[0] | null>(null);

    return (
        <section id="results" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-2 block">Referanslar</span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                        Başarılı Operasyonlar
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm">
                        Detaylar için görsellere tıklayın.
                    </p>
                </div>

                {/* Gallery Grid - 5 Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {results.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedImage(item)}
                            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                                <span className="text-white font-bold text-xs block">{item.title}</span>
                                <span className="text-slate-200 text-[10px]">{item.technique}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" className="px-8">
                        Tüm Galeriyi İncele
                    </Button>
                </div>

                {/* Simple Modal / Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                            <div className="aspect-[4/3] relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${selectedImage.image})` }}
                                />
                            </div>
                            <div className="p-6 bg-white">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{selectedImage.title}</h3>
                                        <p className="text-primary font-medium">{selectedImage.technique}</p>
                                    </div>
                                    <Button onClick={() => setSelectedImage(null)}>
                                        Kapat
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
