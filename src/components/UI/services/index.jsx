import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {motion} from "framer-motion";
import './Services.css';

import serviceData from "../../../assets/data/serviceData";

const Services = () => {
    return (
        <section className='services'>
            <Container>
                <Row>
                    {
                        serviceData.map(({icon, title, subtitle, bg}) =>(
                            <Col lg='3' md='4' key={title}>
                                <motion.div whileHover={{scale: 1.1}} className='service__item' style={{background: `${bg}`}}>
                                    <span><i className={icon}></i></span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;
