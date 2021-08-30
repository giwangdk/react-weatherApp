import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';

const Forecast = ({forecast}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}></div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between"></Col>
        </Row>
    </Container>
);

Forecast.propTypes= {
    forecast:PropTypes.shape({
        currentDay:PropTypes.object,
        currentDayDetails : PropTypes.array,
        upcomingDays:PropTypes.array,
    })
}

export default Forecast;
