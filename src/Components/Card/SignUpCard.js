import React from 'react'

export default function SignUpCard() {
    return (
        <div className='card'>
            <div className='card-header bg-dark text-light'>
                <h2 className='lead'>Sign Up!</h2>
            </div>
            <div className='card-body'>
                <button  className='btn btn-success btn-block text-center text-white mb-4'>Join The Forum</button>
                <button  className='btn btn-danger btn-block text-center text-white mb-4'>Login!</button>
                <div className='input-group mb-3'>
                    <input className='form-control' placeholder='Enter Your Email'/>
                    <div className='input-group-append'>
                        <button className='btn btn-primary btn-sm text-center text-white'>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
