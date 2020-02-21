import React from 'react'
import LeftSection from '../Sections/LeftSection';
import RightSection from '../Sections/RightSection';

export default function Home() {
    return (
        <div className='row'>
            <LeftSection />
            <RightSection />
        </div>
    )
}