import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

export const BlogGrid = () => {
    return (
        <section className="py-32 px-6 relative z-10" id="articles">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Recent <br />
                        <span className="font-serif italic text-aurora-teal text-glow">Article</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-aurora-teal to-transparent rounded-full" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => {
                        const isTBA = post.category === 'TBA';

                        return (
                            <ScrollReveal delay={i * 0.2} key={post.id} className="glass p-1 rounded-3xl group h-full">
                                <div className="bg-background/80 rounded-[1.35rem] h-full overflow-hidden flex flex-col items-stretch">
                                    {isTBA ? (
                                        <div className="h-full w-full flex flex-col">
                                            <div className="h-64 bg-white/5 relative flex items-center justify-center p-8 overflow-hidden grayscale opacity-50">
                                                {/* Abstract placeholder visual */}
                                                <div className={`w-32 h-32 rounded-3xl border border-white/10 relative z-10 flex items-center justify-center bg-black/50 backdrop-blur-md`}>
                                                    <span className="text-xs text-center text-white/30 tracking-widest uppercase">
                                                        Coming<br />Soon
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col justify-between opacity-50">
                                                <div>
                                                    <span className={`text-xs font-bold tracking-widest uppercase text-white/30 mb-4 block`}>
                                                        {post.category}
                                                    </span>
                                                    <h3 className="text-2xl font-semibold mb-4 text-white/50">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-white/40 font-light text-sm leading-relaxed mb-8">
                                                        {post.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={`/article/${post.id}`} className="block h-full hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer flex flex-col">
                                            <div className="h-64 bg-white/5 relative flex items-center justify-center p-8 overflow-hidden group-hover:bg-white/10 transition-colors">
                                                {/* Decorative radial gradient based on category color */}
                                                <div className={`absolute inset-0 bg-aurora-${post.color}/20 blur-[80px] scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />

                                                {/* Cover Image or Abstract placeholder visual */}
                                                {post.coverImage ? (
                                                    <img
                                                        src={post.coverImage}
                                                        alt={post.imageAlt}
                                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 MixBlendMode-luminosity"
                                                    />
                                                ) : (
                                                    <div className={`w-32 h-32 rounded-3xl border border-aurora-${post.color}/30 rotate-12 group-hover:rotate-0 transition-transform duration-700 relative z-10 flex items-center justify-center bg-black/50 backdrop-blur-md`}>
                                                        <span className="text-xs text-center text-white/50 tracking-widest uppercase">
                                                            3D Model<br />Placeholder
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-8 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <span className={`text-xs font-bold tracking-widest uppercase text-aurora-${post.color} mb-4 block`}>
                                                        {post.category}
                                                    </span>
                                                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-aurora-teal transition-colors duration-300">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-white/60 font-light text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                                                        {post.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-xs tracking-widest text-white/40 uppercase font-medium">Read Article</span>
                                                    <motion.div
                                                        className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-aurora-${post.color} group-hover:text-aurora-${post.color} transition-colors`}
                                                    >
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
