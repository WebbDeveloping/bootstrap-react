import React from 'react'
import downImg from '../../assets/down.jpeg'

export default function SideCard() {
    return (
        <div className='card mt-5'>
            <div className='card-body'>
                <img src={downImg} className='d-block img-fluid mb-3' />
                <div className='text-center'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                    Cumo sociis natoque penatibus et magnis dis p. Aenean commodo ligula eget dolor. Aenean massa. Cumi sociis natoque 
                    penatibus et magnis dis p
                    </p>
                </div>
            </div>
        </div>
    )
}
