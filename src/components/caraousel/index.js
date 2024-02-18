import React, { useState } from "react";

const Caraousel = () => {
    const [active, setActive] = useState(0);

    const imgUrls = [
        "https://i.pinimg.com/originals/71/28/3b/71283bb49db55cfee5bb6acd1389c465.jpg",
        "https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4194850.jpg&fm=jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK73gU3IkpoUr_LizFuy7fkcYNButODKDz_w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlL6DaoL4CP92gBqx-1LD6WEXkyAosVMHPw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWwuTm4-GWV_aRzTdMn3jaWSF9JCru6e9bA&usqp=CAU",
    ];

    const prevClickHandler = () => {
        if (active === 0) {
            setActive(imgUrls.length - 1);
        } else {
            setActive((prev) => prev - 1);
        }
    };

    const nextClickHandler = () => {
        if (active === imgUrls.length - 1) {
            setActive(0);
        } else {
            setActive((prev) => prev + 1);
        }
    };

    return (
        <section className='py-[50px] bg-neutral-900 min-h-screen'>
            <h1 className='text-2xl text-center text-[#fff]'>Caraousel</h1>
            <div className='flex justify-evenly mt-[50px]'>
                <button className="text-[#fff] w-[60px]" onClick={prevClickHandler}>Previous</button>
                <div>
                    <img
                        className='h-[300px] w-[200px] rounded-[10px]'
                        src={imgUrls[active]}
                        alt='Random'
                    />
                </div>
                <button className="text-[#fff] w-[60px]" onClick={nextClickHandler}>Next</button>
            </div>
        </section>
    );
};

export default Caraousel;
