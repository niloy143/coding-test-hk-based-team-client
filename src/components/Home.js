import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [involvedInSectors, setInvolvedInSectors] = useState([]);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            fetch(`http://localhost:1234/user?id=${userId}`)
                .then(res => res.json())
                .then(data => {
                    setUserLoading(false);
                    setUser(data);
                    setInvolvedInSectors(data.involvedInSectors);
                })
        }
        else {
            setUserLoading(false);
        }
    }, [])

    return (
        userLoading ? <></> : !user ? <Navigate to="/form" /> : <div className='rounded-xl shadow-md p-8 mx-3 sm:mx-auto my-12 max-w-lg'>
            <h3 className='text-3xl font-semibold mb-5 text-center'>{user.name}</h3>
            <h3 className='text-xl font-semibold ml-2'>Involved In</h3>
            <div className='flex items-center gap-1 flex-wrap pt-3 pb-6'>  {involvedInSectors.map((sector, i) => <span key={i} className='py-1 px-3 bg-neutral/10 rounded-full'>{sector}</span>)}</div>
            <Link to="/edit">
                <button className='btn'>Edit</button>
            </Link>
        </div>
    );
};

export default Home;