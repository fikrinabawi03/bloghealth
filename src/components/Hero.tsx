import { ScrollReveal } from './ScrollReveal';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
                <ScrollReveal delay={0.1}>
                    <h1 className="text-5xl md:text-8xl mt-12 md:mt-0 font-bold tracking-tighter leading-[1.1]">
                        Decoding Health <br />
                        Through the <br />
                        <span className="font-serif italic text-aurora-emerald text-glow text-6xl md:text-9xl font-light">
                            Atomic World
                        </span>
                    </h1>
                </ScrollReveal>
            </div>
        </section>
    );
};
