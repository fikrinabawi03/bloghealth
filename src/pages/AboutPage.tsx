import { About } from '../components/About';
import { VideoBackground } from '../components/VideoBackground';
import { NoiseOverlay } from '../components/NoiseOverlay';

export const AboutPage = () => {
    return (
        <div className="relative min-h-screen">
            <NoiseOverlay />
            <VideoBackground />

            <div className="relative z-10 font-sans">
                <main>
                    <About />
                </main>
            </div>
        </div>
    );
};
