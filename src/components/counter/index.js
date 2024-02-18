import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const clickHandler = (usecase) => {
        switch (usecase) {
            case "increase":
                setCount((prev) => prev + 1);
                break;
            case "decrease":
                setCount((prev) => prev - 1);
                break;
            case "reset":
                setCount(0);
                break;
            default:
                break;
        }
    };

    return (
        <section className='bg-indigo-900 min-h-screen flex flex-col'>
            <div className='px-6 pt-10 pb-8 flex flex-col justify-center items-center rounded min-h-[400px]'>
                <h1 className='text-2xl font-medium text-zinc-100'>Counter</h1>
                <h3 className='text-xl text-zinc-300 mt-2'>
                    Counter Value: {count}
                </h3>
            </div>
            <div className='flex justify-between mx-[20%] my-2'>
                <button
                    className='border border-zinc-300 rounded-2xl px-3 py-2 text-zinc-100'
                    onClick={clickHandler.bind(this, "increase")}
                >
                    Increment
                </button>
                <button
                    className='border border-zinc-300 rounded-2xl px-3 py-2 text-zinc-100'
                    onClick={clickHandler.bind(this, "decrease")}
                >
                    Decrement
                </button>
                <button
                    className='border border-zinc-300 rounded-2xl px-3 py-2 text-zinc-100'
                    onClick={clickHandler.bind(this, "reset")}
                >
                    Reset
                </button>
            </div>
        </section>
    );
};

export default Counter;
