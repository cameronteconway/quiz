import { useState, useEffect } from 'react';

// Get a random integer up to max number
export const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Shuffle Array
export const shuffle = (array: any[]): any[] => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

// Decode HTML
export const decodeHTML = (html: string) => {
    const txt: HTMLTextAreaElement = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};

// Get width of window
const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return { width };
};

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};
