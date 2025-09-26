// components/LoadingScreen.tsx
import { useEffect, useState } from 'react';
import logo from '/assets/logo.png';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (!imageLoaded) return; // Don't start timer until image is loaded

        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(800 - elapsedTime, 0); // Ensure minimum 1.5s

            setTimeout(() => {
                setIsLoading(false);
            }, remainingTime);
        };

        // Check if already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [imageLoaded]); // Re-run effect when image loads

    return (
        <div
            className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <img
                src={logo}
                alt="Swipeshare"
                className="h-16 w-auto animate-pulse"
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
};

export default LoadingScreen;