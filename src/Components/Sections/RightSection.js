import React from 'react'
import Card from '../Card/Card';
import SignUpCard from '../Card/SignUpCard';
import SideCard from '../Card/SideCard';

export default function RightSection() {
    return (
        <div className='col-lg-4'>
            <SideCard />
            <br/>
            <SignUpCard />
            <br/>
            {/* <Card />
            <br/> */}
        </div>
    )
}
