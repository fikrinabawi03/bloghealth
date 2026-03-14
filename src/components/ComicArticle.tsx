import { BlogPost, ComicPanel } from '../data/posts';
import { ScrollReveal } from './ScrollReveal';

export const ComicArticle = ({ post }: { post: BlogPost }) => {
    if (!post.chapters) return null;

    return (
        <div className="max-w-4xl mx-auto comic-container pb-32">
            {post.chapters.map((chapter) => (
                <div key={chapter.id} className="mb-32 relative">

                    {/* Chapter Title */}
                    <ScrollReveal className="text-center mb-16">
                        <div className="inline-block relative">
                            <span className={`absolute -inset-1 bg-aurora-${post.color}/20 blur-xl rounded-full`} />
                            <h2 className={`relative text-3xl md:text-5xl font-extrabold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-aurora-${post.color}`}>
                                {chapter.title}
                            </h2>
                        </div>
                        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-8" />
                    </ScrollReveal>

                    <div className="space-y-12 md:space-y-24">
                        {chapter.panels.map((panel) => (
                            <Panel key={panel.id} panel={panel} color={post.color} />
                        ))}
                    </div>
                </div>
            ))}

            <ScrollReveal className="text-center italic text-white/40 tracking-widest uppercase text-sm">
                End of Chapter
            </ScrollReveal>
        </div>
    );
};

const Panel = ({ panel, color }: { panel: ComicPanel, color: string }) => {
    const alignClass = panel.align === 'center'
        ? 'mx-auto max-w-2xl'
        : panel.align === 'left'
            ? 'mr-auto max-w-2xl'
            : 'ml-auto max-w-2xl';

    return (
        <ScrollReveal
            delay={0.1}
            className={`relative ${alignClass} w-full`}
        >
            <div className={`p-1 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent relative ${panel.speaker === 'character' ? 'rotate-[-1deg]' : ''}`}>
                <div className={`absolute inset-0 bg-aurora-${color}/5 blur-[60px] rounded-full`} />
                <div className="bg-black/90 backdrop-blur-xl rounded-[1.8rem] overflow-hidden border border-white/10 relative">

                    {/* Visual/Image Area (If Panel has an image) */}
                    {(panel.imageUrl || panel.imageAlt) && (
                        <div className="w-full h-48 md:h-80 bg-white/5 relative flex items-center justify-center border-b border-white/10 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-tr from-aurora-${color}/20 to-transparent opacity-30`} />

                            {panel.imageUrl ? (
                                <img src={panel.imageUrl} alt={panel.imageAlt || ''} className="w-full h-full object-cover relative z-10" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="border border-white/20 border-dashed rounded-xl w-full h-full flex items-center justify-center bg-black/50 relative z-10">
                                        <span className="text-xs md:text-sm text-white/50 text-center max-w-[70%] font-light italic">
                                            [Image Placeholder: {panel.imageAlt}]
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Speech / Text Area */}
                    <div className="p-6 md:p-10">
                        {panel.speaker === 'character' ? (
                            <div className="flex gap-4 items-start">
                                {/* Character Avatar Placeholder */}
                                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-white/10 items-center justify-center overflow-hidden">
                                    <span className="text-xs font-bold text-white/50">{panel.characterName?.[0]}</span>
                                </div>
                                <div className="flex-1">
                                    <span className={`text-[10px] md:text-xs font-bold tracking-wider uppercase text-aurora-${color} mb-2 block`}>
                                        {panel.characterName}
                                    </span>
                                    {/* Speech Bubble Style */}
                                    <div className={`bg-white/10 rounded-2xl p-5 md:p-6 rounded-tl-none border border-white/5 shadow-xl`}>
                                        <p className="text-white md:text-lg font-medium leading-relaxed">
                                            "{panel.text}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Narrator Style */
                            <div className="text-center px-4 md:px-12 py-4">
                                <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed">
                                    {panel.text}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ScrollReveal >
    );
};
