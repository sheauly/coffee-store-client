import React, { use } from 'react';
import { AuthContexts } from '../contexts/AuthContexts';

const SignIn = () => {
    const { signInUser } = use(AuthContexts);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // firebase sign in send 
        signInUser(email, password)
            .then(result => {
                console.log(result)

                const signInfo = {
                    email,
                    lastSignTime: result.user?.metadata?.lastSignTime
                }
                // update last sign in to the database
                fetch('http://localhost:3000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                    console.log('after update patch', data)
                })
            })
            .catch(error => {
                console.log(error);
        })
        
        
    }

   
    return (
        <div className="card bg-base-100 max-w-sm mx-auto shadow-2xl">
            <div className="card-body">
                <h1 className='text-5xl font-bold'>SignUp Now</h1>
                <form onSubmit={handleSignIn} className="fieldset">
                  
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">SignIn</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;