import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';

export const Jum = ()=> {
    return (
            <Jumbo fluid className='jumbo'>
                <Container>
                        <h1 className='display-3'>Hello World!</h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p>
                        <a className='btn btn-primary btn-lg'>Learn More >></a>
                    </p>
                </Container>
            </Jumbo>
    )
}
export default Jum;