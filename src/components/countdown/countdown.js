import React from "react";
import useTimer from "../../hooks/useTimer";

const Countdown = () => {
    const { seconds, active, resetTimer } = useTimer(60, true);

    const formatTime = (seconds) => {
        // Calculate minutes and remaining seconds
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Pad minutes and seconds with leading zeros if necessary
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");

        // Return formatted time string
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div className='flex flex-col items-center p-[20px]'>
            <p className='text-[20px] leading-6 font-bold'>
                Timer remaining : {formatTime(seconds)}
            </p>
            <p className='text-[16px] leading-5 font-semibold mt-[20px]'>
                {active ? "Timer is Running" : "Timer has Ended"}
            </p>
            <button
                className='border-2 border-solid border-black mt-[20px] rounded-xl p-[5px] bg-gray-500 font-bold'
                onClick={resetTimer}
            >
                Reset
            </button>
        </div>
    );
};

export default Countdown;
