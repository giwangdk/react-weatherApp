import React from 'react';

import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div></div>
            <div></div>
        </div>
    </div>
);

CurrentDay.propTypes ={
    weekday:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature : PropTypes.number.isRequired,
    weatherIcon : PropTypes.string.,
    weatherDescription : PropTypes.string.isRequired;
}

export default CurrentDay;
