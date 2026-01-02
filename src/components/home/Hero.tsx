"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function Hero() {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [form, setForm] = React.useState({ fullName: '', phone: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ fullName: '', phone: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Hero Image - Confident man/hair focus */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2544&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-white space-y-6 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-xs font-medium text-secondary tracking-wide uppercase">Premium Hair Transplant</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                            Hayalinizdeki <span className="text-secondary">Saçlara</span><br />
                            Güvenle Kavuşun
                        </h1>

                        <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
                            Uzman kadromuz ve en yeni teknoloji ile doğal ve kalıcı sonuçlar.
                            Ücretsiz saç analizi için hemen form doldurun.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Ömür Boyu Garanti Sertifikası",
                                "Ağrısız Lokal Anestezi",
                                "Maksimum Greft Garantisi"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-slate-100">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-secondary" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lead Form */}
                    <div className="w-full max-w-md mx-auto md:ml-auto bg-white rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up delay-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Ücretsiz Analiz</h2>
                        <p className="text-slate-500 text-sm mb-6">Uzmanlarımız size özel planlama için hemen arasın.</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Adınız Soyadınız</label>
                                <input
                                    type="text"
                                    required
                                    value={form.fullName}
                                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Ahmet Yılmaz"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Telefon Numaranız</label>
                                <input
                                    type="tel"
                                    required
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="0555 555 55 55"
                                />
                            </div>

                            <div className="pt-2">
                                <Button
                                    className="w-full py-4 text-lg"
                                    variant="primary"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'loading' ? 'Gönderiliyor...' : status === 'success' ? 'Başvurunuz Alındı!' : 'Hemen Başvurun'}
                                </Button>
                            </div>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                Başvurarak KVKK aydınlatma metnini kabul etmiş sayılırsınız.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
