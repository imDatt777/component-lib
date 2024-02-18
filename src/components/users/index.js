import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Users = () => {
    const { data } = useFetch("https://api.github.com/users");

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [data]);

    return (
        <div className='text-center'>
            <h3 className='text-[20px] leading-6 font-bold'>User Data</h3>
            <div className='mt-[20px] grid grid-cols-2 gap-y-[10px]'>
                {userData &&
                    userData.map((user, idx) => (
                        <div className='flex items-center' key={idx}>
                            <img
                                className='h-[160px] w-[120px]'
                                src={user?.avatar_url}
                                alt='User Avatar'
                            />
                            <p className='ml-[10px] text-[16px] leading-5 font-semibold'>
                                {user?.login}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Users;
