import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setcoffees] = useState(initialCoffees);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
            {
                    coffees.map(coffee => <CoffeeCard coffee={coffee}
                        key={coffee._id}>
                        coffees = {coffees}
                        setcoffees = {setcoffees}
                        </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;