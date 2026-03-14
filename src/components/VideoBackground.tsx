export const VideoBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none bg-black">
            {/* 
              Fallback high-quality placeholder video. 
              To use your own, replace the `src` below with `/assets/bg-video.mp4` 
              after placing the file in the `public/assets/` folder.
            */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
            >
                {/* 
                  Using an abstract/science-themed royalty-free placeholder 
                  that roughly matches the requested aesthetic.
                */}
                <source
                    src="/assets/bg-video.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Subtle semi-transparent gradient overlay to ensure text legibility and add a dark blue/purple tint */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-indigo-950/70 to-slate-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
};
