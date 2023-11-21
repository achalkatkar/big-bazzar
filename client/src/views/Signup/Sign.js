import React from 'react';
import  "./Sign.css"

function SignUp(){
    return (
        <div>
            <div className='signup-container'>
                <h1 className='signup-title'>SignUp </h1>

                <div className='input-container'>
                    <label className='input-label'>Name</label>
                    <input
                      type='text'
                      placeholder='Enter your name'
                      className='input-field'
                    />  
                </div>
            </div>
        </div>
    )
}

export default SignUp