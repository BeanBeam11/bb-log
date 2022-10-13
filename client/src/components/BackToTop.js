import React, { useState, useEffect } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 5) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            {isVisible && (
                <div
                    className="fixed bottom-16 right-16 text-yellow-700/50 hover:cursor-pointer hover:text-yellow-700/80"
                    onClick={scrollToTop}
                >
                    <ArrowUpCircleIcon className="w-14 h-14" />
                </div>
            )}
        </div>
    );
}
