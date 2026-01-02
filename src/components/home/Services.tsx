import React from "react";
import { Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Sapphire FUE",
        description: "Değerli safir uçlarla yapılan, iyileşme süresi çok daha hızlı ve doğal sonuçlar sunan en popüler teknik.",
        icon: Sparkles,
    },
    {
        title: "DHI Saç Ekimi",
        description: "Kanal açma ve ekim işleminin aynı anda yapıldığı, tıraşsız ve sıkı ekim imkanı sağlayan yöntem.",
        icon: Zap,
    },
    {
        title: "Sakal & Kaş Ekimi",
        description: "Yüz estetiğinizi tamamlayan, doğal görünümlü ve kalıcı sakal, bıyık ve kaş ekimi çözümleri.",
        icon: Shield,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                        En Son Teknoloji ile <span className="text-primary">Mükemmel Sonuçlar</span>
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Gazi Clinic olarak, saç ekiminde dünyada kabul görmüş en ileri teknikleri kullanıyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <a href="#" className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                                Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">
                        Tüm Hizmetlerimizi İnceleyin
                    </Button>
                </div>
            </div>
        </section>
    );
}
