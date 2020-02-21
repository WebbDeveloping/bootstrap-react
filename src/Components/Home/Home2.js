import React from 'react'
import CardRow from './Card/CardRow'
import  CardColumn  from './Card/CardColumn';

export default function Home() {
    return (
        <div className='row'>
            <CardColumn />
            <CardRow />
        </div>
    )
}