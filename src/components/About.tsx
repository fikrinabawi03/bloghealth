import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, AtSign } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About = () => {
    return (
        <section id="about" className="relative min-h-screen py-24 px-6 overflow-hidden flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-32">

                {/* First Slide: Photo and Intro */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Photo with Frame */}
                    <ScrollReveal delay={0.2}>
                        <div className="flex justify-center md:justify-end">
                            <div className="relative group">
                                {/* Decorative elements behind the image */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-aurora-teal/30 to-aurora-emerald/30 blur-2xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Photo Frame */}
                                <div className="glass-card aspect-[4/5] rounded-[2.5rem] relative overflow-hidden border border-white/10 group-hover:border-aurora-teal/40 transition-colors duration-500 max-w-sm w-full">
                                    <img
                                        src="/assets/profile-about.png"
                                        alt="Muhammad Fikri Nabawi"
                                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/assets/profile-about.png";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Intro Text */}
                    <ScrollReveal delay={0.4}>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                                TENTANG <span className="text-aurora-teal font-serif italic font-light">Saya</span>
                            </h2>
                            <div className="space-y-4 text-white/80 leading-relaxed font-light text-lg">
                                <p>
                                    Selamat datang di website blog saya. Izinkan saya memperkenalkan diri, saya <span className="text-aurora-emerald font-medium">Muhammad Fikri Nabawi</span>.
                                </p>
                                <p>
                                    Saya memiliki latar belakang di bidang farmasi dan sangat tertarik untuk belajar serta meningkatkan kemampuan dan pemahaman saya di bidang bioteknologi medis.
                                </p>
                                <p>
                                    Dengan adanya website ini, saya sangat berharap ini dapat menjadi wadah dan komunitas bagi kita semua untuk berkembang bersama teman-teman yang juga tertarik di bidang bioteknologi medis.
                                </p>
                                <p>
                                    Jika Anda merasa ada yang kurang dari apa yang saya tulis, atau jika Anda memiliki pertanyaan, silakan kirimkan ke akun media sosial saya di bawah ini atau di kolom komentar. Selamat membaca.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Second Slide: Social Links */}
                <ScrollReveal delay={0.2}>
                    <div className="pt-16 border-t border-white/10">
                        <div className="text-center space-y-12">
                            <h3 className="text-2xl md:text-3xl font-light tracking-widest text-white/90">
                                LET'S <span className="font-serif italic text-aurora-emerald">CONNECT</span>
                            </h3>

                            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                <SocialLink
                                    href="https://instagram.com"
                                    icon={<Instagram className="w-6 h-6" />}
                                    label="Instagram"
                                />
                                <SocialLink
                                    href="https://linkedin.com"
                                    icon={<Linkedin className="w-6 h-6" />}
                                    label="LinkedIn"
                                />
                                <SocialLink
                                    href="https://threads.net"
                                    icon={<AtSign className="w-6 h-6" />}
                                    label="Threads"
                                />
                                <SocialLink
                                    href="mailto:example@gmail.com"
                                    icon={<Mail className="w-6 h-6" />}
                                    label="Gmail"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

// Helper component for social links
const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 glass-card px-8 py-4 rounded-full border border-white/5 hover:border-aurora-teal/40 overflow-hidden"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-aurora-teal/10 to-aurora-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-white/70 group-hover:text-white transition-colors">
                {icon}
            </span>
            <span className="relative z-10 font-medium tracking-wide text-white/90 group-hover:text-aurora-emerald transition-colors">
                {label}
            </span>
        </motion.a>
    );
};
