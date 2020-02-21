import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import Styled from 'styled-components';
import johnimg from '../../assets/johnimg.jpg';

const Styles = Styled.div`
.jumbo{
    /* background: url(${johnimg})  no-repeat fixed bottom; */
    background-size: coveer;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

export const Jum = ()=> {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </Container>
            </Jumbo>
        </Styles>
    )
}
export default Jum;