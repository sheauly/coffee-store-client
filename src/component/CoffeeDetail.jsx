
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeDetail = () => {
    const { _id, name, quantity, price, photo, test, details, supplier } = useLoaderData();
    const navigate = useNavigate();

    
    const handleCoffedetail = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeDetail= Object.fromEntries(formData.entries())
        console.log(coffeeDetail);

        // coffee detail
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(coffeeDetail)
        })
            .then(res => res.json())
            .then(data => {
             if (data.modifiedCount) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Coffee Detail successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setTimeout(() => {
                                 navigate('/')   
                                },500)
                            }
        })
    }
    return (
        <div>
            <div className='p-24'>
                <div className='p-12 text-center space-y-4'>
                    <h1 className="text-3xl font-semibold ">Coffee Detail</h1>

                </div>
                <form onSubmit={handleCoffedetail}>
                    <div className='grid md:grid-cols-2 gap-4 '>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter Your Name" />

                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />

                            <label className="label">Price</label>
                            <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Enter coffee price" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter quantity" />

                            <label className="label">Test</label>
                            <input type="text" name='test' defaultValue={test} className="input w-full" placeholder="Enter coffee test" />

                            <label className="label">Details</label>
                            <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">PHOTO</legend>
                        <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter photo" />
                    </fieldset>
                    <button className='btn w-full'>Coffee Detail</button>
                </form>

            </div>
        </div>
    );
};

export default CoffeeDetail;