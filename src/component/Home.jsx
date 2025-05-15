import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
            {
                    coffees.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;