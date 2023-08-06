import React from 'react'
import PropTypes from 'prop-types'
export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li className='nav-list'>{props.firstLink}</li>
                <li className='nav-list'>{props.secondLink}</li>
                <li className='nav-list'>{props.thirdLink}</li>
                <li className='nav-list'>{props.fourthLink}</li>
            </ul>
        </nav>
    );
}
Nav.prototype = {firstLink: PropTypes.string.isRequired,
secondLink: PropTypes.string.isRequired,
thirdLink: PropTypes.string.isRequired,
fourthLink: PropTypes.string.isRequired}