import React from 'react';
import PropTypes from 'prop-types';

const AppointmentLine = ({ posts }) => {
    return (
        posts.map(({ totalPrice }) =>
            <div> pret {totalPrice}
            </div>
        )
    );

}

export default AppointmentLine;

AppointmentLine.propTypes = {
    posts: PropTypes.array
}
