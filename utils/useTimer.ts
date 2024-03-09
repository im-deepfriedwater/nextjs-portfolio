import { useEffect, useRef } from "react";

const useTimer = (callback: () => void, delay: number) => {
    const savedCallback = useRef(() => {});

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) savedCallback.current();
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, []);
};

export default useTimer;