import React from 'react';
import FoxShoe from '../../assets/FoxShoe.jpg'

const Card = () => {
    return (
        <div className='card text-center'>
            <div classname='overflow'>
                <img src={FoxShoe} alt="" />
            </div>
        </div>
    )
}
export default Card;