import { useState, useEffect } from "react";

const useTimer = (timeInSeconds, autoStart = false) => {
    const [seconds, setSeconds] = useState(timeInSeconds);
    const [active, setActive] = useState(autoStart);

    useEffect(() => {
        let timerInterval;

        if (active && seconds > 0) {
            timerInterval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setActive(false);
        }

        return () => clearInterval(timerInterval);
    }, [active, seconds]);

    /**
     * Starting the timer
     */
    const startTimer = () => {
        setActive(true);
    };

    /**
     * Resetting the timer
     */
    const resetTimer = () => {
        setSeconds(timeInSeconds);
    };

    return { seconds, active, startTimer, resetTimer };
};

export default useTimer;
