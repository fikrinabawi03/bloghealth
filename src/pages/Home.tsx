import { Hero } from '../components/Hero';
import { BlogGrid } from '../components/BlogGrid';
import { VideoBackground } from '../components/VideoBackground';
import { NoiseOverlay } from '../components/NoiseOverlay';

export const Home = () => {
    return (
        <div className="relative min-h-screen">
            <NoiseOverlay />
            <VideoBackground />

            <div className="relative z-10 font-sans">
                <main>
                    <Hero />
                    <BlogGrid />
                </main>
            </div>
        </div>
    );
};
