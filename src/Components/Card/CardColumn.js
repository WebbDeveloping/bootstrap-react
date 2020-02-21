import React from 'react'
import SmallCard from './SmallCard'


export default function CardRow() {
    return (
        <div className='col-lg-2 d-none d-md-block pt-5'>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
        </div>
    )
}