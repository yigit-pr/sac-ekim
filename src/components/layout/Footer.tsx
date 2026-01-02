import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-24 md:pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold font-display mb-4">İzmir<span className="text-secondary">Clinic</span></h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            Modern teknoloji ve uzman kadromuz ile hayalinizdeki görünüme kavuşturuyoruz. Saç ekimi ve estetik cerrahide güvenilir adres.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-white hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-white hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><a href="/" className="hover:text-secondary transition-colors">Anasayfa</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors">Hakkımızda</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">Hizmetler</a></li>
                            <li><a href="#results" className="hover:text-secondary transition-colors">Sonuçlar</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-secondary transition-colors">FUE Saç Ekimi</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">DHI Saç Ekimi</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Safir FUE</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Sakal Ekimi</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Kaş Ekimi</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">İletişim</h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>İstanbul, Türkiye<br />Şişli, Merkez Mh.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+90 555 555 55 55</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>kvkk@izmirclinic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} İzmir Clinic. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
