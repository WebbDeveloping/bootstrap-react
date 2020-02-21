import React from 'react'
import Card from './Card'
import Styled from 'styled-components';

const Styles = Styled.div`
 .card-text{
     font-size: 0.9rem;
    padding: 0.4rem 1.9rem;

 }
 .container-fluid .row{
     padding-top: 6rem;

 }
 .overflow{
     overflow:hidden
 }
`;

export default function CardRow() {
    return (
        <div className='col-lg-10'>
        <h1>Welcome to my page</h1>
            <div className='row'>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
            </div>
        </div>
    )
}
