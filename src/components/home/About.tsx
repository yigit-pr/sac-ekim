import React from "react";
import { Button } from "@/components/ui/Button";
import { Award, UserCheck, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <div className="h-64 bg-[url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-lg" /> {/* Doctor */}
                                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-lg" /> {/* Hospital */}
                            </div>
                            <div className="space-y-4">
                                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-lg" /> {/* Hair close up? */}
                                <div className="h-64 bg-[url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center rounded-2xl shadow-lg" /> {/* Patient */}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Hakkımızda</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight">
                                Saç Ekiminde <br /><span className="text-primary">Global Standartlar</span>
                            </h2>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            Gazi Clinic olarak 15 yıllık tecrübemiz ve uzman medikal ekibimizle, Türkiye'nin önde gelen saç ekim merkezlerinden biriyiz. Her yıl binlerce hastamızı hayallerindeki görünüme kavuşturuyoruz.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: Award, title: "15+ Yıl Tecrübe", desc: "Sektörde güven ve deneyim." },
                                { icon: UserCheck, title: "10.000+ Operasyon", desc: "Başarıyla tamamlanan işlemler." },
                                { icon: Heart, title: "%98 Memnuniyet", desc: "Mutlu hasta yorumları." },
                                { icon: Award, title: "JCI Akreditasyon", desc: "Uluslararası sağlık standartları." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" variant="outline">
                            Ekibimizle Tanışın
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
