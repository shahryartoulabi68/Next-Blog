import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const item = window.localStorage.getItem(key);
                if (item) {
                    setState(JSON.parse(item));
                }
            } catch (error) {
                console.error("Error reading from localStorage", error);
            }
        }
    }, [key]);

    const setValue = (value) => {
        setState(value);
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error("Error writing to localStorage", error);
            }
        }
    };

    return [state, setValue];
}

export default useLocalStorage;