import React, { use } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';

const SignUP = () => {

    const {createUser} = use(AuthContexts);
    console.log(createUser)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());

        console.log(email, password, userProfile)
        // const name = formData.get('name')
        // const email = formData.get('email');
        // const password = formData.get('password')
        console.log(name, email, password);

        // create User in tne firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // save profile info in the db
            })
            .catch(error => {
                console.log(error)
                
        });
        
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shadow-2xl">
            <div className="card-body">
                <h1 className='text-5xl font-bold'>SignUp Now</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="name" />
                    {/* address */}
                    <label className="label">Adress</label>
                    <input type="text" name='address' className="input" placeholder="addrss" />
                    {/* phone */}
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone" />
                    {/* Photo */}
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="photo" />
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">SignUp</button>
                </form>
            </div>
        </div>

    );
};

export default SignUP;