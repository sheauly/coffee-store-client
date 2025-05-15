import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)

        //send coffee data to the db
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)     
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('coffee added Successfully!')
                    Swal.fire({
                        title: "coffee added Successfully!",
                        icon: "success",
                        draggable: true
                      });
           }
        })
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-3xl font-semibold ">Add Now Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid md:grid-cols-2 gap-4 '>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter Your Name" />

                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />

                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Enter quantity" />

                        <label className="label">Test</label>
                        <input type="text" name='test' className="input w-full" placeholder="Enter coffee test" />

                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">PHOTO</legend>
                    <input type="text" name='photo' className="input w-full" placeholder="Enter photo" />
                </fieldset>
                <button className='btn w-full'>Add to coffee</button>
            </form>
           
        </div>
    );
};

export default AddCoffee;