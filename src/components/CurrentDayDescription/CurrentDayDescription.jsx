import React from 'react';
import PropTypes from 'prop-types';

const CurrentDayDescription = ({forecast}) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {fore}
        </div>
    </div>
);

CurrentDayDescription.propTypes = {
    forecast:PropTypes.array
}

export default CurrentDayDescription;
